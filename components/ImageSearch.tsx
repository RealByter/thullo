import { MdImage } from "react-icons/md";
import Popover from "./Popover";

type ImageSearchProps = {
  setImage: () => void;
};

export default function ImageSearch({ setImage }: ImageSearchProps) {
  return (
    <Popover buttonText="Cover" icon={MdImage}>
      hello
    </Popover>
  );
}
