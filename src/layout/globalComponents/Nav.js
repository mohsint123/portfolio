import React from "react";

const Nav = () => {

    return(

    <div className="bg-stone-800 flex justify-around p-4">
        <div className="text-2xl font-serif text-white">
            <h1><span className="text-amber-300">M</span>ohsin</h1>
        </div>
        <div className="flex justify-evenly gap-y-2 text-white">
            
            <a className=" mx-2" href="/">Home</a>
            <a className=" mx-2" href="/">About</a>
            <a className=" mx-2" href="/">Resume</a>
            <a className=" mx-2" href="/">Portfolio</a>
            <a className=" mx-2" href="/">Contact</a>
        </div>
        
   </div>
    )
}

export default Nav





// <Carousel sx={{ maxWidth: 320 }} mx="auto" withIndicators height={200}>
// <Carousel.Slide>
//   <img src='https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
// </Carousel.Slide>
// <Carousel.Slide>
// <img src='https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80' />
// </Carousel.Slide>
// <Carousel.Slide>
// <img src='https://images.unsplash.com/photo-1675116731363-c17d957f3444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
// </Carousel.Slide>
// </Carousel>