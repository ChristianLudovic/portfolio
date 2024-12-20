"use client"

import { useChangeLocale, useCurrentLocale } from "@/locales/client"
import { useState } from "react"

export default function LanguageSelector() {
  const locale = useCurrentLocale()
  const changeLocale = useChangeLocale()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "tr", name: "Türkçe" }
  ]

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleLanguageChange = (langCode) => {
    changeLocale(langCode)
    setIsOpen(false)
  }

  return (
    <div className="w-max">
      <button
        onClick={toggleDropdown}
        className="flex justify-center items-center w-full"
      >
        <svg class="vuesax-outline-global2 " width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#71717A" />
        <path d="M9.00023 21.75H8.00023C7.59023 21.75 7.25023 21.41 7.25023 21C7.25023 20.59 7.57023 20.26 7.98023 20.25C6.41023 14.89 6.41023 9.11 7.98023 3.75C7.57023 3.74 7.25023 3.41 7.25023 3C7.25023 2.59 7.59023 2.25 8.00023 2.25H9.00023C9.24023 2.25 9.47023 2.37 9.61023 2.56C9.75023 2.76 9.79023 3.01 9.71023 3.24C7.83023 8.89 7.83023 15.11 9.71023 20.77C9.79023 21 9.75023 21.25 9.61023 21.45C9.47023 21.63 9.24023 21.75 9.00023 21.75Z" fill="#71717A" />
        <path d="M14.9999 21.7501C14.9199 21.7501 14.8399 21.7401 14.7599 21.7101C14.3699 21.5801 14.1499 21.1501 14.2899 20.7601C16.1699 15.1101 16.1699 8.89006 14.2899 3.23006C14.1599 2.84006 14.3699 2.41006 14.7599 2.28006C15.1599 2.15006 15.5799 2.36006 15.7099 2.75006C17.6999 8.71006 17.6999 15.2701 15.7099 21.2201C15.6099 21.5501 15.3099 21.7501 14.9999 21.7501Z" fill="#71717A" />
        <path d="M12 17.2C9.21 17.2 6.43 16.81 3.75 16.02C3.74 16.42 3.41 16.75 3 16.75C2.59 16.75 2.25 16.41 2.25 16V15C2.25 14.76 2.37 14.53 2.56 14.39C2.76 14.25 3.01 14.21 3.24 14.29C8.89 16.17 15.12 16.17 20.77 14.29C21 14.21 21.25 14.25 21.45 14.39C21.65 14.53 21.76 14.76 21.76 15V16C21.76 16.41 21.42 16.75 21.01 16.75C20.6 16.75 20.27 16.43 20.26 16.02C17.57 16.81 14.79 17.2 12 17.2Z" fill="#71717A" />
        <path d="M20.9998 9.74999C20.9198 9.74999 20.8398 9.73999 20.7598 9.70999C15.1098 7.82999 8.87978 7.82999 3.22978 9.70999C2.82978 9.83999 2.40978 9.62999 2.27978 9.23999C2.15978 8.83999 2.36978 8.41999 2.75978 8.28999C8.71978 6.29999 15.2798 6.29999 21.2298 8.28999C21.6198 8.41999 21.8398 8.84999 21.6998 9.23999C21.6098 9.54999 21.3098 9.74999 20.9998 9.74999Z" fill="#71717A" />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-left max-sm:origin-top-right max-md:right-0 absolute lg:left-0 mt-3 w-max rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}