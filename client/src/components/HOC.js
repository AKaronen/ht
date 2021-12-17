
import { useState } from 'react'


const HOC = (Component) => { //this HOC creates a new component out of the original component that gets passed in as a prop
    const NewComponent = (props) => {
        const [voteCount, setVoteCount] = useState(0); //Vote state
        const [usability, setUsability] = useState(true); //Vote button usability state
        const increment = () => { //increment VoteCount
            setVoteCount(voteCount + 1)
            setUsability(false);
        }
        const decrement = () => {//decrement VoteCount
            setVoteCount(voteCount - 1)
            setUsability(false);
        }
        const auth_token = localStorage.getItem("auth_token");
        if (auth_token) {
            return ( //If someone has logged in, render the voteCount and also the voting buttons
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
            return ( //Otherwise render only the voteCount
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
