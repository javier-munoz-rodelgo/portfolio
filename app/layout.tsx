import "./../styles/globals.css";
import { Inter as MaintFont } from "next/font/google";

const mainFont = MaintFont({
  subsets: ["latin"],
  variable: "--main-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body
        className={`${mainFont.className} bg-white text-gray-900 antialiased`}
      >
        {children}
        {/* Aquí tu Footer */}
      </body>
    </html>
  );
}
