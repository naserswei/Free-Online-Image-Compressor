import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type props = {
  className: string;
  setImageType: Dispatch<SetStateAction<string>>;
  imageType: string;
};

function Dropdown({ className, setImageType, imageType }: props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={cn(className)}>
          {imageType}
          <ArrowDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>choose your image type</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={imageType} onValueChange={setImageType}>
          <DropdownMenuRadioItem value="JPG">JPG</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="PNG">PNG</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="JPEG">JPEG</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="WEBP">WEBP</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdown;
