import { Link } from 'react-router-dom'

// NOTE: COMPONENT TO DISPLAY THE LEARN DETAILS
// USING THE PASSED IN "learn" PROP
const LearnDetails = ({ learn }) => {
    const id = learn._id
    
    return (
        <Link to={id} className='id-link'>
            <div className="learn-details">
                <img src={learn.media} alt="Unit Visual" />
                <h4>{learn.title}</h4>
                <p><b>Description:</b> {learn.description}</p>
                <button>More</button>
            </div>
        </Link>
    )
}

export default LearnDetails