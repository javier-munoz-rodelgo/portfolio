// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Javier Muñoz. All rights reserved.</p>

        <div className="flex gap-4">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:tuemail@gmail.com"
            className="hover:text-blue-600 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
