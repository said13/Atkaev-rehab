import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-8">
      <div className="boomzi-container">
        {/* Footer links */}
        <div className="flex flex-col items-center mb-6">
          <ul className="flex flex-wrap justify-center gap-6 mb-6">
            <li>
              <Link href="/about" className="text-sm lowercase hover:opacity-70 transition-opacity">
                о boomzi
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-sm lowercase hover:opacity-70 transition-opacity">
                faq
              </Link>
            </li>
            <li>
              <Link href="/vacancies" className="text-sm lowercase hover:opacity-70 transition-opacity">
                вакансии
              </Link>
            </li>
          </ul>

          {/* Logo */}
          <div className="mt-6 mb-4">
            <img
              src="https://ext.same-assets.com/1334220929/2722572661.png"
              alt="Boomzi Logo"
              width={150}
              height={15}
              className="h-4 w-auto"
            />
          </div>
        </div>

        {/* Privacy policy */}
        <div className="flex justify-center border-t border-gray-100 pt-4">
          <Link href="/privacy" className="text-xs text-gray-600 hover:opacity-70 transition-opacity">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
