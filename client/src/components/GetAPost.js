import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

function GetAPost() {
    const Postname = useParams();
    const [PostData, setPostData] = useState({});
    
    useEffect(() => {
        fetch("/posts"+Postname.id)
        .then(response => response.json())
        .then(data => {
            setPostData(data[0]);
        })
    }, [Postname])
    if(PostData?.user?.length>0){
        return (
            <div>
                <p>{PostData.user}</p>
                <p>{PostData.items}</p>
            </div>
        )  
    }else{
        return(
            <div>
                No Post was found
            </div>
        )
    }

}

export default GetAPost
