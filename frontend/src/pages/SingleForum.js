import { useState, useEffect } from 'react'
import Posts from '../components/Posts'
import AddPost from '../components/AddPost'
import SinglePost from '../pages/SinglePost'

const SingleForum = () => {
    // NOTE: STATE VARIABLES
    const [forum, setForum] = useState(null)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        // NOTE: FETCHING THE FORUM GROUP FROM THE SERVER
        const fetchForumGroup = async () => {
            const response = await fetch('/community')
            const json = await response.json()

            if (response.ok) {
                const params = window.location.href

                // NOTE: LOOPING THROUGH THE FORUM GROUPS TO FIND THE ONE THAT THE USER IS IN
                for (let i = 0; i < json.length; i++) {
                    if (json[i]._id === params.split('/').reverse()[0]) {
                        // DEBUG:
                        //console.log("Current: " + params.split('/').reverse()[0] + "\nFound in JSON: " + json[i]._id)
                        //console.log("JSON Objetc: " + json[i].title)
                        setForum(json[i])
                    }
                }
            }
         }

        // NOTE: FETCHING THE POSTS FROM THE SERVER
        const fetchPosts = async () => {
            const response = await fetch('/community/:id/posts')
            const json = await response.json()
            const params = window.location.href
            var jsonObject = []

            // NOTE: LOOPING THROUGH THE POSTS TO FIND THE ONES THAT BELONG TO THE GROUP
            for (let i = 0; i < json.length; i++) {
                if (json[i].group === params.split('/').reverse()[0]) {
                        jsonObject.push(json[i])
                }
            }

        setPosts(jsonObject)

    }

    fetchForumGroup()
    fetchPosts()
    }, [])

    return (
        <div className='forum-page'>
            <div className='forum'>
                {forum
                    ? 
                    <div className="single-forum-details">
                        <h2>Welcome to {forum.title}!</h2>
                        <i>{forum.description}</i><br />
                        {posts && posts.map((post) => (
                            <Posts key={post._id} post={post}/>
                        ))}
                        <AddPost />
                    </div>
                    : <p>No Unit Found</p>
                }
            </div>
        </div>
    )

}

export default SingleForum
