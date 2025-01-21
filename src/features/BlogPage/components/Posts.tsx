import {posts} from "@/lib/data";
import Image from "next/image";
import Button from "@/features/components/Button";


const Posts =  () => {
    return <div>
        <h2 className="text-2xl">From Our Blog</h2>
        <div className="w-[50px] py-[2px] bg-orange-500 my-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                posts.map((post) => <div className="w-full mt-6">
                    <Image src={post.banner} alt={post.title} width={500} height={500} className="w-full rounded-md"/>
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.subtitle}</p>
                    </div>
                    <Button text="Read More" className="text-white bg-primary-default rounded-2xl" size="sm"/>
                </div>)
            }
        </div>
    </div>


}

export default Posts