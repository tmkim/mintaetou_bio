'use client';  // Explicitly mark the file as client-side

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ItemTable from '@/app/ui/item-table';
import ItemDetails from '@/app/ui/items/details';
import { Item } from '@/app/lib/definitions';
import { PlusIcon } from '@heroicons/react/24/outline';
import CreateModal from '@/app/ui/items/create-modal';
import Pagination from '@/app/ui/pagination';
import DeleteItemsButton from '@/app/ui/items/multi-delete';
import useSWR, { mutate } from "swr";
// import ItemTable from '../components/ItemTable';

type FilterChecks = {
  Dining: boolean;
  Food: boolean;
  Media: boolean;
  Travel: boolean;
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const r = await res.json()
  return r.results;
};

const ItemsPage: React.FC = () => {
  // const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("token")); // Read token only on client
  }, []);

  const searchParams = useSearchParams();
  
  const queryParam = searchParams.get('query') || '';
  const pageParam = searchParams.get('page') || '1';
  const limitParam = searchParams.get('limit') || '10';

  const [searchQuery, setSearchQuery] = useState<string>(queryParam);
  const [currentPage, setCurrentPage] = useState<number>(parseInt(pageParam, 10));
  const [pageLimit, setPageLimit] = useState<number>(parseInt(limitParam, 10));
  const [totalItems, setTotalItems] = useState<number>(0);

  const [createModal, setCreateModal] = useState<boolean>(false);

  const [filterCheck, setFilterCheck] = useState<{[key: string]: boolean}>({
    Dining: false,
    Food: false,
    Media: false,
    Travel: false,
  });

  const handleFilterCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilterCheck((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleLimitChange = (newLimit: number) => {
    setPageLimit(newLimit);
    setCurrentPage(1); // Optional: reset to first page when limit changes
  };

  const updateQueryParams = (newQuery: string, newPage: number, newLimit: number) => {
    const uniqueCategories = Array.from(new Set(selectedCategories));

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('query', newQuery);
    newUrl.searchParams.set('page', newPage.toString());
    newUrl.searchParams.set('limit', newLimit.toString());

    uniqueCategories.forEach((category) => {
      newUrl.searchParams.append('category', category);
    });

    window.history.pushState({}, '', newUrl.toString());
  };

  const selectedCategories = Object.keys(filterCheck).filter((key) => filterCheck[key as keyof FilterChecks]);
  const categoryParams = selectedCategories.length > 0 ? '&category=' + selectedCategories.join('&category=') : '';
  const fetchURL = `http://localhost:8000/dankbank_back/items/?page=${currentPage}&query=${searchQuery}&limit=${pageLimit}${categoryParams}`

  const { data, error } = useSWR(fetchURL, fetcher)

  useEffect(() => {
    console.log("Updated data:", data);
    if (data) {
      setTotalItems(data.length); // Update total items from fetched data
    }
  }, [data]);

  // Call the updateQueryParams in response to changes in searchQuery, currentPage, and pageLimit
  useEffect(() => {
    updateQueryParams(searchQuery, currentPage, pageLimit);
  }, [searchQuery, currentPage, pageLimit]);

  const [item, setItemDetail] = useState<Item | null>(null);
  const handleRowClick = (rowData: Item) => {
    setItemDetail(rowData);
    console.log(rowData);
  };

  if (error) {
    return <div>Error loading items</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="w-full mx-auto px-4">
      <div className="flex flex-col lg:flex-row lg:space-x-4">
        {/* <Suspense fallback={<div>Loading search input...</div>}> */}
        {/* </Suspense> */}
        <div className="flex-grow flex-shrink-0 lg:basis-1/2">
          <div className="flex space-x-2 w-full">
              <input
                className="flex-grow w-3/4 p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Search items"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onBlur={() => updateQueryParams(searchQuery, 1, pageLimit)}
              />
            <button
              className="flex items-center justify-center min-w-[160px] p-2 text-lg font-semibold bg-green-500 text-white rounded-md hover:bg-green-600"
              onClick={() => setCreateModal(true)}
            >
              <PlusIcon className="w-5 mr-3 [stroke-width:3]" /> New Entry
            </button>
            {token && <DeleteItemsButton refreshData={() => {mutate(fetchURL)}} />}
          </div>
          <div className="flex justify-between space-x-2 mt-2">
            <div className="flex gap-2">
              {['Dining', 'Food', 'Media', 'Travel'].map((option, index) => {
                const key = option;
                return (
                  <label
                    key={index}
                    tabIndex={0}
                    className={`cursor-pointer select-none p-2 border rounded-md transition-colors peer-checked:bg-blue-500 peer-checked:text-white ${filterCheck[key as keyof FilterChecks]
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name={key}
                      className="hidden peer"
                      checked={filterCheck[key as keyof FilterChecks]}
                      onChange={handleFilterCheckboxChange}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-700">Rows per page:</span>
              <select
                className="ml-2 pr-8 py-2 rounded-lg border border-gray-300 appearance-none bg-white text-gray-700 focus:ring-2 focus:ring-blue-500"
                value={pageLimit}
                onChange={(e) => handleLimitChange(Number(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>

          <ItemTable
            onRowClick={handleRowClick}
            data={data}
            refreshData={() => mutate(fetchURL)}
          />
          
          {/* Page navigation buttons */}
          <Pagination
            page={currentPage}
            limit={pageLimit}
            totalItems={totalItems}
            onPageChange={(newPage) => {
              setCurrentPage(newPage); // Ensure state is updated
              updateQueryParams(searchQuery, newPage, pageLimit);
            }}
          />
        </div>

        {/* <!-- Item Details --> */}
        <div className="flex-grow flex-shrink-0 mt-4 pr-4 lg:basis-1/2 lg:mt-0">
          <ItemDetails item={item} />
        </div>
      </div>

      {createModal && (
        <CreateModal 
        onClose={() => setCreateModal(false)} 
        data={data}
        refreshData={() => {mutate(fetchURL)}
        }/>
      )}
    </main>


  );
};

export default ItemsPage;
