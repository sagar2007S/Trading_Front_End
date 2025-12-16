// import { useState } from "react";
// import { useTranslation } from "react-i18next";

// const languages = [
//   { code: "de", name: "Deutsch", flag: "🇩🇪" },
//   { code: "en", name: "English", flag: "🇬🇧", selected: true },
//   { code: "es", name: "Español", flag: "🇪🇸" },
//   { code: "pl", name: "Polski", flag: "🇵🇱" },
//   { code: "pt", name: "Português", flag: "🇵🇹" },
//   { code: "ru", name: "Русский", flag: "🇷🇺" },
// ];

// const LanguageModal = () => {
//   const { i18n } = useTranslation();
//   const [selectedLang, setSelectedLang] = useState(
//     localStorage.getItem("lang") || "en"
//   );

//   console.log(selectedLang)

//   const handleLanguageChage = (code) => {
//     i18n.changeLanguage(code);
//     setSelectedLang(code);
//     localStorage.setItem("lang", code);
//   };

//   return (
//     <div
//       className="
//         absolute right-14 top-15
//         w-44 rounded-md shadow-lg p-1 z-50
//         bg-[#2c2f36] text-white
//         dark:bg-[#2c2f36]
//       "
//     >
//       {languages.map((lang) => (
//         <div
//           key={lang.code}
//           className="
//             flex items-center gap-2 px-3 py-2 rounded cursor-pointer
//             hover:bg-[#3a3d45]
//           "
//            onClick={() => handleLanguageChage(lang.code)}
//         >
//           <span className="text-lg">{lang.flag}</span>
//           <span className="flex-1">{lang.name}</span>
//           {lang.selected && <span className="text-green-400 font-bold">✔</span>}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LanguageModal;
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GB, DE, ES, PL, PT, RU } from "country-flag-icons/react/3x2";

const languages = [
  { code: "de", name: "Deutsch", Flag: DE },
  { code: "en", name: "English", Flag: GB },
  { code: "es", name: "Español", Flag: ES },
  { code: "pl", name: "Polski", Flag: PL },
  { code: "pt", name: "Português", Flag: PT },
  { code: "ru", name: "Русский", Flag: RU },
];

const LanguageModal = ({ selectedLang, setSelectedLang }) => {
  const { i18n } = useTranslation();
  // const [selectedLang, setSelectedLang] = useState(
  //   () => localStorage.getItem("lang") || "en"
  // );

  console.log(selectedLang.toUpperCase());

  // Ensure i18n matches the stored selection on mount
  useEffect(() => {
    if (selectedLang && i18n.language !== selectedLang) {
      i18n.changeLanguage(selectedLang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setSelectedLang(code);
    localStorage.setItem("lang", code);
  };

  return (
    <div
      className="
        absolute right-14 top-[60px]
        w-44 rounded-md shadow-lg p-1 z-50
        bg-[#2c2f36] text-white
      "
    >
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ")
              handleLanguageChange(lang.code);
          }}
          className={`
            flex items-center gap-2 w-full text-left px-3 py-2 rounded cursor-pointer
            hover:bg-[#3a3d45] focus:outline-nonF
          `}
          aria-pressed={selectedLang === lang.code}
        >
          {/* <span className="w-5 h-4 rounded-sm">{lang.Flag}</span> */}
          {/* <lang.Flag className="w-5 h-4 rounded-sm  rounded- + size" /> */}
          {/* <lang.Flag className="w-full h-full object-cover" /> */}
          <span className="flex items-center justify-center w-5 h-5 rounded-full overflow-hidden mr-2">
            <lang.Flag className="w-full h-full" />
          </span>
          <span className="flex-1">{lang.name}</span>
          {selectedLang === lang.code && (
            <span className="text-green-400 font-bold">✔</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageModal;
