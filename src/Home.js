import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const[blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "manash", id: 1},
    { title: "Welcome", body: "lorem ipsum...", author: "ezizi", id: 2},
    { title: "Web dev", body: "lorem ipsum...", author: "muhittin", id: 3}
  ])
    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="My blogs"/>
        </div>
     );
}
 
export default Home;