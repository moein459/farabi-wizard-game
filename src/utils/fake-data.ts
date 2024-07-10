export interface SymbolData {
    symbol: string;
    timestamp: string;
    price: number;
}

export function generateFakeData(symbol: string) {
    // Initial price of the symbol
    let price = 100.00;
    
    // Function to generate a random number within a range
    function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    // Function to simulate the change in price
    function updatePrice() {
        // Simulate a small change in price
        let change = randomInRange(-1, 1);
        price += change;
        price = Math.round(price * 100) / 100; // Round to two decimal places
        return price;
    }

    // Function to generate a data point
    function generateDataPoint(): SymbolData {
        let timestamp = new Date().toISOString();
        let currentPrice = updatePrice();
        return {
            symbol: symbol,
            price: currentPrice,
            timestamp: timestamp
        };
    }

    return {
        generate: generateDataPoint
    };
}
