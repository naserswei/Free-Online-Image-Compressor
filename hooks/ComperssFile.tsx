"use client";
import { useState, useCallback } from "react";
import imageCompression, { Options } from "browser-image-compression";
import { saveAs } from "file-saver";

export function useImageCompressor(initialType: string = "PNG") {
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [progress, setProgress] = useState(0);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [compressedImageSrc, setCompressedImageSrc] = useState<string | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [Isloaded, setIsloaded] = useState(false);
  const [imageType, setImageType] = useState(initialType);

  /** Shared core that does the compression */
  const compressFile = useCallback(async (imageFile: File) => {
    setIsloaded(false);
    if (!imageFile) return;

    setOriginalSize(imageFile.size);

    const sizeMB = imageFile.size / (1024 * 1024);
    const targetMaxMB = sizeMB > 2 ? 1.5 : 1;

    const options: Options = {
      maxSizeMB: targetMaxMB,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: 0.8,
      onProgress: (p) => setProgress(p),
      alwaysKeepResolution: true,
    };

    try {
      setLoading(true);
      const compressedFile = await imageCompression(imageFile, options);
      setCompressedSize(compressedFile.size);
      setImageSrc(URL.createObjectURL(imageFile));
      setCompressedImageSrc(URL.createObjectURL(compressedFile));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setIsloaded(true);
      setProgress(0);
    }
  }, []);

  /** For the classic <input type="file" /> */
  const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const imageFile = event.target.files?.[0];
      if (!imageFile) return;
      void compressFile(imageFile);
    },
    [compressFile]
  );

  /** For drag‑&‑drop (react‑dropzone) */
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles[0]) {
        void compressFile(acceptedFiles[0]);
      }
    },
    [compressFile]
  );

  const downloadCompressed = useCallback(() => {
    if (!compressedImageSrc) return;
    saveAs(compressedImageSrc, `image.${imageType.toLowerCase()}`);
  }, [compressedImageSrc, imageType]);

  const reset = useCallback(() => {
    setOriginalSize(0);
    setCompressedSize(0);
    setProgress(0);
    setImageSrc(null);
    setCompressedImageSrc(null);
    setLoading(false);
  }, []);

  return {
    // state
    originalSize,
    compressedSize,
    progress,
    imageSrc,
    compressedImageSrc,
    loading,
    Isloaded,
    imageType,
    // setters & actions
    setImageType,
    handleImageUpload,
    handleDrop,
    downloadCompressed,
    reset,
  } as const;
}
