export type ImageCardProps = {
  title: string;
  loading: boolean;
  imageSrc: string | null;
  Isloaded: boolean;
  originalSize: number;
  compressedImageSrc: string | null;
  compressedSize: number;
  type: "original" | "compressed";
};
