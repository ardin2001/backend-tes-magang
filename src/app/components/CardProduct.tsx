import Image from "next/image"
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default function CardProduct({product}:any) {
    return (
        <Link href="/user/products/1" className="card bg-base-100 drop-shadow-strong p-2 bg-white cursor-pointer">
            <div className="card-body grid gap-1 relative">
                <div className="rating flex gap-1 px-1.5 py-0.5 bg-white rounded-md absolute right-2 top-2 border-2 border-secondary">
                    <FaStar className="text-secondary text-xl" />
                    <p className="text-secondary font-medium">{product.rating}</p>
                </div>
                <Image src={product.image} alt={product.name} width={5000} height={5000} className="h-48 md:h-52 xl:h-56 object-cover" />
                <h2 className="card-title text-secondary font-semibold text-lg">{product.name}</h2>
                <p className="text-secondary">{product.description.length > 70 ? product.description.substring(0, 70) + "..." : product.description}</p>
                <p className="mt-2 md:mt-3 xl:mt-4 text-white font-semibold bg-secondary py-0.5 px-3 rounded-md w-min justify-self-end">{product.price}</p>
            </div>
        </Link>
    )
}