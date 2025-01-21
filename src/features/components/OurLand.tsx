import {BiMapPin} from "react-icons/bi";
import {ourLands} from "@/lib/data";
import Link from "next/link";

const OurLand = () => {
    return <section className="py-16 bg-gray-100">
        <div className="text-center py-4" style={{
            backgroundImage: ` url(/svgs/home.svg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition:"center"
        }} >
            <p className="text-4xl pt-4">Our Lands on Sale</p>
        </div>
        <div className="flex md:max-w-[80%]  max-w-[95%] flex-col md:flex-row items-center justify-center gap-4 mx-auto ">
            {
                ourLands.map((land) => <div
                    className="max-w-sm bg-white rounded-t-lg w-full md:w-[30%] overflow-hidden">
                    <div className="w-full h-48 relative">
                        <img
                            src={land.banner}
                            alt={land.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <Link href={`/lands-properties/${land.id}`} >
                            <h2 className="text-xl font-semibold text-gray-900 mb-2 underline">
                                {land.name}
                            </h2>
                        </Link>
                        <p className="text-2xl font-bold text-orange-500 mb-4">
                        GH₵{land.price}
                        </p>
                        <div className="flex items-center gap-4 justify-between text-base text-gray-600 mb-4 border border-y-[0.5px] border-x-0 py-2">
                            {land.properties.map((property) => {
                                return <p className="text-center">{property}</p>
                            })}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 mb-4">
                            <BiMapPin className="w-4 h-4 text-orange-500"/>
                            <span>{land.location}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </section>


}
export default OurLand