import React from 'react'

function MainPage({username}) {
    if(username === null){
        return ( //Conditional rendering, if noone has logged in, render only a simple Welcome!
        <div>
            <h2>Welcome!</h2>
        </div>
        ) 
    }else{
        return( //if someone has logged in, render Welcome "their username"!
            <div>
                <h2>Welcome {username}!</h2>
            </div> 
        )
        
    }
   
}

export default MainPage

