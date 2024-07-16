"use client"
import Link from "next/link"

export default function Dashboard() {
    return (
        <aside className="">
            <h1>Dashboard</h1>
            <Link href="/admin/dashboard/detail" className="text-white bg-secondary py-0.5 px-5 mt-5">Detail</Link>
        </aside>
    )
}