import React, {useState} from 'react'
import Recipe from './comp/Recipe';
function App() {
    const YOUR_APP_ID = "10cc720c";
    const YOUR_APP_KEY = "37ef30a7b6cebe4f34f509fee94b1ac9";
    const [recipes, setRecipes] = useState([]);

    async function getReq(e) {
        e.preventDefault();
        const response = await fetch(`https://api.edamam.com/search?q=${document.querySelector("input").value}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`)
        const data = await response.json()
        setRecipes(data.hits);
    }
    const allRecipeData =recipes.map(obj => <Recipe title={obj.recipe.label} image={obj.recipe.image} />)
    return (
        <div id="App">
            <form>
                <div>
                    <input type="text" name="search" id="search" placeholder="Search..."/>
                    <button onClick={getReq}><i class="fas fa-search"></i></button>
                </div>
            </form>
            <main>
                <div className="box">
                    <div className="results">

                    </div>
                    
                </div>
            </main>
        </div>
    )
}

export default App
