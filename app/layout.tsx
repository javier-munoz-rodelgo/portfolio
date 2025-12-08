import "./../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
        {/* Aquí tu Footer */}
      </body>
    </html>
  );
}
