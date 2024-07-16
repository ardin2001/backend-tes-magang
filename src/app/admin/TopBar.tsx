"use client"
import { IoMdMenu } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";

export default function TopBar({ classname, setOpen, title }: { classname: string, setOpen: any, title: string }) {
    return (
        <nav className={classname}>
            <IoMdMenu className="text-3xl sm:text-4xl text-primary lg:hidden" onClick={setOpen} />
            <h4 className="hidden text-xl font-semibold lg:text-2xl lg:block">{title}</h4>
            <div className="profile flex items-center gap-2 sm:gap-3 md:gap-4">
                <FaBell className="text-xl sm:text-2xl text-blue-400" />
                <div className="avatar p-4 bg-blue-400 rounded-full"></div>
            </div>
        </nav>
    )
}