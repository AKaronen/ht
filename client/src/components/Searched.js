import { Link } from 'react-router-dom'
import { useState } from 'react'
import Pagination from "./Pagination"

function Searched({searchResults, loading}) {
    const [currentPage, setCurrentPage] = useState(1); //state to tell us which page should be rendered
    const count = 10; //how many posts to render per page


    //Slicing searched the posts to 10 page slices
    const lastPostIndex = currentPage * count; 
    const firstPostIndex = lastPostIndex-count;
    const currentPosts = searchResults.slice(firstPostIndex,lastPostIndex); 

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
    if (searchResults.length > 0) {
        return (
            <div>
                <div className="collection">
                    {currentPosts.map(post => (
                        <li className= "collection-item" key={post._id}><Link to={`/post/${post._id}`}>{post.title}</Link></li> 
                        //adding Posts as collection items, currentPosts tells us which 10 to pick from all of the posts for the page we are on
                    ))}
                </div>
                <Pagination count={count} totalPosts={searchResults.length} switchPage={switchPage}/>
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