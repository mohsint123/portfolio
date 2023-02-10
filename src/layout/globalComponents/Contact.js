import React from "react";
import { useState } from "react";
import DisplayData from "../DisplayData";

const Contact = () => {

    const [Data, setData] = useState({
        name: '',
        email: '',
        pass: ''
    });
    // const handledata = (e) => {
    //     setData({ ...Data, name: e.target.value })
    // }

    return (

        <div className="bg-zinc-800 flex flex-col justify-center pb-32">
            <div className="text-center text-2xl font-medium text-amber-300 py-6">
                Contact Me
            </div>
            <div className="text-left">
                <h1 className="text-white text-2xl mx-20 font-medium py-6">
                    Just Say Hello
                </h1>
            </div>
            <div>
                <div className="flex flex-col flex-wrap justify-center mx-8 lg:w-2/4">
                    <input className="text-xl text-white h-14 px-3 border bg-gray-600 border-gray-200 rounded-lg my-6" placeholder="Name" type="text" name="name" value={Data.name} onChange={(e) => setData({ ...Data, name: e.target.value })} />
                    <input className="text-xl text-white h-14 px-3 border bg-gray-600 border-gray-200 rounded-lg my-6" placeholder="Email" type="text" name="name" value={Data.email} onChange={(e) => setData({ ...Data, email: e.target.value })} />
                    <input className="text-xl text-white h-14 px-3 border bg-gray-600 border-gray-200 rounded-lg my-6" placeholder="Password" type="text" name="name" value={Data.pass} onChange={(e) => setData({ ...Data, pass: e.target.value })}/>
                <button className="py-2 w-28 text-xl font-medium bg-blue-500 text-amber-300 rounded-full hover:bg-amber-300 hover:text-blue-500" 
                onClick={() => console.log(Data)}                
                >Submit</button>
                </div>
                <div className="text-white flex flex-col flex-wrap lg:w-2/4">
                    <h1 className="text-2xl font-medium">Contact Info</h1>
                    <p>Please fill out the form on this section to contact with me.</p>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>
            </div>
            <DisplayData data={Data} />
        </div>
    )


};

export default Contact
