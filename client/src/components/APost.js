import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import HOC from './HOC'

const Post = ({Post}) => {
    return ( //Rendering one post like so, component takes in a Post and shows it's content to the user. It's also wrapped with my HOC that adds a voting part to the component
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{Post.title}</span>
                            <SyntaxHighlighter style={docco} wrapLongLines={true} wrapLines={true} showLineNumbers={true}> 
                                {Post.item}
                            </SyntaxHighlighter>
                            <p>Posted by: {Post.user}</p>
                        </div>
                    </div>
                </div>
            </div>
    ) //SyntaxHighlighter is used to display the post with syntax highlighting
}

export default HOC(Post)
