import Script from "next/script";

const AdSidebar = ({ position }: { position: "left" | "right" }) => {
  return (
    <div
      className={`hidden lg:block w-64 flex-shrink-0 ${
        position === "left" ? "pr-4" : "pl-4"
      }`}
    >
      {/* Google AdSense Ad Unit */}
      <div className="bg-gray-100 rounded-lg p-4 h-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">Advertisement</p>
          <div className="border border-dashed border-gray-300 p-8 rounded">
            {/* Replace with your actual ad code */}
            <Script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
              crossOrigin="anonymous"
              strategy="lazyOnload"
            />
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
              data-ad-slot="YOUR_SLOT_ID"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <Script id={`ad-script-${position}`}>
              {`(adsbygoogle = window.adsbygoogle || []).push({});`}
            </Script>
          </div>
        </div>
      </div>
    </div>
  );
};
