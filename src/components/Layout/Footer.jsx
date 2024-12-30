// src/components/Layout/Footer.jsx
export const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Nilo Pizza - Desenvolvido por Ronald Silva
          </p>
        </div>
      </footer>
    );
  };