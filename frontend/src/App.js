import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES & COMPONENTS
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Recipes from './pages/Recipes';
import Learn from './pages/Learn';
import ForumGroups from './pages/ForumGroups'
import SingleLearn from './pages/SingleLearn';
import SingleForum from './pages/SingleForum';
import SinglePost from './pages/SinglePost';
import SingleRecipe from './pages/SingleRecipe';
import Page404 from './pages/Page404';
function App() {
  // NOTE: ADDING THE ROUTES TO THE APP
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
            <Route 
              path='/recipes'
              element={<Recipes />}
            />
            <Route 
              path='/recipes/:id'
              element={<SingleRecipe />}
            />
            <Route 
              path='/learn'
              element={<Learn />}
            />
            <Route 
              path='/learn/:id'
              element={<SingleLearn />}
            />
            <Route 
              path='/community'
              element={<ForumGroups />}
            />
            <Route 
              path='/community/:id'
              element={<SingleForum />}
            />
             <Route 
              path='/community/:id/:id'
              element={<SinglePost />}
            />
            <Route 
              path='/*'
              element={<Page404 />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
