import {ReactNode} from "react";
import Image from "next/image";

const InfoColumn = ({children}: { children: ReactNode }) => (
    <div className="p-8 md:p-12 lg:p-24 space-y-6">
        {children}
    </div>
);

const InfoBlock = ({title, children}: { title: string, children: ReactNode }) => (
    <div className="space-y-2 font-gilroy md:max-w-64">
        <h2 className="text-xl uppercase font-bold leading-none">
            {title}
        </h2>
        {children}
    </div>
);


export default function Home() {
    return (
        <div>
            <div
                className="flex flex-col md:flex-row gap-16 md:gap-32 items-end p-8 md:p-12 lg:p-24 bg-peacock text-jadeite-100">
                <div className="space-y-16 lg:space-y-32">
                    <div className="flex justify-start w-2/3">
                        <h1 className="text-6xl md:text-[9rem] font-extrabold leading-none font-gilroy">
                            it&apos;s time to party
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between w-full">
                        <div className='space-y-4 md:space-y-8'>
                            <p className="text-2xl font-medium leading-none">
                                Joey and Nikki are getting married!
                            </p>
                            <p className="text-xl font-light leading-tight">
                                Join us in celebrating our love and good fortune in finding each
                                other. We can&apos;t wait to share this special day with you!
                            </p>
                        </div>
                    </div>
                </div>
                <Image src={"/joeyandnikki.jpg"} alt="Joey and Nikki" width={"1024"} height={"1024"}
                       className="w-full md:w-1/3 rounded-full -mb-[50%] md:-mb-48"/>
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:max-w-[80%] gap-12 md:gap-16 p-8 max-md:pt-[45vw] md:p-12 lg:p-24">
                <InfoBlock title={"Where"}>
                    <p className="text-md font-medium leading-none">
                        The Camp Pow Wow Lodge<br/> at Menomonee Park
                    </p>
                    <p className="text-md font-medium leading-none text-peacock-800">
                        W220 N7884 Town Line Road,<br/>
                        Menomonee Falls, WI 53051
                    </p>
                    <p className="text-sm font-medium leading-none text-peacock-700 hover:underline">
                        <a href={"https://www.google.com/maps/dir//Caml+Pow+Wow+Lodge,+Menomonee+Falls,+WI+53051/@43.1619774,-88.2592087,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88045560e3a41739:0x2cef929157f5258d!2m2!1d-88.176808!2d43.162007"}
                           target={"_blank"}>Get directions</a>
                    </p>
                </InfoBlock>
                <InfoBlock title={"When"}>
                    <p className="text-md font-medium leading-none">
                        May 17th, 2025
                    </p>
                    <p className="text-md font-medium leading-none">
                        2:00 P.M.
                    </p>
                    <p className="text-sm font-medium leading-none text-peacock-700 hover:underline">
                        <a href={"/joeyandnikki.wedding.ics"}>Add to your calendar</a>
                    </p>
                </InfoBlock>
                <InfoBlock title={"RSVP"}>
                    <p className="text-md font-medium leading-none">
                        Please RSVP by April 15th, 2025
                    </p>
                    <p className="text-md font-medium leading-none">
                        to <a href="mailto:josef.d.lange@gmail.com"
                              className="text-peacock-700 hover:underline">Joey</a> or <a
                        href="mailto:carternm27@gmail.com" className="text-peacock-700 hover:underline">Nikki</a> or via
                        the RSVP card included in your invitation.
                    </p>
                </InfoBlock>
                <InfoBlock title={"Attire"}>
                    <p className="text-md font-medium leading-none">
                        Semi-formal&mdash;dress boldly and colorfully!
                    </p>
                </InfoBlock>
                <InfoBlock title={"Parking"}>
                    <p className="text-md font-medium leading-none">
                        Parking is available inside the park. <span className="italic">Please provide your license plate number</span> so we can cover your parking fee.
                    </p>
                </InfoBlock>
                <InfoBlock title={"Accommodations"}>
                    <p className="text-md font-medium leading-none">
                        More information will be available soon.
                    </p>
                </InfoBlock>
                <InfoBlock title={"Gifts"}>
                    <p className="text-md font-medium leading-none">
                        Your presence is the greatest gift we could ask for! <span className={"italic"}>Seriously! We mean it!</span>
                    </p>
                    <p className="text-md font-medium leading-none">
                        If you still feel inclined to give, we would be grateful for a contribution to our <a href="https://www.honeyfund.com/site/joeyandnikki" target="_blank" className="text-peacock-700 hover:underline">honeymoon fund</a>.
                    </p>
                </InfoBlock>
                <InfoBlock title={"Kids"}>
                    <p className="text-md font-medium leading-none">
                        We want your kids to have a great time, too! Please let us know if you plan to bring children so we can make sure there are activities for them.
                    </p>
                </InfoBlock>
            </div>
        </div>
    );
}
