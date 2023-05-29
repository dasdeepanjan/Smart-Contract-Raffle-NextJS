import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div className=" p-2 border-b-2  flex-row">
            <h1 className="py-4 px-4 font-semibold text-3xl bg-[#4C3D3D] text-[#FFD95A] text-center ml-auto">
                DECENTRALIZED LOTTERY
            </h1>
            <div className="flex flex-col place-items-end justify-end bg-[#fff7d4]">
                <div className="float-none bg-[#FFF7D4] ml-auto py-2 px-2">
                    <ConnectButton moralisAuth={false} />
                </div>
            </div>
        </div>
    )
}
