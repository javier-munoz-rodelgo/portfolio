export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="py-10 text-center text-gray-500">
      © {new Date().getFullYear()} Javier Muñoz · {dict.rights || "Portfolio"}
    </footer>
  );
}
