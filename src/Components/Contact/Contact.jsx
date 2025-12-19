import React from 'react'

export default function Contact() {
    return (
        <section className="py-16 text-center">

            <p className="font-bold text-3xl sm:text-4xl text-[#2c3e50] mb-4 mt-15">
                CONTACT SECTION
            </p>

            <div className="flex items-center justify-center gap-4 mb-12">
                <span className="w-20 sm:w-28 h-1.5 bg-[#2c3e50]"></span>
                <span className="text-[#2c3e50] text-2xl sm:text-3xl">★</span>
                <span className="w-20 sm:w-28 h-1.5 bg-[#2c3e50]"></span>
            </div>

            <form className="w-full max-w-2xl mx-auto px-4">

                <div className="mb-8 text-left">
                    <label className="block text-sm font-semibold text-[#2c3e50]">
                        User Name
                    </label>
                    <input
                        type="text"
                        className="w-full py-2 border-b border-gray-300 
                                   outline-none focus:border-[#1abc9c] transition"
                    />
                </div>

                <div className="mb-8 text-left">
                    <label className="block text-sm font-semibold text-[#2c3e50]">
                        User Age
                    </label>
                    <input
                        type="number"
                        className="w-full py-2 border-b border-gray-300 
                                   outline-none focus:border-[#1abc9c] transition"
                    />
                </div>

                <div className="mb-8 text-left">
                    <label className="block text-sm font-semibold text-[#2c3e50]">
                        User Email
                    </label>
                    <input
                        type="email"
                        className="w-full py-2 border-b border-gray-300 
                                   outline-none focus:border-[#1abc9c] transition"
                    />
                </div>

                <div className="mb-10 text-left">
                    <label className="block text-sm font-semibold text-[#2c3e50]">
                        User Password
                    </label>
                    <input
                        type="password"
                        className="w-full py-2 border-b border-gray-300 
                                   outline-none focus:border-[#1abc9c] transition"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#1abc9c] text-white px-10 py-2 
                               rounded-lg font-semibold
                               hover:bg-[#16a085] transition"
                >
                    Send Message
                </button>
            </form>
        </section>
    )
}
