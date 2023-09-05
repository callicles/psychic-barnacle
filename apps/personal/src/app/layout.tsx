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
      <body className="min-h-screen relative">
        <Header />
        <div className="pb-30">
          {children}
          <Analytics />
        </div>
        <Footer className="absolute bottom-0 w-screen h-30" />
      </body>
    </html>
  );
}
