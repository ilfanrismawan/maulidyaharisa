import Link from "next/link";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Dancing_Script } from "next/font/google";

export const metadata = {
  title: "Maulidya Harisa - Fashion Designer",
  description:
    "Maulidya Harisa adalah seorang Fashion Designer yang berasal dari Bandung, Indonesia.",
};

// If loading a variable font, you don't need to specify the font weight
const satisfy = Dancing_Script({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FFF5E4] text-[#FF9494]">
        <NavBar />
        {children}
        <footer className="flex items-center justify-center gap-1 px-2 py-3 text-center font-black italic text-[#FF9494]">
          Fashion Design & Jahit Baju:{" "}
          <Link
            href={`https://yuriswear.com`}
            className="space-x-1 text-rose-500"
          >
            {" "}
            Yuri&apos;s Wear
          </Link>
        </footer>
      </body>
    </html>
  );
}
