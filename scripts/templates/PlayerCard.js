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

    get playerCard() {
        const card = createDom(
            "article",
            { class: "recipe__card" },
            createDom("div", { class: "recipe__card__placeholder" }),
            createDom(
                "section",
                { class: "recipe__card__section" },
                createDom(
                    "header",
                    { class: "recipe__card__header" },
                    createDom("h2", `${this.lastName}`, { class: "recipe__card__header__title" }),
                    createDom(
                        "h2",
                        `${this.id}min `, { class: "recipe__card__header__time" },
                        createDom("i", { class: "fal fa-clock recipe__card__header__icon" })
                    )
                ),
                createDom(
                    "aside",
                    { class: "recipe__card__aside" },
                    createDom(
                        "ul",
                        { class: "recipe__card__list" },
                        // ... pour transformer les éléments du tableau en paramètres pour createDom
                        //     .map() pour renvoyer un tableau car .forEach() renvoie undefined
                        ...this.lastName.map((lastName) => {
                            // return pour renvoyer une valeur sinon .map() renvoie un tableau de undefined
                            return createDom(
                                "li",
                                createDom("strong", `${lastName.lastName} `),
                                //ingredient.quantity ? `: ${ingredient.quantity} ` : "",
                                //ingredient.unit ? `${ingredient.unit} ` : "",
                                {
                                    class: "recipe__card__list__item",
                                }
                            );
                        })
                    ),
                    createDom("p", `${this.lastName}`, { class: "recipe__card__description" })
                )
            )
        );
        return card;
    }
}
