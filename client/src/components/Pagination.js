import React from 'react'

const Pagination = ({ count, totalPosts, switchPage}) => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / count); i++) {
        pages.push(i);
    }
    return (
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