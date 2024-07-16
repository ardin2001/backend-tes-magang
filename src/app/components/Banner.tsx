import Image from "next/image"
export default function Banner() {
    return (
        <div className="banner-lanscape relative grid justify-center mt-20 p-3 sm:p-5 lg:p-6 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
            <Image src={"/banner-lanscape.jpg"} alt="login" width={5000} height={5000} className="absolute h-48 sm:h-60 md:h-64 lg:h-64 xl:h-72 object-cover -scale-x-100" />
            <h3 className="text-white text-3xl lg:text-5xl font-semibold z-50">Soul Cafe</h3>
            <p className="text-white font-medium lg:font-semibold z-50 w-90/100 lg:w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor doloremque soluta optio perspiciatis ipsa harum inventore modi nobis sequi.</p>
        </div>
    )
}