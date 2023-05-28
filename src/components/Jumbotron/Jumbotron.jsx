const Jumbotron = () => {
    return <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40" id="">
        <div className="grid justify-center items-center order-1 col-span-1">
            <img className="lg:h-80 md:h-64 h-40 rounded-full"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" alt="" />
        </div>
        <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
            <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">
                <span className="block xl:inline text-gray-50">Hi, I’m John Doe.</span>
                <span className="block text-indigo-600 xl:inline">Creative Web Technologist.</span>
            </h1>
            <p className="text-xl text-gray-500 text-center font-medium md:text-left">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
            </p>
            <div className="flex">
                <button className="btn btn-outline btn-info m-1"><a href="#">Download Resume</a></button>
                <button className="btn btn-primary m-1"><a >Hire Me</a></button>
            </div>

        </div>
    </div>
}

export default Jumbotron
