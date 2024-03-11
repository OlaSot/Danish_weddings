'use client'
import LocaleSelector from '@/app/components/LocaleSelector';
import HeaderLinks from '@/app/components/HeaderLinks'
import MenuButton from '../MenuButton'
import { useEffect, useState } from 'react';
import s from './s.module.css';
import { usePathname } from 'next/navigation';

type Link = {
    title: string;
    path: string;
}
interface Props {
    currentLang:string;
    message: string;
    links: Link[];
}

export default function HeaderMenuWrapper({message, currentLang, links}:Props) {
    const [menuActive, setMenuActive] = useState(false);

    const pathname = usePathname();
    useEffect(() => {
        setMenuActive(false);
    }, [pathname]);

    return (
        <>
        {/* <div className={menuActive ? 'relative flex items-center gap-3' : ['relative flex items-center gap-3', s.menuActive].join(" ")}> */}
        <div className={menuActive ? [s.headerMenu, s.menuActive].join(" ") : s.headerMenu}>
            <HeaderLinks links={links} className={s.headerLinks}/>
            <LocaleSelector message={message} currentLang={currentLang}/>
        </div>
        <MenuButton {...{menuActive, setMenuActive}}/>
        </>
    )
}
