'use client'
import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import s from './s.module.css'

export default function MenuButton({menuActive, setMenuActive}) {
  return (
    <div onClick={()=>setMenuActive(!menuActive)} className={s.menuButton}>
    {menuActive ?
        <TfiClose />
        : 
        <CiMenuBurger />
    }
    </div>
  )
}
