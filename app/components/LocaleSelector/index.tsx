'use client';

import { i18nConfig } from '@/i18n';
import redirectToLocale from '@/lib/i18n/redirectToLocale';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';


interface Props {
  message: string;
  currentLang:string;
}

export default function LocaleSelector({ message, currentLang }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();


  const localeInfo = {
    en: { native: 'English'},
    de: { native: 'Deutch'},
    ru: { native: 'Russian'},
  };

  return (
    <>
      <button
        className={`hidden lg:flex h-12 w-12 items-center justify-center px-2 rounded-sm hover:bg-neutral-100 ${
          isOpen ? 'bg-neutral-100' : ''
        } `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentLang.toUpperCase()}
      </button>

      {isOpen && (
        <div className="absolute right-0 translate-y-16 z-[500]">
          <div className='className="flex py-1" w-48 flex-col rounded-sm border border-neutral-200 bg-white'>
            <ul className="flex w-full flex-col divide-y divide-neutral-200">
              {i18nConfig.locales.map((locale, index) => {
                return (
                  <Link key={index} href={redirectToLocale(locale, pathname)}>
                    <li className="flex w-full flex-col items-start justify-center px-3 py-1 hover:bg-neutral-100">
                      <h4 className="text-sm font-small text-neutral-950" style={{ fontWeight: currentLang === locale ? '600' : '400'}}>
                        {localeInfo[locale].native}
                      </h4>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
