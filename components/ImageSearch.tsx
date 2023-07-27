import { MdImage } from "react-icons/md";
import Popover from "./Popover";
import SearchInput from "./SearchInput";
import Skeleton from "react-loading-skeleton";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import getPhotos from "./serverActions/getPhotos";
import Image from "next/image";

type ImageSearchProps = {
  setImage: (url: string) => void;
};

export default function ImageSearch({ setImage }: ImageSearchProps) {
  const [searchInput, setSearchInput] = useState("");
  const { data, status } = useQuery(["photos", searchInput], () =>
    getPhotos(searchInput),
  );

  const skeletons: number[] = new Array(12);
  skeletons.fill(0);

  const wrapperClasses = "relative h-[50px] w-[50px] overflow-hidden rounded-[4px]"

  let images: any = [];
  if (status === "loading") {
    images = (
      <div className="mt-5 grid auto-rows-[50px] grid-cols-[repeat(4,50px)] gap-2">
        {skeletons.map((num, index) => (
          <div key={index} className={wrapperClasses}>
            <Skeleton className="h-full w-full" />
          </div>
        ))}
      </div>
    );
  } else {
    if (data && data.length > 0) {
      images = (
        <div className="mt-5 grid auto-rows-[50px] grid-cols-[repeat(4,50px)] gap-2">
          {data.map((image: any) => (
            <button onClick={() => setImage(image.urls.regular)} key={image.id} className={`${wrapperClasses} relative after:w-full after:h-full after:absolute after:top-0 after:left-0 hover:after:bg-white/50 focus-visible:after:bg-white/50`}>
              <Image fill objectFit="cover" src={image.urls.small} alt="" />
            </button>
          ))}
        </div>
      );
    } else {
      images = (
        <p className="text-sm text-[#828282] w-[224px] text-center mt-5">
          No photos found for the query <strong>"{searchInput}"</strong>
        </p>
      );
    }
  }

  return (
    <Popover buttonText="Cover" icon={MdImage}>
      <div className="flex flex-col rounded-xl bg-white px-3 py-4 shadow-main border">
        <h3 className="text-sm font-semibold text-[#4F4F4F]">Photo Search</h3>
        <p className="mb-3 text-sm text-[#828282]">
          Search unsplash for photos
        </p>
        <SearchInput
          search={(input: string) => {
            setSearchInput(input);
          }}
        />
        {images}
      </div>
    </Popover>
  );
}
