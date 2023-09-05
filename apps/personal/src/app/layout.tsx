import "./../styles/globals.css";
import { Header } from "../components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="grow">
          {children}
          <Analytics />
        </div>
        <Footer className="w-screen" />
      </body>
    </html>
  );
}
