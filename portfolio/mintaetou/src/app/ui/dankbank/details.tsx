'use client'
import { Item } from "@/app/lib/dankbank/definitions";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import ImageCarousel from "./img-carousel";

interface ItemDetailsProps {
    item: Item | null;
}

const getStarRating = (rating: number) => {
    const fullStars = Math.floor(rating / 20); // Full stars (20% per star)
    const partialStars = rating % 20; // The remainder gives the percentage for the next star
  
    return (
      <>
        {/* Full yellow stars */}
        {Array.from({ length: fullStars }, (_, i) => (
          <Star key={`full-${i}`} className="text-yellow-500 w-16 h-16 fill-current" />
        ))}
        
        {/* Partial star */}
        {partialStars > 0 && (
          <div className="relative w-16 h-16">
            {/* Full grey star as the background */}
            <Star className="text-gray-400 w-16 h-16 fill-current" />
            
            {/* Partial yellow star */}
            <div
              className="absolute top-0 left-0 w-16 h-16 overflow-hidden"
              style={{ width: `${(partialStars / 20) * 100}%` }} // Fix: Calculate the fill percentage
            >
              <Star className="text-yellow-500 w-16 h-16 fill-current" />
            </div>
          </div>
        )}
        
        {/* Empty grey stars */}
        {Array.from({ length: 5 - fullStars - (partialStars > 0 ? 1 : 0) }, (_, i) => (
          <Star key={`empty-${i}`} className="text-gray-400 w-16 h-16 fill-current" />
        ))}
      </>
    );
  };

// const ItemDetails = ({ item }: { item: Item }) => {
const ItemDetails: React.FC<ItemDetailsProps> = ({ item }) => {
    // console.log("Selected Row in DetailsPanel:", item);  
    if (!item) {
        return <p className="text-gray-500">Select a row to view details.</p>;
    }

    const renderName = () => {
        switch (item.category_data.website){
            case '':
                return(
                    <div className="mt-2 flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                    </div>
                )
            case null:
                return(
                    <div className="mt-2 flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                    </div>
                )
            default:
                return(
                    <div className="mt-2 flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">
                        <a 
                            href={getLink(item.category_data.website)} 
                            className="button" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {item.name}
                        </a>
                        </h2>
                    </div>
                    
                )
        }
    }

    const getFoodLocation = (location: string) => {
        return location.includes("Other") 
            ? location.substring(6) 
            : location;
    }
    const getSource = (source: string) => {
        return source.includes("Other") 
            ? source.substring(6) 
            : source;
    }

    const getLink = (url: string | number) => {
        return String(url).startsWith("http") ? String(url) : `https://${url}`
    }

    const renderDetails = () => {
        switch (item.category) {
            case 'Dining':
                return (
                    <>
                    <div className="flex items-center justify-between">
                        <div className="">
                            {item.category_data.location}
                        </div>
                        <div className="text-3xl">
                            {item.category_data.price_range}
                        </div>
                    </div>
                    <div className="text-sm">
                        <a 
                            href={getLink(item.category_data.gmap_url)} 
                            className="button" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {item.category_data.address}
                        </a>
                    </div>
                    <div className="">
                        Cuisine: {item.category_data.cuisine}
                    </div>
                    </>
                )
            case 'Food':
                return (
                    <>
                    <div className="flex items-center justify-between">
                        <div className="">
                            {getFoodLocation(String(item.category_data.location))}
                        </div>
                        <div className="text-3xl">
                            ${item.category_data.cost}
                        </div>
                    </div>
                    <div className="">
                        Cuisine: {item.category_data.cuisine}
                    </div>
                    </>
                )
            case 'Media':
                return (
                    <>
                    <div className="text-sm">
                        Artist: {item.category_data.artist}
                    </div>
                    <div className="text-sm">
                        Genre: {item.category_data.genre}
                    </div>
                    <div className="">
                        <a 
                            href={getLink(item.category_data.website)} 
                            className="button" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {getSource(String(item.category_data.source))} Link
                        </a>
                        {/* Eventually would like to include an embed from appropriate source
                            Also maybe add album art or something for the image carousel
                        */}
                    </div>
                    </>
                )
            case 'Travel':
                return (
                    <>
                    <div className="">
                        {item.category_data.location}
                    </div>
                    <div className="text-sm">
                        <a 
                            href={getLink(item.category_data.gmap_url)} 
                            className="button" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {item.category_data.address}
                        </a>
                    </div>
                    <div>
                        <a 
                            href={getLink(item.category_data.website)} 
                            className="button" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Link to Website
                        </a>
                    </div>
                    </>
                )
        }
    }


    return (
        <div className="flow-root bg-white">
            <div className="inline-block min-w-full align-middle">
                <div className="border-separate overflow-y-auto rounded-xl border-2 border-gray-400 border-4 border-solid flex flex-col text-xl"
                     style={{height: 'calc(102px + 70vh)'}}>
                    <div className="px-4 pb-10">
                        <div className="flex justify-center gap-1 mt-2 mb-2">{getStarRating(item.rating)}</div>
                        {/* Name */}
                        <div>
                            {renderName()}
                        </div>
                        
                        <div>
                            {renderDetails()}
                        </div>
                        <ImageCarousel itemId={Number(item.id)} />
                        <p className="mt-3">
                            "{item.review}"
                        </p>
                    </div>
                </div>
                    
            </div>
        </div>

    );
};

export default ItemDetails;
