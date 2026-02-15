import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOSProvider from "@/components/animations/AOSProvider";

const gopher = localFont({
  src: [
    {
      path: "../../public/fonts/Gopher-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gopher-Medium.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gopher-Bold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Lilac template",
  description: "A template for internship assignment",
  icons: {
    icon: "/lilac-favicon.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gopher.className}>
        <AOSProvider>
          <Header />
          {children}
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
