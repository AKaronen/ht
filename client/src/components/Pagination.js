import React from 'react'

const Pagination = ({ count, totalPosts, switchPage}) => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / count); i++) { //Create the required indexes for the pagination, count means the amount of posts per page
        pages.push(i);
    }
    return ( //Create Materialize styled pagination with the created page indexes
        <div>
            <ul class="pagination">
                {pages.map(index => (
                    <li key={index} className="waves-effect" onClick={()=>switchPage(index)}><a href="/posts/#!">{index}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination