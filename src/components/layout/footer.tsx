import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-8">
      <div className="boomzi-container">
        <div className="flex flex-col items-center mb-6">
          <ul className="flex flex-wrap justify-center gap-6 mb-6">
            <li>
              <Link
                href="/about"
                className="text-sm lowercase hover:opacity-70 transition-opacity"
              >
                о Atkaev REHAB
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-sm lowercase hover:opacity-70 transition-opacity"
              >
                faq
              </Link>
            </li>
            <li>
              <Link
                href="/vacancies"
                className="text-sm lowercase hover:opacity-70 transition-opacity"
              >
                вакансии
              </Link>
            </li>
          </ul>

        </div>

        <div className="flex justify-center border-t border-gray-100 pt-4">
          <Link
            href="/privacy"
            className="text-xs text-gray-600 hover:opacity-70 transition-opacity"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
