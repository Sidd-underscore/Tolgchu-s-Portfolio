import "./global.css";
import clsx from "clsx";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://tolgchu.vercel.app"),
  title: {
    default: "Tolgchu ✨",
    template: "%s / Tolgchu ✨",
  },
  description: "A friendly cat programmer 😄",
  openGraph: {
    title: "Tolgchu ✨",
    description: "A friendly cat programmer 😄",
    url: "https://tolgchu.vercel.app",
    siteName: "Tolgchu ✨",
    locale: "en-US",
    type: "website",
    image: "/favicon.ico"
  },
  twitter: {
    title: "Tolgchu ✨",
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010] ",
        inter.className
      )}
    >
      <body className="antialiased lg:max-w-3xl flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2">
          <Navbar />
          <div className="min-h-[calc(100vh_-_226px)]">{children}</div>
          <Analytics />
          <Footer />
        </main>
      </body>
    </html>
  );
}
