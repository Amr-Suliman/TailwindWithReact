import React from "react";

export default function About() {
    return (
        <section className="bg-[#1abc9c] text-white py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-4 text-center">

                <p className="text-3xl sm:text-4xl font-bold mb-6">
                    ABOUT COMPONENT
                </p>

                <div className="flex items-center justify-center gap-4 mb-10">
                    <span className="w-20 sm:w-28 h-1.5 bg-white"></span>
                    <span className="text-3xl sm:text-4xl">★</span>
                    <span className="w-20 sm:w-28 h-1.5 bg-white"></span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 
                                max-w-4xl mx-auto text-center md:text-left">

                    <p className="leading-relaxed text-base sm:text-lg">
                        Freelancer is a free bootstrap theme created by Route.
                        The download includes the complete source files including
                        HTML, CSS, and JavaScript as well as optional SASS
                        stylesheets for easy customization.
                    </p>

                    <p className="leading-relaxed text-base sm:text-lg">
                        Freelancer is a free bootstrap theme created by Route.
                        The download includes the complete source files including
                        HTML, CSS, and JavaScript as well as optional SASS
                        stylesheets for easy customization.
                    </p>

                </div>

            </div>
        </section>
    );
}
