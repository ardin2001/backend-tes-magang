import Link from "next/link"
export default function Products() {
    return (
        <div>
            <h1>Products Page</h1>
            <div className="grid w-max">
                <Link href="/user/products/1" className="text-white bg-secondary py-0.5 px-5 mt-5">id 1</Link>
            </div>
        </div>
    )
}