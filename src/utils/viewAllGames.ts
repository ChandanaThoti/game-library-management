import { Game } from "../types/gameType";


type GameField = keyof Game;

export  function viewAllGames(
    Games: Game[],
    fieldsToShow: GameField[] = ["id", "name","genre", "price", "platform", "rating"]
): void {
    if (Games.length === 0) {
        console.log("No Games found.");
        return;
    }
    // Print headers
    const headers = {
        id: "ID",
        name: "name",
        genre:"genre",
        price: "Price",
        platform: "platform",
        rating: "Rating",
    };

    const headerLine = fieldsToShow.map(field =>
        headers[field].padEnd(field === "name" ? 50 : 12)
    ).join("");

    console.log(headerLine);
    console.log('-'.repeat(headerLine.length));

    // Print rows
    Games.forEach(Game => {
        const row = fieldsToShow.map(field => {
            const value = Game[field];
            if (field === "price" && typeof value === "number") {
                return `$${value.toFixed(2)}`.padEnd(12);
            } else if (field === "rating" && typeof value === "number") {
                return value.toFixed(1).padEnd(12);
            } else {
                return String(value).padEnd(field === "name" ? 50 : 12);
            }
        }).join("");

        console.log(row);
    });

    console.log('');
}
