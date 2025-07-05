import React from "react";

function Footer() {
  return (
    <footer className="mt-16 text-center">
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
        <p className="text-gray-600 mb-2">
          © 2025 Naser Swei. Built with ❤️ to help you compress images easily.
        </p>
        <p className="text-gray-600">
          Support my work:{" "}
          <a
            href="https://coff.ee/naserswei"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors duration-200"
          >
            Buy me a coffee ☕
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
