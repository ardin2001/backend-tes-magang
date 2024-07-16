"use client";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import ModalMessage from "@/app/components/ModalMessage";
import UseMessage from "@/app/hooks/UseMessage";

function Login() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [message, setMessage] = UseMessage();
    const callBack = searchParams.get('callbackUrl') || process.env.HOSTNAME_P1
    const session = useSession();
    const HandlerLogin = async (event: any) => {
        event.preventDefault();
        const response: any = await signIn("credentials", {
            email: event.target.email.value,
            password: event.target.password.value,
            redirect: false,
            callbackUrl: callBack
        });

        console.log("response page:", response)

        if (response.ok) {
            const user: any = session.data?.user
            if (user.role == "user") {
                if (callBack?.split("/")[3] == "user") {
                    router.push(callBack)
                }
                router.push("/user")
            }
            else if (user.role == "admin") {
                if (callBack?.split("/")[3] == "admin") {
                    router.push(callBack)
                }
                router.push("/admin/dashboard")
            }
        } else {
            setMessage("Wrong email or password")
        }
    }

    return (
        <>
            {message && <ModalMessage message={message} setMessage={setMessage} />}
            <div className={`lg:grid lg:h-screen ${message ? 'blur-sm' : null}`}>
                <div className="grid my-8 mx-10 gap-8 lg:grid-cols-2 lg:drop-shadow-login lg:bg-white">
                    <div className="description grid gap-4 lg:my-auto lg:flex lg:flex-col lg:gap-5">
                        <h3 className="text-secondary font-bold text-3xl text-center mt-6 lg:mt-0">Soul Cafe App</h3>
                        <div className="image">
                            <Image src={"/logo-login.png"} alt="login" width={5000} height={5000} className="w-72 sm:w-96 m-auto" />
                        </div>
                        <p className="text-secondary font-medium text-justify lg:text-center sm:px-10 xl:px-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugit cumque repudiandae! Dolorum ad doloremque, nam maxime eligendi sed ut. Voluptates quibusdam suscipit aut?</p>
                    </div>
                    <div className="lg:bg-secondary lg:grid lg:justify-items-center">
                        <div className="grid gap-5 lg:my-auto sm:mx-auto sm:w-4/5 lg:w-3/5">
                            <h3 className="text-secondary lg:text-white font-bold text-3xl text-center">Login</h3>
                            <form className="form grid gap-3" onSubmit={HandlerLogin}>
                                <div className="email">
                                    <input type="text" id="email" name="email" className="outline-none py-1.5 bg-white border-b-2 lg:border-2 border-secondary lg:border-white lg:bg-low lg:rounded-md px-2 w-full text-secondary " placeholder="Email" />
                                </div>
                                <div className="password">
                                    <input type="password" id="password" name="password" className="outline-none py-1.5 bg-white border-b-2 lg:border-2 border-secondary lg:border-white lg:bg-low lg:rounded-md px-2 w-full text-secondary " placeholder="Password" />
                                </div>
                                <button type="submit" className="bg-secondary lg:bg-white py-1 mt-1 text-white lg:text-secondary font-bold rounded-md">Login</button>
                            </form>
                            <div>
                                <p className="text-secondary lg:text-white font-medium text-center">Don&apos;t have an account yet? <Link href="/auth/register" className="text-secondary lg:text-white font-bold">Register</Link></p>
                                <div className="oauth flex justify-center gap-2 mt-1.5">
                                    <button className="bg-white drop-shadow-login lg:drop-shadow-none lg:bg-white text-white lg:text-secondary font-bold rounded-full p-1.5" onClick={() => signIn('google', { callbackUrl: callBack })}><Image src={"/medsos/google.png"} alt="google" width={20} height={20} /></button>
                                    <button className="bg-white drop-shadow-login lg:drop-shadow-none lg:bg-white text-white lg:text-secondary font-bold rounded-full p-1.5"><Image src={"/medsos/fb.png"} alt="fb" width={20} height={20} /></button>
                                    <button className="bg-white drop-shadow-login lg:drop-shadow-none lg:bg-white text-white lg:text-secondary font-bold rounded-full p-1.5"><Image src={"/medsos/twitter.png"} alt="twitter" width={20} height={20} /></button>
                                    <button className="bg-white drop-shadow-login lg:drop-shadow-none lg:bg-white text-white lg:text-secondary font-bold rounded-full p-1.5"><Image src={"/medsos/ig.png"} alt="ig" width={20} height={20} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function WrapperLogin() {
    return (
        // You could have a loading skeleton as the `fallback` too
        <Suspense>
            <Login />
        </Suspense>
    )
}