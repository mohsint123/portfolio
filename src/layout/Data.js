import { TextInput } from "@mantine/core"
import { useState } from "react"
import DisplayData from "./DisplayData"

export default () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [myData, setMyData] = useState({})

    const onSubmit = () => {
        // if(data.name === "") {
        //     alert("Please your Name!")
        // } else if(data.email === "") {
        //     alert("Please your Email!")
        // } else if(data.password === "") {
        //     alert("Please your Password!")
        // } else {
        //     setMyData(data)
        // }

        if (data.name === "" || data.email === "" || data.password === "") {
            alert("Please fill all feilds!")
        } else {
            setMyData(data)
        }
    }
    return (
        <div className="p-8">
            <TextInput
                placeholder="Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <TextInput
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <TextInput
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <button className="bg-indigo-600 rounded-md px-3 py-1 text-white" onClick={onSubmit}>Submit</button>

            <DisplayData data={myData} />
        </div>
    )
}