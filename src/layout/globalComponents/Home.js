import React from "react";

const Home = () => {
    return(
        <div className="Home flex flex-col text-center justify-center w-screen h-screen bg-gray-900 text-white">
            <div className="flex justify-center">
                <img className="w-96 rounded-full" src="https://play-lh.googleusercontent.com/5KBxpzYZdHiHvlqSJnD5y5xT4zz80rtlTPsLR69yLw6u6qnCf0r81kCq3c_YUFh1d7U=s200" alt="/" />
            </div>
            <div className="flex flex-col w-3/6 mx-auto">
                <h1 className="font-serif text-4xl font-bold">Hi, I Am <span className="text-amber-300">Mohsin</span></h1>
                <p className="text-gray-400 text-xl">I am a frontend web developer. I can provide clean code and pixel perfect design.</p>
                <p className="text-gray-400 text-xl">I also make website more & more interactive with web animations.</p>
            </div>
        
        </div>
    )
}

export default Home