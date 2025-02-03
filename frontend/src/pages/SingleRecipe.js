import { useState, useEffect } from "react"

// NOTE: COMPONENT TO DISPLAY THE SINGLE RECIPE PAGE
const SingleRecipe = () => {
    // NOTE: STATE VARIABLES
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        // NOTE: FETCHING THE RECIPE FROM THE SERVER
        const fetchRecipe = async () => {
            const response = await fetch('/recipes')
            const json = await response.json()
            const params = window.location.href
    
            // NOTE: LOOPING THROUGH THE RECIPES TO FIND THE ONE THAT THE USER SELECTED
            for (let i = 0; i < json.length; i++) {
                if (json[i]._id === params.split('/').reverse()[0]) {
                        setRecipe(json[i]) 
                }
            }
        }
    
        fetchRecipe()
        }, [])

    return (
        <div className='single-recipe'>
            {recipe
                ? 
                <div>
                    <h4>{recipe.title}</h4>
                    <p><b>Time:</b> {recipe.prepTime}, {recipe.cookingTime}</p>
                    <p><b>Difficulty:</b> {recipe.difficulty}</p>
                    <p><b>Ingredients:</b> 
                        {recipe.ingredients.map((ingredient) => (
                            ingredient + ", "
                        ))}
                    </p>
                    <p><b>Serving Size:</b> {recipe.serving}</p>
                    <p><b>Preparation:</b> {recipe.prepInstruction}</p>
                    <p><b>Cooking:</b> {recipe.cookInstructions}</p>
                </div>
                :
                <p>No recipe found</p>
            }
        </div>
    )
}

export default SingleRecipe