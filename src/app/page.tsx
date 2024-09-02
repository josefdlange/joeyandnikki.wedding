import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="col-start-1 col-end-13 md:col-start-2 md:col-end-6 py-24 h-full">
                <h1 className="text-[9rem] font-extrabold leading-none font-gilroy">
                    it&apos;s time to party
                </h1>
            </div>
            <div className="col-start-1 col-end-13 md:col-start-7 md:col-end-12 self-end text-right py-24 space-y-8">
                <p className="text-2xl font-medium leading-none">
                    Joey and Nikki are getting married!
                </p>
                <p className="text-md font-medium leading-none">
                    May 17th, 2025
                </p>
                <p className="text-md font-light leading-none">
                    Details to follow
                </p>
            </div>
        </>
    );
}
