import { useEffect, useState } from "react";

import LearnDetails from "../components/LearnDetails";

// NOTE: COMPONENT TO DISPLAY THE LEARN PAGE
const Learn = () => {
    const [learns, setLearns] = useState(null)

    // NOTE: FETCHING THE MATERIALS FROM THE SERVER
    useEffect(() => {
        const fetchLearns = async () => {
            const response = await fetch('/learn')
            const json = await response.json()

            if (response.ok) {
                setLearns(json)
            }
        }

        fetchLearns()
    }, [])

    return (
        <div className="learn-page">
            <div className="learns">
                <h2>Learn Culinary Basics & Enhance Your Knowledge</h2>
                {learns && learns.map((learn) => (    
                    //NOTE: PASSING THE LEARN TO THE "LearnDetails" COMPONENT
                    <LearnDetails key={learn._id} learn={learn} />
                ))}
            </div>
        </div>
    )
}

export default Learn