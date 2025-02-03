import { useEffect, useState } from "react"

const SinglePost = () => {
    // NOTE: STATE VARIABLES
    const [post, setPost] = useState(null)

    useEffect(() => {
        // NOTE: FETCHING THE POST FROM THE SERVER
        const fetchPost = async () => {
            const response = await fetch('/community/:id/posts/')
            const json = await response.json()
            const params = window.location.href
    
            // NOTE: LOOPING THROUGH THE POSTS TO FIND THE ONE THAT THE USER SELECTED
            for (let i = 0; i < json.length; i++) {
                if (json[i]._id === params.split('/').reverse()[0]) {
                        setPost(json[i]) 
                }
            }
        }
    
        fetchPost()
        }, [])

    return (
        <div className="single-post">
            {post
                    ? 
                    <div className="post-details">
                        <p className='username'>{post.posterName}</p>
                        <h4>{post.postTitle}</h4>
                        <p>{post.postDescription}</p>
                        <img src={post.postMedia} alt='Post media'/>
                    </div>
                    : <p>Cannot load post</p>
            }
        </div>
    )
}

export default SinglePost