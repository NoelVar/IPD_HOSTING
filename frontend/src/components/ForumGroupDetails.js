import { Link } from "react-router-dom";
// NOTE: COMPONENT TO DISPLAY THE FORUM GROUP DETAILS 
// USING THE PASSED IN "forumGroup" PROP
const ForumGroupDetails = ({ forumGroup }) => {
    const id = forumGroup._id

    return (
        <Link to={id} className="id-link">
            <div className='group-details'>
                <table>
                    <tr>
                        <td>
                        <img src={forumGroup.logoImg} alt='Forums Logo'/>
                        </td>
                        <td>
                            <h4>{forumGroup.title}</h4>
                            <p><b>Description: </b>{forumGroup.description}</p>
                            <p><b>Posts: </b>{forumGroup.numPost}</p>
                        </td>
                    </tr>
                </table>
            </div>
        </Link>

    )
}

export default ForumGroupDetails