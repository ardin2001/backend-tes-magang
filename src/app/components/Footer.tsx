export default function Footer() {
    return (
        <footer className="footer grid gap-20 bg-secondary text-white py-10 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-36 mx-auto">
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                <div className="info">
                    <h3 className="text-3xl font-semibold">Soul Cafe</h3>
                    <p>Jln. Aseloley No.44 Lumajang</p>
                </div>
                <div className="company grid gap-1.5">
                    <h5 className="font-semibold text-lg">Company</h5>
                    <div className="grid gap-0.5">
                        <p>Home</p>
                        <p>About</p>
                        <p>Product</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className="legal grid gap-1.5">
                    <h5 className="font-semibold text-lg">Legal</h5>
                    <div className="grid gap-0.5">
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Cookie Policy</p>
                        <p>FAQ</p></div>
                </div>
                <div className="contact grid gap-1.5">
                    <h5 className="font-semibold text-lg">Contact Us</h5>
                    <div className="grid gap-0.5">
                        <p>08123456789</p>
                        <p>aseloleycafe@gmail</p>
                        <p>Jln. Aseloley No.44 Lumajang</p>
                    </div>
                </div>
            </div>
            <div>
                <hr />
                <p className="font-semibold text-end mt-1">Copyright © 2022. Aseloley. All Rights Reserved</p>
            </div>
        </footer>
    )
}