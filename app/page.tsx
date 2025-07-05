"use client";
import { Button } from "@/components/ui/button";
import {
  Download,
  FileImage,
  ImageIcon,
  Sparkles,
  Upload,
  Zap,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Dropdown from "@/components/Dropdown";
import { useDropzone, FileRejection } from "react-dropzone";
import { useImageCompressor } from "@/hooks/ComperssFile";
import ImageCard from "@/components/ImageCard";
import Footer from "@/components/Footer";
import { useCallback, useState } from "react";
import { customFileValidator } from "@/lib/utils";

export default function Home() {
  const {
    originalSize,
    compressedSize,
    progress,
    imageSrc,
    compressedImageSrc,
    loading,
    imageType,
    Isloaded,
    setImageType,
    handleDrop,
    downloadCompressed,
  } = useImageCompressor("PNG");

  const [fileRejectionError, setFileRejectionError] = useState<string | null>(
    null
  );

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      setFileRejectionError(null); // Clear previous errors
      if (fileRejections.length > 0) {
        const rejection = fileRejections[0];
        if (
          rejection.errors.some((error: any) => error.code === "file-too-large")
        ) {
          setFileRejectionError("File is too large. Maximum size is 10MB.");
        } else if (
          rejection.errors.some(
            (error: any) => error.code === "file-invalid-type"
          )
        ) {
          setFileRejectionError(
            "Unsupported file type. Please upload a PNG, JPG, JPEG, or WebP image."
          );
        } else {
          setFileRejectionError("File rejected for an unknown reason.");
        }
        return;
      }
      handleDrop(acceptedFiles);
    },
    [handleDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
      "image/webp": [],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB in bytes
    validator: customFileValidator,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                <ImageIcon className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Image Compressor
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Compress your images without losing quality. Support for PNG, JPG,
              and WebP formats with intelligent optimization.
            </p>

            {/* Features */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Zap className="w-8 h-8 text-blue-500" />
                <span className="font-medium">Fast Processing</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Sparkles className="w-8 h-8 text-purple-500" />
                <span className="font-medium">No Quality Loss</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FileImage className="w-8 h-8 text-pink-500" />
                <span className="font-medium">Multiple Formats</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <ImageCard
              loading={loading}
              Isloaded={Isloaded}
              imageSrc={imageSrc}
              originalSize={originalSize}
              title="Original Image"
              compressedImageSrc={compressedImageSrc}
              compressedSize={compressedSize}
              type="original"
            />

            <ImageCard
              loading={loading}
              Isloaded={Isloaded}
              imageSrc={imageSrc}
              originalSize={originalSize}
              title="Compressed Image"
              compressedImageSrc={compressedImageSrc}
              compressedSize={compressedSize}
              type="compressed"
            />
          </div>

          {/* Download Section */}
          {compressedImageSrc && !loading && (
            <div className="bg-white/80 backdrop-blur-sm h-18 rounded-2xl p-2 shadow-xl border border-white/20">
              <div className="flex  h-full  gap-2 sm:gap-4">
                <Button
                  onClick={downloadCompressed}
                  variant="outline"
                  className="cursor-pointer  h-full bg-blue-500 text-white hover:bg-blue-400 hover:text-white flex-3"
                >
                  <Download className="w-10 h-10" />
                  Download Compressed Image
                </Button>
                <Dropdown
                  setImageType={setImageType}
                  imageType={imageType}
                  className="cursor-pointer h-full  bg-blue-500 text-white hover:bg-blue-400 hover:text-white flex-1 gap-1"
                />
              </div>
            </div>
          )}

          {/* Upload Zone */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mt-8">
            <div
              {...getRootProps()}
              className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 hover:border-blue-500 hover:bg-blue-50/50 group"
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                {isDragActive ? (
                  <p className="text-blue-600 text-lg font-medium">
                    Drop your image here...
                  </p>
                ) : (
                  <div>
                    <p className="text-gray-800 text-lg font-medium mb-2">
                      Drag & drop your image here, or click to browse
                    </p>
                    <p className="text-gray-500">
                      Supports PNG, JPG, and WebP formats
                    </p>
                  </div>
                )}
              </div>
            </div>

            {loading && (
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-lg font-medium text-gray-700">
                    Processing your image...
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="text-center text-sm text-gray-500">
                  {progress}% complete
                </p>
              </div>
            )}

            {fileRejectionError && (
              <div className="mt-4 text-center text-red-600 font-medium">
                <p>{fileRejectionError}</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
