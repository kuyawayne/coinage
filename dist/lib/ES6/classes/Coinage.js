export class Coinage {
    static breakdown(money) {
        if (typeof money === "string") {
            return money;
        }
        return {
            thousands: Math.floor(money / 1000),
            hundreds: Math.floor((money % 1000) / 100),
            tens: Math.floor((money % 100) / 10),
            ones: Math.floor((money % 10) / 1),
            cents: Math.floor((money * 100) % 100)
        };
    }
}
