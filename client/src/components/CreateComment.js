import {useState} from 'react'


function CreateComment({postid}) {
    const [commentData, setcommentData] = useState({post: postid, username: "", comment: ""});
    const auth_token = localStorage.getItem("auth_token");
    
    const submit = (e) => {
        e.preventDefault();
        fetch("/private/comment", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "authorization": "Bearer " + auth_token
            },
            body: JSON.stringify(commentData),
            mode: "cors"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.location.reload();
                setcommentData("");
            })
    }
    const change = (e) => {
        setcommentData({ ...commentData, [e.target.name]: e.target.value })
    }


    if(!auth_token){
       return (     
        <div>
            Login to comment on this Post!
        </div>) 
    }
    else{
        return(
            <div>
            <h5>Comment</h5>       
            <div className="container col s6">
                <div className="row">
                    <form onSubmit = {submit} onChange={change}>
                        <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" required/>
                        <label htmlFor="comment">Comment</label> 
                            <input type="text" name="comment" id="comment" required/>
                            <br/>
                        <input type="submit" className="btn" name="button" value="submit"/>
                    </form>
                </div>
            </div>
        </div> 
        )
    }
}

export default CreateComment
