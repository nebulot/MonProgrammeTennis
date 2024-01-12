export default class PlayersCard {
    constructor(player){
        this.player = player;
    }

    createPhotographerCard() {
        const article = document.createElement( 'article' );
        const playerCard = `
            <a href="photographer.html?id=${this.player.id}" role="link" aria-label="Voir le profil de ${this.player.name}">
                <img class="photographer_thumbnail" src="./assets/images/photographers/thumbnails/${this.player.portrait}" alt="${this.player.name}">
                <h2 class="photographer_name">${this.player.name}</h2>
            </a>
            <p class="photographer_location">${this.player.city}, ${this.player.country}</p>
            <p class="photographer_tagline">${this.player.tagline}</p>
            <span class="photographer_price">${this.player.price}€/jour</span>
        `;
        article.innerHTML = playerCard;
        return article;
    }
}