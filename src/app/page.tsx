import Image from "next/image";
import Navbar from "./components/Navbar";
import { FaSellsy } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { SiNamecheap } from "react-icons/si";
import { GrServices } from "react-icons/gr";
import CardProduct from "./components/CardProduct";
import CardMarket from "./components/CardMarket";
import Maps from "./components/Maps";
import { PiBuildingOffice } from "react-icons/pi";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";
import Theme from "./components/Theme";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

async function fetchData() {
  // default : cache : 'force-cache'
  try {
    const response = await fetch(`${process.env.HOSTNAME_P1}/api/products?limit=4&page=1&order=rating&sort=desc`, {
      cache: 'no-store'
    })
    const { status, data } = await response.json()
    return { status, data }
  } catch (error) {
    return { status: false, data: null }
  }
}

export default async function Home() {
  const { status, data } = await fetchData()
  return (
    <main className="bg-low">
      <Navbar />
      <div className="grid justify-center mt-14 sm:mt-16 lg:mt-20 gap-10 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <div className="banner grid sm:grid-cols-2 gap-8 sm:gap-0 md:items-center">
          <div className="left">
            <div className="caption grid gap-2">
              <h3 className="text-secondary text-3xl lg:text-5xl font-semibold mb-1 lg:mb-3">Soul Cafe</h3>
              <h3 className="text-white bg-secondary text-3xl py-1 px-1.5 sm:px-2 lg:p-2.5 lg:text-5xl font-bold w-min">#CAFEKEKINIAN</h3>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur porro, illum reiciendis quisquam deleniti iusto accusantium vel quae perspiciatis nulla ducimus natus similique, quod id.</p>
              <Link href="/auth/login" className="py-1 lg:mt-6 bg-secondary rounded-lg text-white font-semibold w-min px-4 lg:px-5">Login/Register</Link>
              <Link href="/detail" className="py-1 lg:mt-6 bg-secondary rounded-lg text-white font-semibold w-min px-4 lg:px-5">detail</Link>
              <Link href="/user" className="py-1 lg:mt-6 bg-secondary rounded-lg text-white font-semibold w-min px-4 lg:px-5">user</Link>
              
            </div>
          </div>
          <div className="right grid self-center">
            <Image src="/banner.jpg" alt="login" width={5000} height={5000} className="w-90/100 justify-self-end md:w-85/100 lg:w-4/5 rounded-lg -scale-x-100" />
          </div>
        </div>
      </div>
      <div className="status mt-16 sm:mt-24 md:mt-32 lg:mt-36 xl:mt-44 text-white py-4 grid gap-1 lg:gap-2 xl:gap-2.5 w-85/100 md:h-4/5 lg:w-3/4 mx-auto bg-secondary">
        <h3 className="text-center text-lg lg:text-xl font-semibold lg:font-bold">Pencapaian</h3>
        <p className="text-center font-normal w-90/100 mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eius possimus non tempore voluptatum unde rerum voluptatem inventore sed modi. Fuga ea porro earum quasi.</p>
        <div className="mt-2 lg:mt-2.5 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <CardMarket value={100} caption="Cabang" />
          <CardMarket value={96} unit="%" caption="Respon" />
          <CardMarket value={1250} front="+" caption="Pengunjung" />
        </div>
      </div>
      <div className="about my-16 grid gap-1 lg:gap-2 xl:gap-2.5 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <h3 className="text-secondary text-center text-lg lg:text-xl font-semibold lg:font-bold">Tentang Kami</h3>
        <p className="text-center font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eius possimus non tempore voluptatum unde rerum voluptatem inventore sed modi. Fuga ea porro earum quasi.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="card bg-white p-5 border-2 text-center border-secondary rounded-lg">
            <FaSellsy className="text-7xl mb-1.5 text-secondary mx-auto" />
            <h4 className="font-bold">Ramai Pengunjung</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="card bg-white p-5 border-2 text-center border-secondary rounded-lg">
            <MdOutlineFavorite className="text-7xl mb-1.5 text-secondary mx-auto" />
            <h4 className="font-bold">Favorit</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="card bg-white p-5 border-2 text-center border-secondary rounded-lg">
            <SiNamecheap className="text-7xl mb-1.5 text-secondary mx-auto" />
            <h4 className="font-bold">Murah</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="card bg-white p-5 border-2 text-center border-secondary rounded-lg">
            <GrServices className="text-7xl mb-1.5 text-secondary mx-auto" />
            <h4 className="font-bold">Pelayanan Terbaik</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      </div>
      <Banner />
      <div className="product grid lg:gap-2 justify-centersm:py-5 mt-24 sm:mt-32 md:mt-40 lg:mt-48 xl:mt-56 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <h3 className="text-secondary text-lg lg:text-xl font-semibold lg:font-bold text-center">Penjualan Terlaris</h3>
        <p className="font-normal text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eius possimus non tempore voluptatum unde rerum voluptatem inventore sed modi. Fuga ea porro earum quasi.</p>
        <div className="wrapper-card mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {status && data.map((item: any) => <CardProduct key={item.id} product={item} />)}
        </div>
      </div>
      <div className="maps grid gap-5 my-28 w-85/100 md:h-4/5 lg:w-3/4 mx-auto lg:grid-cols-2">
        <div className="caption grid gap-5 sm:gap-6 md:gap-7 lg:gap-8 lg:h-min">
          <div className="description">
            <h3 className="text-secondary text-2xl font-semibold lg:font-bold">Soul Cafe</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, blanditiis? Jln. Aseloley No.44 Lumajang</p>
          </div>
          <div className="contact">
            <div className="location grid gap-4">
              <div className="info">
                <div className="flex gap-2 items-center">
                  <PiBuildingOffice className="text-secondary text-3xl" />
                  <h4 className="font-semibold text-lg">Soul Cafe</h4>
                </div>
                <p className="ml-9"> Jln. Aseloley No.44 Lumajang</p>
              </div>
              <div className="telp flex gap-2 items-center">
                <BsTelephone className="text-secondary text-2xl mr-1" />
                <p>08123456789</p>
              </div>
              <div className="info flex gap-2 items-center">
                <MdOutlineLocalPostOffice className="text-secondary text-3xl" />
                <p>aseloleycafe@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="maps">
          <Maps />
        </div>
      </div>
      <Theme classname="fixed bottom-2.5 right-2.5 grid place-content-center bg-secondary text-white drop-shadow-strong rounded-full p-2" />
      <Footer />
    </main>
  );
}
