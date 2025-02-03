import { Link } from 'react-router-dom';

// NOTE: COMPONENT TO DISPLAY THE RECIPE DETAILS
// USING THE PASSED IN "recipe" PROP
const recipeDetails = ({ recipe }) => {
    let ingredients = recipe.ingredients;

    return (
        <div className='recipe-details'>
            <h4>{recipe.title}</h4>
            <p><b>Time:</b> {recipe.prepTime}, {recipe.cookingTime}</p>
            <p><b>Difficulty:</b> {recipe.difficulty}</p>
            <p><b>Ingredients:</b></p>
            <div className="ingredient-display">
                {ingredients.map((ingredient) => (
                    <p key={ingredient.id} className="single-ingredient">{ingredient}</p>
                ))}
            </div>
            <Link to={recipe._id}>More</Link>
        </div>
    )
}
// TEMP: PREVIOUSLY USED FOR THE RECIPE DETAILS PAGE
//<p><b>Preparation:</b> {recipe.prepInstruction}</p>
//<p><b>Instructions:</b> {recipe.cookInstructions}</p>
//<p>{recipe.createdAt}</p>

export default recipeDetails