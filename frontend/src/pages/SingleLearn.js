import { useEffect, useState } from "react";

const SingleLearn = () => {
    // NOTE: STATE VARIABLES
    const [singleLearn, setSingleLearn] = useState(null)

    useEffect(() => {
        // NOTE: FETCHING THE LEARNING MATERIAL FROM THE SERVER
        const fetchLearn = async () => {
            const response = await fetch('/learn')
            const json = await response.json()

            if (response.ok) {
                const params = window.location.href

                // NOTE: LOOPING THROUGH THE LEARNING MATERIALS TO FIND THE ONE THAT THE USER SELECTED
                for (let i = 0; i < json.length; i++) {
                    if (json[i]._id === params.split('/').reverse()[0]) {
                        console.log("Current: " + params.split('/').reverse()[0] + "\nFound in JSON: " + json[i]._id)
                        console.log("JSON Objetc: " + json[i].title)
                        setSingleLearn(json[i])
                    }
                }
            }
        }

        fetchLearn()
    }, [])

    return (
        <div className="learn-page">
            <div className="learns">
                {singleLearn
                    ? 
                    <div className="single-unit-details">
                        <h2>{singleLearn.title}</h2>
                        <b><i>{singleLearn.description}</i></b>
                        <p>{singleLearn.material}</p>
                        <img src={singleLearn.media} alt='media for unit' />
                        <button>Quiz</button>
                    </div>
                    : <p>No Unit Found</p>
                }
            </div>
        </div>
    )
}

export default SingleLearn
