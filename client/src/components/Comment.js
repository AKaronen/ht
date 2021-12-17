import HOC from './HOC'

const Comment = ({comment}) => {
    return (
        <div className= "comment">
            <div className="comment-author">{comment.username}</div>
            <div>{comment.time}</div>
            <div className = "comment-text">{comment.comment}</div>
        </div>
        
    )
}

export default HOC(Comment)