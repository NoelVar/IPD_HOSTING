import { useState } from "react"

const AddRecipe = () => {
    // NOTE: STATE VARIABLES
    const [title, setTitle] = useState('')
    const [prepTime, setPrepTime] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [serving, setServing] = useState('')
    const [cusine, setCusine] = useState('')
    const [prepInstruction, setPrepInst] = useState('')
    const [cookInstructions, setCookInst] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [splitText, setSplitText] = useState('')
    const [error, setError] = useState(null)

    // NOTE: FUNCTION TO SEPARATE THE ENTERED INGREDIENTS
    const separateIngredients = async (e) => {
        setSplitText(e)
        setIngredients(splitText.split(" "))
    }

    // NOTE: FUNCTION TO HANDLE THE SUBMITION
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        // NOTE: CREATING THE RECIPE OBJECT WITH THE USER INPUT
        const recipe = {title, prepTime, cookingTime, difficulty, serving, cusine, prepInstruction, cookInstructions, ingredients}
        
        // NOTE: SENDING THE RECIPE TO THE SERVER
        const response = await fetch('/recipes', {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        // NOTE: HANDLING THE ERROR
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setPrepTime('')
            setCookingTime('')
            setDifficulty('')
            setServing('')
            setCusine('')
            setPrepInst('')
            setCookInst('')
            setIngredients([])
            setError(null)
            console.log('New workout added', json)
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new recipe</h3>
            <label>Recipe Title:</label>
            <input 
                type="text"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
            />

            <label>Preparation Time:</label>
            <input 
                type="text"
                onChange={(event) => setPrepTime(event.target.value)}
                value={prepTime}
            />

            <label>Cooking Time:</label>
            <input 
                type="text"
                onChange={(event) => setCookingTime(event.target.value)}
                value={cookingTime}
            />

            <label>Difficulty:</label>
            <input 
                type="text"
                onChange={(event) => setDifficulty(event.target.value)}
                value={difficulty}
            />

            <label>Serving Size:</label>
            <input 
                type="number"
                onChange={(event) => setServing(event.target.value)}
                value={serving}
            />

            <label>Cusines Origin:</label>
            <input 
                type="text"
                onChange={(event) => setCusine(event.target.value)}
                value={cusine}
            />

            <label>Preparation Instructions:</label>
            <input 
                type="text"
                onChange={(event) => setPrepInst(event.target.value)}
                value={prepInstruction}
            />

            <label>Cooking Instructions:</label>
            <input 
                type="text"
                onChange={(event) => setCookInst(event.target.value)}
                value={cookInstructions}
            />
            <label>Ingredients:</label>
            <input 
                type="text"
                onChange={(event) => separateIngredients(event.target.value)}
            />
            <button>Add Recipe</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default AddRecipe