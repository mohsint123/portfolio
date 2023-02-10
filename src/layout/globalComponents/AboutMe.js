import React from "react";
import { FaPython } from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-zinc-900 flex flex-col">
            <div className="text-amber-300 text-center mb-8 font-medium text-2xl">
                <h1 className="text-xl text-amber-300 font-medium">About Me</h1>
            </div>
            <div className="flex justify-center flex-wrap w-full m-auto">
                <div className="sm:w-2/4 flex justify-center lg:justify-end">
                    <img className="sm:w-96 rounded-full" src="https://play-lh.googleusercontent.com/5KBxpzYZdHiHvlqSJnD5y5xT4zz80rtlTPsLR69yLw6u6qnCf0r81kCq3c_YUFh1d7U=s200" alt="" />
                </div>
                <div className="md:w-2/4 text-gray-400 flex flex-col">
                    <h1 className="text-4xl font-sans font-semibold leading-relaxed px-6">Hi There! I'm Mohsin Tariq</h1>
                    <h3 className="text-2xl font-semibold leading-loose text-amber-300 px-6">Front End Developer</h3>
                    <p className="sm:w-96 px-6">I am a professional web front-end developer and work on javascript techhnologies like reactjs, next js, typescript. My skills include HTML5, CSS3, JavaScript and React-Native.</p>
                    <div className="text-gray-400 leading-10 px-6">
                        <ul>
                            <li><span className="w-24 inline-block sm:w-20">Phone</span> : <span className="">+923170797755</span></li>
                            <li><span className="w-24 inline-block sm:w-20">Email</span> : <span className="">m.mohsintariq544@gmail.com</span></li>
                            <li><span className="w-24 inline-block sm:w-20">Language</span> : <span className="">English,Urdu</span></li>
                            <li><span className="w-24 inline-block sm:w-20">Freelance</span> : <span className="">Available</span></li>
                            <button className="btn rounded-full bg-blue-800 text-amber-300 hover:bg-amber-300 hover:text-blue-800 px-2 py-1 my-2.5 font-semibold">Download CV</button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-amber-300 text-center mb-8 font-medium text-2xl">
                <h1>Services</h1>
            </div>
            <div className="flex flex-wrap lg-rounded justify-center text-center rounded">
                <div className="max-w-sm rounded bg-stone-800 overflow-hidden shadow-lg ">
                    <div className="w-full flex justify-center">

                        <FaPython size={45} className="text-amber-300 m-4" />
                    </div>

                    <div className="px-6 py-4">
                        <div className="font-bold text-amber-300 text-xl mb-2">Teaching</div>
                        <p className="text-gray-400 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-amber-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-amber-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-amber-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </div>
            <div className="py-8 text-center">
                <h1 className="text-2xl text-amber-300 font-medium">My Skills</h1>
            </div>
            <div className="px-6 md:px-24 flex flex-col justify-center w-full">
                <div className="text-gray-400 leading-relaxed flex flex-col lg:w-2/4">
                    <h1 className="text-2xl font-medium text-white pb-8">All the skills that I have in that field of work are mentioned.</h1>
                    <p className="pb-6">I have years of experience in the web development space. My portfolio shows an ability to code elegant, scalable applications on high traffic websites. I can create apps that look great and are easy to use for both front end and back end users.</p>
                    <p>I have experice on different platforms like Wordpress and Shopify. I can also create custom websites from scratch on javascript frameworks.</p>
                </div>
                <div className="px-6 lg:w-2/4 lg:justify-center my-6 flex-wrap sm:leading-10">
                <div className="flex flex-col">
                    <div>
                        <div className="w-full flex justify-between text-amber-300">
                            <div>React JS</div>
                            <div>90%</div>

                        </div>
                        <div className="w-full h-1 rounded-full bg-gray-500">
                            <div className="w-[90%] h-1 rounded-full bg-amber-300"></div>
                        </div>
                    </div>

                    <div>
                        <div className="w-full flex justify-between text-amber-300">
                            <div>React JS</div>
                            <div>90%</div>

                        </div>
                        <div className="w-full h-1 rounded-full bg-gray-500">
                            <div className="w-[90%] h-1 rounded-full bg-amber-300"></div>
                        </div>
                    </div>

                    <div>
                        <div className="w-full flex justify-between text-amber-300">
                            <div>React JS</div>
                            <div>90%</div>

                        </div>
                        <div className="w-full h-1 rounded-full bg-gray-500">
                            <div className="w-[90%] h-1 rounded-full bg-amber-300"></div>
                        </div>
                    </div>

                    <div>
                        <div className="w-full flex justify-between text-amber-300">
                            <div>React JS</div>
                            <div>90%</div>

                        </div>
                        <div className="w-full h-1 rounded-full bg-gray-500">
                            <div className="w-[90%] h-1 rounded-full bg-amber-300"></div>
                        </div>
                    </div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default About