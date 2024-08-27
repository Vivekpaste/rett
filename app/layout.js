import { Figtree } from "next/font/google";
import "./globals.css";
import LayoutHeader from "@/components/Partials/header";
import LayoutFooter from "@/components/Partials/footer";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Rett Dialog",
  description: "Rett Dialog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          figtree.className +
          "bg-white scroll-smooth transition-all duration-75 "
        }
      >
         <LayoutHeader />
        {children}
        <LayoutFooter />
      </body>
    </html>
  );
}
