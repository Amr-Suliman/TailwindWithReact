export default function Footer() {
    return (
        <footer className="bg-[#2c3e50] text-white">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 
                            gap-10 text-center py-16 px-4">

                <div>
                    <h3 className="font-bold text-lg mb-3">LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-3">AROUND THE WEB</h3>
                    <div className="flex justify-center gap-4">
                        <span className="w-10 h-10 border rounded-full flex items-center justify-center">
                            F
                        </span>
                        <span className="w-10 h-10 border rounded-full flex items-center justify-center">
                            G
                        </span>
                        <span className="w-10 h-10 border rounded-full flex items-center justify-center">
                            L
                        </span>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-3">
                        ABOUT FREELANCER
                    </h3>
                    <p className="text-sm leading-relaxed">
                        Freelance is a free to use, licensed Bootstrap theme
                        created by Route
                    </p>
                </div>
            </div>

            <div className="bg-[#1a252f] text-center py-4 text-sm">
                <p>Copyright © Your Website 2021</p>
            </div>

        </footer>
    )
}
