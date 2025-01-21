import {stats} from "@/lib/data";
import Image from "next/image";

const Stats = () => {
    return <div>
        <div className=" w-full bg-white rounded-3xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    stats.map((stat) => {
                        return <div className="flex flex-col items-center text-center border-r border-gray-200">
                            <div className="mb-4">
                                <Image src={stat.icon} alt={"icon"} width={50} height={50} className="w-auto h-auto"/>
                            </div>
                            <h2 className="text-4xl font-bold text-blue-700 mb-2">{stat.count}+</h2>
                            <p className="text-blue-600">{stat.title}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}

export default  Stats