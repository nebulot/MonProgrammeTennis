import Api from "../api/Api.js";
import Player from "../models/Player.js";
import PlayerCard from "../templates/playersCards.js";

const playersSection = document.querySelector(".main_players");
const playersApi = new Api("./data/players.json");

const displayPlayers = async () => {
    const playersData = await playersApi.get();
    const players = playersData.players;

    players
        .map(player => new Player(player))
        .forEach(player => {
            const template = new PlayerCard(player);
            const playerCard = template.createPlayerCard();
            playersSection.appendChild(playerCard);
        });
};

displayPlayers();