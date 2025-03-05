// upload.tsx
'use client';
import { useEffect, useState } from 'react';
import { Image } from '@/app/lib/definitions';

interface UploadProps {
  onImagesSelected: (files: Image[]) => void;
  itemImages?: Image[];
}

export default function ImageUploader({ onImagesSelected, itemImages = [] }: UploadProps) {
  const [selectedImages, setSelectedimages] = useState<Image[]>(itemImages);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);

      // Map the files to Image objects
      const newImages = filesArray.map((file) => ({
        id: '',  // Empty initially; you can set this after upload if needed
        file,
        name: file.name,
        description: '',
      }));

      // Update the state by appending new images
      setSelectedimages(newImages);
    }
  };
  
  // Runs whenever `selectedFiles` changes, ensuring updates happen after state has been set
  useEffect(() => {
    if (selectedImages.length > 0) {
      onImagesSelected(selectedImages);
    }
  }, [selectedImages]); 

  return (
    <div>
      <label htmlFor="images" className="block text-base font-medium text-gray-700 mb-2">
          Add Images:
      </label>
      <div>
        <input type="file" multiple onChange={handleFileChange} 
          className="block w-full rounded-md border border-gray-400 px-4 py-2 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
      </div>
    </div>
  );
}
