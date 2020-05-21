import React from 'react';

const RecipesPage = () => {

    const ingredients = {
        'Nonstick vegetable oil spray': null,
        'all-purpose (AP) flour': '1 cup',
        'whole wheat flour': '3/4 cup',
        'baking soda':'1 1/4 teaspoons',
        'baking powder': '1 teaspoon',
        'kosher salt':'3/4 teaspoon',
        'moreno sugar': '3/4 cup',
        'Follow Your Heart dairy-free yogurt':'1/3 cup',
        'coconut oil':'1/4 cup',
        'Aquafaba':'1/2 cup',
        'ripe bananas':'1 1/2 cup',
        'bittersweet or semisweet chocolate (optional)': '1/2 cup',
        'chopped walnuts':'1/2 cup'
    }

    return (
        <section className="container">
            <h1 className="h3">Recipes</h1>
            <p>As a vegan athlete, I have decided to share all of my favorite vegan recipes! Most are links to my favorites and some are my own that you will only find here.
You will find vegan and some vegetarian meals here. Some healthy, some light, others protein-packed, and also some delicasees that anyone would love to occasionally enjoy.</p>
            <row>
                <div className="col-sm-4">Vegan Banana Bread</div>
                <div className="col-sm-5">Vegan Fried Rice with Tempeh and "Just Egg"</div>
                <div className="col-sm-4">Vegan Pupusas</div>
            </row>
        </section>
    )

}

export default RecipesPage