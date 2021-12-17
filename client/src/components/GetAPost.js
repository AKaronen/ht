import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CreateComment from "./CreateComment"
import Comment from "./Comment"
import APost from "./APost"


function GetAPost({ loggedUser }) {
    const { id } = useParams();
    const [Post, setPost] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => { //loading data
        setLoading(true)
        fetch("/posts/" + id, {
            method: "GET",
            mode: "cors"
        })
            .then(response => response.json())
            .then(data => {
                setPost(data)
                setLoading(false)
            })
    }, [id])

    if(loading) { // If page is loading something, render this
        return (
            <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
            )
    }
    if (Post?.item?.length > 0) { // If the Post has been found, render this. Here we render all the components that belong to a post (comment, post, likes etc.)
        return (
            <div>
                <APost Post={Post}/>
                {Post.comments.length > 0 && (<h5>Comments:</h5>)}
                <div className="comment-container">
                    {Post.comments.map((comment, index) => (
                        <Comment key={index} comment={comment} />
                    ))} 
                </div>

                <CreateComment postid={id} user={loggedUser} />
            </div>
        ) 
    }
    else{ //If nothing is found, render this
        return(
            <div>
                Nothing here!
            </div>
        )
    }

}

export default GetAPost
