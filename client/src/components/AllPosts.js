import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
function AllPosts() {
    const [PostData, setPostData] = useState([]);
    
    useEffect(() => {
        fetch("/posts/allPosts")
        .then(response => response.json())
        .then(data => {
            setPostData(data);
        })
    }, [])
    console.log(PostData)
    if(PostData.length>0){
        return (
            <div>
                <ul>
                    {PostData.map(post=>(
                        <li key={post._id}><Link to = {`/post/${post._id}`}>{post.title}</Link></li>
                    ))}
                </ul>
            </div>
        )  
    }else{
        return(
            <div>
                No Posts was found
            </div>
        )
    }

}

export default AllPosts

