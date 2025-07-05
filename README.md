# Image Compressor Web Application

This project is a web application built with Next.js that allows users to easily compress and optimize images. It provides a user-friendly interface for uploading images and reducing their file sizes, making it ideal for web developers, content creators, and anyone needing to prepare images for various platforms.

## ✨ Features

- **Intuitive User Interface**: A clean and easy-to-use drag-and-drop interface for image uploads.
- **Image Optimization**: Reduce file size while maintaining image quality.
- **Multiple Image Formats**: Support for common image formats (e.g., JPEG, PNG, WebP).
- **Client-Side Processing**: Fast and efficient image processing directly in the browser.

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/naserswei/Free-Online-Image-Compressor
   cd Free-Online-Image-Compressor
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building web applications.
- [React](https://react.dev/) - JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [`next/image`](https://nextjs.org/docs/app/api-reference/components/image) - Next.js Image Component for image optimization.
- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) - For automatically optimizing and loading fonts.

## 📂 Project Structure

```
Free-Online-Image-Compressor/
├── app/                  # Next.js application routes and layout
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/           # Reusable UI components
│   ├── Ads.tsx
│   ├── Dropdown.tsx
│   ├── Footer.tsx
│   ├── ImageCard.tsx
│   └── ui/               # Shadcn UI components
│       ├── aspect-ratio.tsx
│       ├── button.tsx
│       ├── dropdown-menu.tsx
│       ├── progress.tsx
│       └── skeleton.tsx
├── hooks/                # Custom React hooks
│   └── ComperssFile.tsx  # Note: Typo, should be CompressFile.tsx
├── lib/                  # Utility functions and types
│   ├── types/
│   │   └── types.ts
│   └── utils.ts
├── public/               # Static assets
└── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

## 🤝 Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

If you have any questions, feel free to reach out.

--- naserswei.dev@gmail.com

**Note**: This README assumes the project is a public repository on GitHub. Remember to replace `https://github.com/naserswei/Free-Online-Image-Compressor` with your actual repository URL.
