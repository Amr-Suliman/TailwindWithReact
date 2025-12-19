import img1 from '../../assets/portfolio-1.png'
import img2 from '../../assets/portfolio-2.png'
import img3 from '../../assets/portfolio-3.png'

export default function Portfolio() {

    const images = [img1, img2, img3, img1, img2, img3]

    return (
        <section className="py-10 text-center">

            <p className="text-4xl font-bold text-[#2c3e50] mb-4 mt-15">
                PORTFOLIO COMPONENT
            </p>


            <div className="flex items-center justify-center gap-4 mb-8">
                <span className="w-28 h-1.5 bg-[#2c3e50]"></span>
                <span className="text-[#2c3e50] text-3xl">★</span>
                <span className="w-28 h-1.5 bg-[#2c3e50]"></span>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {images.map((img, index) => (
                        <div key={index}>
                            <div className="relative rounded-lg overflow-hidden group">

                                <img
                                    src={img}
                                    className="w-full h-auto"
                                    alt="portfolio"
                                />

                                <div className="absolute inset-0 bg-black/60 
                                    flex justify-center items-center
                                    opacity-0 group-hover:opacity-100 
                                    transition duration-300">
                                    <span className="text-white text-5xl font-bold">+</span>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>


        </section>
    )
}
