import { Link } from 'react-router-dom'

// NOTE: COMPONENT TO DISPLAY THE NAVBAR
const Navbar = () => {
    return (
        <header>
            <div className='container'>
                <Link to="/">
                    <img src='/ED2_LOGOV5.png' alt='logo' className='logo' />
                </Link>
                <Link to="/">
                    <h1>Home</h1>
                </Link>
                <Link to="/recipes">
                    <h1>Recipes</h1>
                </Link>
                <Link to="/learn">
                    <h1>Learn</h1>
                </Link>
                <Link to="/community">
                    <h1>Community</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar