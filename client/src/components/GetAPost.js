import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CreateComment from "./CreateComment"
import Comment from "./Comment"
function GetAPost() {
    const {id} = useParams();
    const [Post, setPost] = useState({});
    
    useEffect(() => {
        fetch("/posts/"+id, {
            method: "GET",
            mode: "cors"
        })
        .then(response => response.json())
        .then(data => {
            setPost(data)
            
        })
    },[id])
    if(Post?.item?.length>0){
        console.log(Post.comments);
        return (
            <div className="container">
                <h4>{Post.user}</h4>
                <h5 className="header" id="title">{Post.title}</h5>
                <SyntaxHighlighter style={docco} className="card-panel s12 col3">
                    {Post.item}
                </SyntaxHighlighter>
                <h5>Comments:</h5>
                <div className="comment-container">
                    {Post.comments.map((comment, index) => (
                        <Comment key={index} comment={comment}/>
                    ))}
                </div> 
                
                <CreateComment postid = {id}/>
            </div>
        )  
    }else{
        return(
            <div>
                No Post was found
            </div>
        )
    }

}

export default GetAPost
