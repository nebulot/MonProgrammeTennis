// 4 create DOM player CARD


    /*
     * @constructor
     * @param {Object} recipe
     * @param {number} recipe.id
     * @param {string} recipe.name
     * @param {number} recipe.servings
     * @param {number} recipe.time
     * @param {string} recipe.description
     * @param {string} recipe.appliance
     * @param {Array.<string>} recipe.ustensils
     * @param {Array.<Object>} recipe.ingredients
     */



class PlayerCard {
    constructor(data) {
        this.id = data.id;
        this.lastName = data.lastName;
        this.firstName = data.firstName;
        this.level = data.level;
        this.birthdate = data.birthdate;
        this.height = data.height;
        this.weight = data.weight;
        this.picture = data.picture;
        this.gender = data.gender;
    }

    /**
     * Create player card with create DOM functiion
     * @returns HTMLElement - Player Card
     */

    //5 put the ingredients and quantity on the recipeCard (recipeContainer)
  //create li to put ingredients[array].ingredients.ingredients

  get ingredientsList() {
    
    let ingredientsList = "";
    this._ingredients.forEach((ingredient) => {
      if (ingredient.quantity) {
        if (ingredient.unit && ingredient.quantity) {
        ingredientsList += `
      <li class = "recipe-ingredients"> <strong>${ingredient.ingredient}</strong> : ${
          ingredient.quantity ?? ""
        } ${ingredient.unit ?? ""} </li>`;
      } else {
      ingredientsList += `
      <li class= "recipe-ingredients"><strong>${ingredient.ingredient}</strong> :  ${
        ingredient.quantity}
       </li>`;
    }
      } else {
        ingredientsList += `
      <li class= "recipe-ingredients"><strong>${ingredient.ingredient}</strong></li>`;
      }
     });
    return ingredientsList;
  }

  // when description is too long, remove by "&hellip;" => ...
  get shortDescription() {
    const limit = 200;
    if (this._description.length <= limit) return this._description;
    let description = this._description.substr(0, limit - 1);
    return description.substr(0, description.lastIndexOf(" ")) + " &hellip;";
  }

  //5 create display card
  make() {
    const card = document.createElement("div");
    card.className = "receipe col-12 col-md-6 col-lg-4";
    card.innerHTML = `
    <div class="card rounded border-0">
    <div class="card-header bg-grey"></div>
	    <div class="card-body bg-light">
	    <div class="title-time">
		 <h5 class="card-title m-0 font-weight-light">
		   ${this._name}
		 </h5>
		 <div class="recipe_time">
		 <i class="far fa-clock"></i>
		 <h5 class="time">${this._time}min</h5>
	   </div>
	 </div>
	 <div class="ingredients-directions row">
	   <ul class="ingredient-list list-group list-unstyled bg-light">
     ${this.ingredientsList}
	   </ul>
	   <p class="card-text">
	   ${this.shortDescription}
	   </p>
	 </div>
   </div>
   </div>`;
   return card
   
    
  }


}