import Image from "next/image";
export default function ImageTextCard({ image, title, description, width, height, alt }: { image: string, title: string, description: string, width: number, height: number, alt: string }) {
    return (
        <div className="relative transition-opacity transition-colors duration-300 ease-in-out no-underline text-inherit">
                        <Image src={image} alt={alt} width={width} height={height} className="rounded-xl mx-auto" />
                        <h3 className="text-2xl text-gray-800 mt-4 w-full md:w-3/4"> {title} </h3>
                        <p className="text-xl text-gray-600 mt-2 w-full md:w-[250px]"> {description} </p>
                    </div>
    )
}