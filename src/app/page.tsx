import Image from "next/image";

export default function Home() {
    return (
        <div className="p-8 md:p-12 lg:p-24 space-y-32 md:space-y-32 lg:space-y-64">
            <div className="flex justify-start w-2/3">
                <h1 className="text-8xl md:text-[9rem] font-extrabold leading-none font-gilroy">
                    it&apos;s time to party
                </h1>
            </div>
            <div className="flex justify-start lg:justify-end lg:text-right w-2/3 md:w-full">
                <div className='space-y-4 md:space-y-8'>
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
            </div>
        </div>
    );
}
