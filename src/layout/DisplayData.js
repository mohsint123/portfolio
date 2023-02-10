export default ({data}) => {
    return (
        <div className="p-8 text-gray-300">
            <div>Name: {data.name}</div>
            <div>Email: {data.email}</div>
            <div>Password: {data.password}</div>
        </div>
    )
}