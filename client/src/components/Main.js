import React from 'react'

function MainPage({username}) {
    if(username === null){
        return (
        <div>
            <h2>Welcome!</h2>
        </div>
        ) 
    }else{
        return(
            <div>
                <h2>Welcome {username}!</h2>
            </div> 
        )
        
    }
   
}

export default MainPage

