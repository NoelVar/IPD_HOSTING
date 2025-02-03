import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            {/*
            TEMP: PREVIOUSLY USED FOR THE HOME PAGE
            <div className='parallax'>
                <div className='parallax-layers layer1'></div>
                <div className='parallax-layers layer2'>
                    <img src='https://images.vexels.com/media/users/3/259614/isolated/preview/7b906a7ab99246469f138dbbbbb563ee-donut-retro-food-treats.png' alt='asd'/>
                </div>
                <div className='parallax-layers layer3'>
                    <img src='https://images.vexels.com/media/users/3/259609/isolated/preview/d5bc4da2d4324d658d2f0eb748664927-popcorn-retro-food-treats.png' alt='asd'/>
                </div>
                <div className='parallax-layers layer4'>
                    <img src='https://images.vexels.com/media/users/3/259613/isolated/preview/8bf5b9d1c1d18d9f23b57d136210712b-ice-cream-retro-food-treats.png' alt='asd'/>
                </div>
                <div className='parallax-layers layer5'>
                    <img src='https://images.vexels.com/media/users/3/259603/isolated/preview/2aa0b7486b6b5ad0e19fb3d7011f0d7d-cupcake-retro-food-treats.png' alt='asd'/>
                </div>
                <div className='parallax-layers layer6'>
                    <img src='https://images.vexels.com/media/users/3/259600/isolated/preview/0dcad0119bd2da518d58ebf8ab9d0162-cherry-pie-retro-food-treats.png' alt='asd'/>
                </div>
                <h1 className='title'>Welcome to EdibleEducation</h1>
            </div>*/}
            <div className='eye-catcher'>
                <h1>Welcome to <span className='title'>EdibleEducation!</span></h1>
                <p>The Culinary Community platform</p>
            </div>
            <div className='home-container'>
                <h3>Recipes</h3>
                <p>Search for recipes, share your own recipe and see what others shared!</p>
                <Link to='/recipes'>
                    <button className='section-button'>
                        Recipes
                    </button>
                </Link>
            </div>
            {/*
            TEMP: PREVIOUSLY USED FOR THE HOME PAGE
            <div className='parallax2'>
                <div className='parallax-layers2 image1'></div>
                <div className='parallax-layers2 image2'></div>
                <div className='parallax-layers2 image3'></div>
                <h3 className='message'>Find recipes!</h3>
            </div>*/}
            <div className='home-container'>
                <h3>Learning</h3>
                <p>Expand your culinary knowledge by learning something new!</p>
                <Link to='/learn'>
                    <button className='section-button'>
                        E-Learning
                    </button>
                </Link>
            </div>
            {/*
            TEMP: PREVIOUSLY USED FOR THE HOME PAGE
            <div className='parallax3'>
                <div className='parallax-layers2 text1'></div>
                <div className='parallax-layers2 text2'></div>
                <div className='parallax-layers2 text3'></div>
                <h3 className='message'>Learn and connect with others!</h3>
            </div>*/}
            <div className='home-container'>
                <h3>Community</h3>
                <p>Connect with others, comment and share your thoughts and ideas!</p>
                <Link to='/community'>
                    <button className='section-button'>
                        Community
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home