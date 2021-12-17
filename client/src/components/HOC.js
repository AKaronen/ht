
import { useState } from 'react'


const HOC = (Component) => {
    const NewComponent = (props) => {
        const [voteCount, setVoteCount] = useState(0);
        const [usability, setUsability] = useState(true);
        const increment = () => {
            setVoteCount(voteCount + 1)
            setUsability(false);
        }
        const decrement = () => {
            setVoteCount(voteCount - 1)
            setUsability(false);
        }
        const auth_token = localStorage.getItem("auth_token");
        if (auth_token) {
            return (
                <div className="vote-wrapper left-align">
                    <span class="badge black-text">{voteCount}</span>
                    <a className={usability ? "btn right" : "btn right disabled"} name="upvote" onClick={() => increment()}><i className='material-icons'>thumb_up</i></a>
                    <a className={usability ? "btn right" : "btn right disabled"} name="downvote" onClick={() => decrement()}><i className='material-icons'>thumb_down</i></a>
                    <Component voteCount={voteCount} increment={increment} decrement={decrement} {...props} />
                    <br />
                    <div className="divider"></div>
                    <br />
                </div>
            )
        } else {
            return (
                <div className="vote-wrapper left-align">
                    <span class="badge black-text">{voteCount}</span>
                    <Component voteCount={voteCount} {...props} />
                    <br />
                    <div className="divider"></div>
                    <br />
                </div>
            )

        }


    }
    return (NewComponent)

}

export default HOC
