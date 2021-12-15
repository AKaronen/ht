import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

function AllPosts() {
    const Postname = useParams();
    const [PostData, setPostData] = useState({});
    
    useEffect(() => {
        fetch("/api/posts/")
        .then(response => response.json())
        .then(data => {
            setPostData(data[0]);
        })
    }, [Postname])
    if(PostData?.length>0){
        return (
            <div>
                <ul>
                    {PostData.forEach((post) => (
                        <li>{post}</li>
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

