import "./../styles/globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
        {/* Aquí tu Footer */}
      </body>
    </html>
  );
}
