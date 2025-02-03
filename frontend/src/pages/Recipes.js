import { useEffect, useState } from "react"

// COMPONENTS
import RecipeDetails from "../components/recipeDetails"
import AddRecipe from "../components/addRecipe"

// NOTE: COMPONENT TO DISPLAY THE RECIPES PAGE
const Recipes = () => {
    // NOTE: STATE VARIABLES
    const [recipes, setRecipes] = useState(null)

    // NOTE: FETCHING THE RECIPES FROM THE SERVER
    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('/recipes')
            const json = await response.json()

            if (response.ok) {
                setRecipes(json)
                setFilteredRecipes(json)
            }
        }

        fetchRecipes()
    }, [])

    // NOTE: MORE STATE VARIABLES
    const [searchPrompt, setSearchPrompt] = useState('')
    const [filteredRecipes, setFilteredRecipes] = useState(recipes)

    // NOTE: HANDLING THE INPUT CHANGE
    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchPrompt(searchTerm)
    }

    // NOTE: FILTERING THE RECIPES BASED ON THE SEARCH PROMPT
    const FilterSearchPrompt = (e) => {
        e.preventDefault()
        const filteredItems = recipes.filter((recipe) => 
            recipe.title.toLowerCase().includes(searchPrompt.toLowerCase())
        )
    
        setFilteredRecipes(filteredItems);
    }

    return (
        <div className="recipe-container">
            <form className="search" onSubmit={FilterSearchPrompt}>
                <input 
                    id = "search-field"
                    type='text'
                    value={searchPrompt}
                    onChange={handleInputChange}
                    placeholder="Enter a dish name to search..."
                />
                <button className="search-button" type='button' onClick={FilterSearchPrompt}>Search</button>
            </form>
            <div className="recipes-page">
                <div className='recipes'>
                    {filteredRecipes 
                        ? filteredRecipes.map((recipe) => ( <RecipeDetails key={recipe._id} recipe={recipe}/>))
                        : <p>No recipes found</p>
                    }
                </div>
                <AddRecipe />
            </div>
        </div>
    )
}

export default Recipes