import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 antialiased">
        {/* Aquí tu Navbar */}
        {children}
        {/* Aquí tu Footer */}
      </body>
    </html>
  );
}