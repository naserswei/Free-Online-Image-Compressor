import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSize(bytes: number): string {
  const ONE_MB = 1024 * 1024;

  if (bytes >= ONE_MB) {
    return `${(bytes / ONE_MB).toFixed(2)} MB`;
  }
  return `${Math.round(bytes / 1024)} KB`;
}

export const savingsPercentage = ({
  originalSize,
  compressedSize,
}: {
  originalSize: number;
  compressedSize: number;
}) => {
  return originalSize && compressedSize
    ? Math.round(((originalSize - compressedSize) / originalSize) * 100)
    : 0;
};

export const customFileValidator = (file: File) => {
  const allowedTypes = ["image/png", "image/jpg", "image/jpeg", "image/webp"];

  if (!allowedTypes.includes(file.type)) {
    return {
      code: "file-invalid-type",
      message:
        "Unsupported file type. Please upload a PNG, JPG, JPEG, or WebP image.",
    };
  }
  return null;
};
