import HOC from './HOC'

const Comment = ({comment}) => {
    return (
        <div className= "comment">
            <div className="comment-author">{comment.username}</div>
            <div>{comment.time}</div>
            <div className = "comment-text">{comment.comment}</div>
        </div>
        
    ) //Just a basic Comment component, takes in a Comment as a prop and shows it's data and it's also wrapped with the voting HOC
}

export default HOC(Comment)