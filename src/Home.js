import { useState, useEffect } from "react";

import BlogList from "./BlogList";
const Home = () => {
  const[blogs, setBlogs] = useState(null)
  // const [name, setName] = useState("manash");

  const handleDelete = (id)=>{
    const newBlogs = blogs.filter((blog)=>blog.id!==id);
    setBlogs(newBlogs);
  }

  useEffect(()=>{
    fetch("http://localhost:8000/blogs")
    .then(res=>{
      return res.json()
    })
    .then(data=>{
    setBlogs(data);
    })
  },[])

    return ( 
        <div className="home">
           { blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>}
           {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="manash")} title="Manash's blogs" /> */}
           {/* <p>{name}</p>
           <button onClick={()=>setName("ezizi")}>change</button> */}
        </div>
     );
}
 
export default Home;