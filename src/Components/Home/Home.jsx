import avatar from '../../assets/avataaars.svg'

export default function Home() {
    return (
        <section className="bg-[#1abc9c] text-white text-center py-16 sm:py-20">

            <img
                src={avatar}
                alt="avatar"
                className="w-32 sm:w-40 md:w-48 mx-auto mb-6 mt-25"
            />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                START FRAMEWORK
            </h2>

            <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-16 sm:w-24 h-1.5 bg-white rounded"></span>
                <span className="text-2xl sm:text-3xl md:text-4xl">★</span>
                <span className="w-16 sm:w-24 h-1.5 bg-white rounded"></span>
            </div>

            <p className="text-sm sm:text-base md:text-lg">
                Graphic Artist - Web Designer - Illustrator
            </p>

        </section>
    )
}
