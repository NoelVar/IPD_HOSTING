import { useState, useEffect } from "react";

import ForumGroupDetails from '../components/ForumGroupDetails'

const ForumGroups = () => {
    // NOTE: STATE VARIABLES
    const [forumGroups, setForumGroups] = useState(null)

    // NOTE: FETCHING THE FORUM GROUPS
    useEffect(() => {
        const fetchForumGroups = async () => {
            // NOTE: FETCHING THE FORUM GROUPS FROM THE SERVER
            const response = await fetch('/community')
            const json = await response.json()

            if (response.ok) {
                setForumGroups(json)
            }
        }

        fetchForumGroups()
    }, [])

    return (
        <div className='forum-group-page'>
            <div className='groups'>
                <h2>Browse the Forums Different Groups</h2>
                {forumGroups && forumGroups.map((forumGroup) => (
                    <ForumGroupDetails key={forumGroup._id} forumGroup={forumGroup} />
                ))}
            </div>
        </div>
    )
}

export default ForumGroups