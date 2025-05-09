import { ReactNode } from "react";
import Image from "next/image";


const Update = ({title, children}: {title: string, children: ReactNode}) => {
    return (
        <li className="font-bold text-lg">
            <p className="font-bold text-lg mb-2">{title}</p>
            <div className="font-normal text-lg">
                {children}
            </div>
        </li>
    );
}

export default function Updates() {
    return (
        <div>
            <div
                className="flex flex-col md:flex-row gap-16 md:gap-32 items-end p-8 md:p-12 lg:p-24 bg-peacock text-jadeite-100">
                <div className="space-y-16 lg:space-y-32">
                    <div className="flex justify-start w-2/3">
                        <h1 className="text-6xl md:text-[6rem] font-extrabold leading-none font-gilroy">
                            updates
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between w-full">
                        <div className='space-y-4 md:space-y-8'>
                            <p className="text-2xl font-medium leading-none">
                                New developments leading up to the big day
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="md:max-w-4xl space-y-12 md:space-y-16 p-8 md:p-12 lg:p-24">

                <div className="rounded-lg bg-peacock-800 p-6 text-jadeite-100">
                    <h2 className="font-semibold text-2xl">Shuttle Option Available!</h2>
                    <br />
                    <p>
                        We have arranged for a shuttle to ferry people from the&nbsp;
                        <span className="font-bold">Comfort Inn &amp; Suites</span> in Germantown 
                        (Address: <a className="font-bold underline" target="_blank" href="https://www.google.com/maps/place/Comfort+Inn+%26+Suites+NW+Milwaukee/@43.1935765,-88.1333446,17z/data=!4m9!3m8!1s0x8804ffe50f31af45:0x1faba32b64ba3244!5m2!4m1!1i2!8m2!3d43.1935765!4d-88.1307697!16s%2Fg%2F11t75m9l2p">W177 N 9675 Riversbend Lane</a>).

                        Please park in the <span className="italic">back row of the overflow lot</span> (pictured below) and await pickup there.
                    </p>
                    <br />

                    <Image src={"/parking.png"} alt="Parking at Comfort Inn &amp; Suites" width={"1024"} height={"1024"}
                           className="w-full rounded-xl"/>
                    <br />
                    <p>
                        The schedule is as follows:
                    </p>
                    <ul className="list-disc ms-5">
                        <li><span className="font-bold">TO the venue:</span> TWO runs, starting at 2pm</li>
                        <li><span className="font-bold">FROM the venue:</span> TWO+ runs, starting at 9:30pm</li>
                    </ul>
                    <br />
                    <p>
                        Please note that because the park has a day use fee assessed by entering a license plate, Uber and Lyft drivers may be unwilling to drive into the park.</p>
                </div>

                <ol className="list-decimal space-y-6 ps-2">
                    <Update title="If you haven't arranged your travel or lodging yet, we recommend doing it ASAP!">
                        Our wedding weekend is also the weekend of many graduation ceremonies at 
                        local colleges and universities, so things are beginning to dry up. Reminder 
                        that our venue is in the village of <strong>Menomonee Falls</strong> (not to 
                        be confused with Menomonie) which is just NW of Milwaukee.
                    </Update>
                    <Update title="Are you flying in? May 7th is the first day that TSA will require a 'REAL ID'">
                        Look for the little circle+star icon on your driver license, or bring your 
                        passport just in case! In addition, please anticipate longer security lines 
                        due to other peoples&apos; mass confusion over this change. More info here: 
                        <a className="hover:underline font-semibold" href="https://www.dhs.gov/real-id/are-you-real-id-ready" target="_blank">https://www.dhs.gov/real-id/are-you-real-id-ready</a>
                    </Update>
                    <Update title="Do you love camping? Our venue is located inside of Menomonee Park, which has a complete car-camping campground with limited facilities.">
                        We have three extra campsites on reserve for any interested parties [please let 
                        us know by May 1 for these three!], and the park itself should have additional 
                        availability here: <a className="hover:underline font-semibold" href="https://www.waukeshacounty.gov/parks-and-land-use/parks-and-recreation/parks-and-trails/camping/" target="_blank">https://www.waukeshacounty.gov/parks-and-land-use/parks-and-recreation/parks-and-trails/camping/</a>
                    </Update>
                    <Update title="Speaking of the park, if you are driving into the park from your lodging or home, please fill out this form so we can cover your park access fee.">
                        The park’s entrance/exit camera captures plate # automatically, and we can bulk-pay for fees by plate # the day after: <a className="hover:underline font-semibold" href="https://forms.gle/Sj4RdQ7aLdpNVgtJA" target="_blank">https://forms.gle/Sj4RdQ7aLdpNVgtJA</a>
                    </Update>
                    <Update title="Bring a light jacket!">
                        It can get a little brisk in the evenings in May, though the daytime weather should be gorgeous. 
                    </Update>
                    <Update title="Don't forget to bring your appetite!">
                        There will be plenty of hors d&apos;oeuvre, BBQ and sides, vegetarian options, CAKE, and drinks!
                    </Update>
                    <Update title="The ceremony will start at 3pm, but you are welcome to come a little early for a pre-wedding drink!">
                        As early as 2pm, some folks will be around — maybe even us!
                    </Update>
                    <Update title="The bridal party will be in shades of green, and the bride in white, but other than that wear whatever colorful outfit you want!">
                        Now is the time to wear that outfit you love but never had a place to wear it to before! Sequins! Neon! Just wear something that makes you happy!
                    </Update>
                </ol>
            </div>
        </div>
    )
}