import { FaStar } from "react-icons/fa"
import Image from "next/image"
const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugit cumque repudiandae! Dolorum ad doloremque, nam maxime eligendi sed ut. Voluptates quibusdam suscipit aut?"
export default function ProductDetail() {
    return (
        <main className="fixed left-0 right-0 top-0 bottom-0 bg-black shadow-intermediate bg-opacity-50 grid justify-items-center items-center">
            <div className="card bg-base-100 drop-shadow-strong p-2 bg-white w-4/5 sm:w-1/3 md:w-1/4 lg:w-1/5 h-max">
                <div className="card-body grid gap-1 relative">
                    <div className="rating flex gap-1 px-1.5 py-0.5 bg-white rounded-md absolute right-2 top-2 border-2 border-secondary">
                        <FaStar className="text-secondary text-xl" />
                        <p className="text-secondary font-medium">4.5</p>
                    </div>
                    <Image src="/logo-login.png" alt="products" width={5000} height={5000} className="h-48 md:h-52 xl:h-56 object-cover" />
                    <h2 className="card-title text-secondary font-semibold text-lg">Lorem ipsum dolor</h2>
                    <p className="text-secondary">{description.length > 70 ? description.substring(0, 70) + "..." : description}</p>
                    <p className="mt-2 md:mt-3 xl:mt-4 text-white font-semibold bg-secondary py-0.5 px-3 rounded-md w-min justify-self-end">500000</p>
                </div>
            </div>
        </main>
    )
}