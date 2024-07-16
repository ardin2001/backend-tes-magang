import { IoWarningOutline } from "react-icons/io5";
export default function ModalMessage({ message, setMessage }: any) {
    return (
        <div className="modal fixed z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max px-10 py-5 bg-tertiary rounded-md grid gap-3 justify-items-center shadow-furdamental">
            <IoWarningOutline className="text-6xl text-white " />
            <div className="flex flex-col gap-1.5">
                <p className=" text-white font-semibold">{message}</p>
                <button className="text-tertiary bg-white py-0.5 px-10 font-bold self-center rounded-md" onClick={() => setMessage(false)}>Ok</button>
            </div>
        </div>
    )
}