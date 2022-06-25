import axios from "axios"

const allRecipes = async (state) => {
    const request = await axios.get('http://localhost:3001/recipes/')
    state(request.data)
}

const singleRecipe = async (id, state) => {
    const request = await axios.get(`http://localhost:3001/recipes/${id}`)
    state(request.data)
}

const specialsIngredients = async (state) => {
    const request = await axios.get(`http://localhost:3001/specials`)
    state(request.data)
}

export {
    allRecipes, singleRecipe, specialsIngredients
}