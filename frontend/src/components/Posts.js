import { Link } from 'react-router-dom'

// NOTE: COMPONENT TO DISPLAY THE POSTS
// USING THE PASSED IN "post" PROP
const Posts = ({ post }) => {
    // NOTE: FORMATTING THE "post.createdAt" TO A MORE READABLE FORMAT
    const createdDate = Date.parse(post.createdAt)

    // NOTE: CREATING THE DATE FORMATTER
    const formatter = new Intl.DateTimeFormat("en-GB", {
            dateStyle: 'full',
            timeStyle: 'short'
        });

    return(
        <Link to={post._id} className='id-link'>
            <div className='posts'>
                <p className='username'>{post.posterName}</p>
                <h4>{post.postTitle}</h4>
                <p><b>Created at:</b> {formatter.format(createdDate)}</p>
            </div>
        </Link>
    )
}

export default Posts