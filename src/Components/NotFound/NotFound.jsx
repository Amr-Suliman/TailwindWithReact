import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-[#2c3e50] text-white">
            <div className="text-center px-4">

                <h1 className="text-7xl sm:text-8xl md:text-[120px] 
                               font-extrabold leading-none mb-4 text-[#1abc9c]">
                    404
                </h1>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                    Page Not Found
                </h2>

                <p className="text-gray-300 mb-8 max-w-md mx-auto text-sm sm:text-base">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="inline-block bg-[#1abc9c] text-white 
                               px-6 py-3 rounded-lg font-semibold
                               hover:bg-[#16a085] transition
                               !no-underline"
                >
                    Back To Home
                </Link>

            </div>
        </section>
    );
}
