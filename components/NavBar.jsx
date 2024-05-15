"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'; // Assuming i18n.js is in a sibling directory

import Logo from "@/public/logo.png";
import { NavItemsData } from "@/utils/data";
import { Button } from "@/components/ui/button";

const languages = ['en', 'fr']; // Supported languages
const resources = {
  en: {
    translation: {
      // English translations
      contactUs: 'Contact Us',
      french: 'French',
      english: 'English'
      // Add other translations here
    }
  },
  fr: {
    translation: {
      // French translations
      contactUs: 'Nous contacter',
      french: 'Français',
      english: 'Anglais'
      // Add other translations here
    }
  }
};

i18n
  .use(initReactI18next) // Initializes i18next with react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // Prevents escaping of HTML entities
    }
  });

const NavBarComp = () => {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(languages[0]); // Default language

  const handleLanguageChange = () => {
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    setCurrentLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
<div className="w-full h-auto flex flex-col md:flex-row justify-between items-center text-center py-4 px-[6%] shadow-md bg-[#FFFFFF] gap-4 mt-1">
  {/* Logo */}
  <Image
    src={Logo}
    alt="logo"
    width={500}
    height={500}
    className="w-[80px] h-[46px] object-contain"
  />

  <div className="w-full md:w-auto flex justify-center md:justify-start md:space-x-4">
    {/* Navigation */}
    <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
      {NavItemsData?.map((item, idx) => (
        <Link
          href={item.src}
          key={idx}
          className="text-[#191919] text-base font-normal pl-5"
        >
          {item.title}
        </Link>
      ))}
    </div>
  </div>

  {/* Contact Us Button (translated) */}
  <a href="/#contact-us" className="md:w-auto">
    <Button
      variant="custom"
      className="bg-fSeaGreen text-white h-[51px] text-[20px] font-normal"
    >
      contactUs
    </Button>
  </a>

  {/* Language Switcher Button (Dynamic Text) */}
  {/* <button onClick={handleLanguageChange} className="w-full md:w-auto">
    {currentLang === 'en' ? t('french') : t('english')}
  </button> */}
</div>



  
  );
};

export default NavBarComp;
