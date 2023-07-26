import { MdImage } from "react-icons/md";
import Popover from "./Popover";
import SearchInput from "./SearchInput";
import Skeleton from "react-loading-skeleton";

type ImageSearchProps = {
  setImage: () => void;
};

export default function ImageSearch({ setImage }: ImageSearchProps) {
  const skeletons: number[] = new Array(12);
  skeletons.fill(0);

  return (
    <Popover buttonText="Cover" icon={MdImage}>
      <div className="flex flex-col rounded-xl bg-white px-3 py-4 shadow-main">
        <h3 className="text-sm font-semibold text-[#4F4F4F]">Photo Search</h3>
        <p className="text-sm text-[#828282] mb-3">Search unsplash for photos</p>
        <SearchInput search={(input: string) => {}} />
        <div className="grid grid-cols-[repeat(4,50px)] auto-rows-[50px] gap-2 mt-5">
          {skeletons.map(() => (
            <ImageSkeleton />
          ))}
        </div>
      </div>
    </Popover>
  );
}

function ImageSkeleton() {
  return <Skeleton height={50} width={50} className="rounded-[4px]" />;
}
