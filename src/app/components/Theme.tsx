"use client"
import { FaRegSun } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

import { useState } from "react"
export default function Theme({classname}:{classname : string}) {
    const {theme, setTheme}:any = useContext(ThemeContext)
    return (
        <div className={classname}>
            {theme ? <button onClick={setTheme}><FaRegSun /></button> : <button onClick={setTheme}><MdOutlineDarkMode /></button>}
        </div>
    )
}