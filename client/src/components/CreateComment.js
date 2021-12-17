import {useState} from 'react'

function CreateComment({postid, user}) {
    const [commentData, setcommentData] = useState({});
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
            .then(window.location.reload())
    }
    const change = (e) => {
        setcommentData({ ...commentData, [e.target.name]: e.target.value })
    }

    const setData = () =>{
        const d = new Date()
        const date = d.toLocaleDateString();
        const timenow = d.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'});
        const newtime = timenow + " " +date  ; 
        setcommentData({...commentData, time: newtime, username: user , post: postid})
        
    }
    if(!auth_token){
       return (     
        <div>
            Login to comment on this Post!
        </div>) 
    }
    else{
        console.log(commentData);
        return(
            <div>
            <div className="container col s12 left-align">
                <div className="row">
                    <form onSubmit = {submit} onChange={change}>
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" name="comment" required></textarea>
                            <label htmlFor="textarea1">Write your Comment</label>
                        </div>
                        <br/>
                        <input type="submit" className="btn" name="button" value="submit" onClick = {setData}/>
                    </form>
                </div>
            </div>
        </div> 
        )
    }
}

export default CreateComment
