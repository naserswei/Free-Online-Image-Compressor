import { Download, ImageIcon, Sparkles, Upload } from "lucide-react";
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Skeleton } from "./ui/skeleton";
import { cn, formatSize, savingsPercentage } from "@/lib/utils";
import { ImageCardProps } from "@/lib/types/types";

function ImageCard({
  loading,
  imageSrc,
  Isloaded,
  title,
  originalSize,
  compressedImageSrc,
  compressedSize,
  type,
}: ImageCardProps) {
  const displayImageSrc = type === "original" ? imageSrc : compressedImageSrc;
  const displaySize = type === "original" ? originalSize : compressedSize;

  const calculatedSavingsPercentage = savingsPercentage({
    originalSize,
    compressedSize,
  });

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-4">
        <div
          className={cn(
            "w-10 h-10 bg-gradient-to-r rounded-lg flex items-center justify-center",
            type === "compressed"
              ? "from-green-500 to-green-600"
              : "from-blue-500 to-blue-600"
          )}
        >
          {type === "original" ? (
            <Upload className="w-5 h-5 text-white" />
          ) : (
            <Download className="w-5 h-5 text-white" />
          )}
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>

      {loading && !displayImageSrc ? (
        <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden">
          <Skeleton className="h-full w-full" />
        </AspectRatio>
      ) : displayImageSrc ? (
        <AspectRatio
          ratio={16 / 9}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            className="object-cover w-full h-full"
            src={displayImageSrc}
            alt={type === "original" ? "Original" : "Compressed"}
          />
        </AspectRatio>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
          <div className="text-center">
            {type === "original" ? (
              <>
                <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">No image selected</p>
              </>
            ) : (
              <>
                <Sparkles className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">Compressed Image</p>
              </>
            )}
          </div>
        </div>
      )}

      {Isloaded && (
        <div className="mt-4 space-y-2">
          {type === "original" ? (
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="text-red-700 font-semibold">
                Original Size: {formatSize(displaySize)}
              </p>
            </div>
          ) : (
            <>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-700 font-semibold">
                  Compressed Size: {formatSize(displaySize)}
                </p>
              </div>
              {calculatedSavingsPercentage > 0 && (
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-700 font-semibold">
                    Size Reduced: {calculatedSavingsPercentage}%
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ImageCard;
