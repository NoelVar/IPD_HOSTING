import mongoose from 'mongoose';
import { useState } from 'react';

const AddPost = () => {
    // NOTE: STATE VARIABLES
    const [postTitle, setTitle] = useState('')
    const [postDescription, setDescription] = useState('')
    const [postMedia, setMedia] = useState('')
    const [posterName, setUsername] = useState('')
    const [group, setGroup] = useState(null)
    const [error, setError] = useState(null)

    // NOTE: SETTING THE GROUP ID FOR THE POST
    const setPostGroup = async () => {
        const params = window.location.href
        const groupID = params.split('/').reverse()[0]
    
        var id = new mongoose.Types.ObjectId(groupID);
        setGroup(id)
        // DEBUG: REMOVE BEFORE DEPLOYMENT
        //console.log(group)
        //console.log(typeof group)
    }

    // NOTE: HANDLING THE SUBMITION
    const handleSubmit = async (e) => {
        // DEBUG: REMOVE BEFORE DEPLOYMENT
        //console.log("This is group at the beginning: " + group + ", " + typeof group)
        e.preventDefault()

        // NOTE: CREATING THE POST OBJECT WITH THE USER INPUT
        const post = {postTitle, postDescription, postMedia, posterName, group}
        
        // NOTE: SENDING THE POST TO THE SERVER
        const response = await fetch('/community/:id/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        // NOTE: HANDLING THE ERROR
        if (!response.ok) {
            setError(json.error)
            // DEBUG: REMOVE BEFORE DEPLOYMENT
            console.log('ERROR: ' + json.error)
        }

        // NOTE: CLEARING THE FORM
        if (response.ok) {
            setTitle('')
            setDescription('')
            setMedia('')
            setUsername('')
            setGroup(null)
            // DEBUG: REMOVE BEFORE DEPLOYMENT
            console.log('New Post has been made', json)
        }
    }

    return(
        <form className='add-post' onSubmit={handleSubmit}>
            <h3>Add New Post</h3>
            <label>Post Title:</label>
            <input 
                type="text"
                onChange={(event) => setTitle(event.target.value)}
                value={postTitle}
            />

            <label>Description: </label>
            <input 
                type="text"
                onChange={(event) => setDescription(event.target.value)}
                value={postDescription}
            />

            <label>Media URL:</label>
            <input 
                type="text"
                onChange={(event) => setMedia(event.target.value)}
                value={postMedia}
            /> 

            <label>Username: </label>
            <input 
                type="text"
                onChange={(event) => setUsername(event.target.value)}
                value={posterName}
            />
            <button
                onClick={setPostGroup}
            >+ New Post</button>
            {error && <div className="error">{error}</div>}          
        </form>
    )
}

export default AddPost