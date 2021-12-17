import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Pagination from "./Pagination"
import { useParams } from 'react-router-dom'

function Searched() {
    const [currentPage, setCurrentPage] = useState(1); //state to tell us which page should be rendered
    const count = 10; //how many posts to render per page
    const [currentResults, setCurrentResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const {search} = useParams()

    useEffect(() => { //get the search results
        setLoading(true)
        if(!search){
          window.location.replace("/*");
          console.log("No search data!");
        }else{
          fetch("/posts/search/"+search)
          .then(response => response.json())
          .then(data => {
            setCurrentResults(data);
            setLoading(false)
          })
        } 
    },[])
    //Slicing searched the posts to 10 page slices with some basic logic
    const lastPostIndex = currentPage * count; 
    const firstPostIndex = lastPostIndex-count;
    const currentPosts = currentResults.slice(firstPostIndex,lastPostIndex);

    // Page switcher
    const switchPage = (page) => setCurrentPage(page);

    if (loading) { // If page is loading, render this
        return (
            <div class="preloader-wrapper big active">
                <div class="spinner-layer spinner-blue-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div><div class="gap-patch">
                        <div class="circle"></div>
                    </div><div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        )
    }
    if (currentResults.length > 0) {
        return (
            <div>
                <div className="collection">
                    {currentPosts.map(post => (
                        <li className= "collection-item" key={post._id}><Link to={`/post/${post._id}`}>{post.title}</Link></li> 
                        //adding Posts as collection items, currentPosts tells us which 10 to pick from all of the posts for the page we are on
                    ))}
                </div>
                <Pagination count={count} totalPosts={currentResults.length} switchPage={switchPage}/>
            </div>
            
        )
    } else { //Render this if something goes wrong and there isn't any Posts found
        return (
            <div>
                No Posts was found
            </div>
        )
    }

}

export default Searched