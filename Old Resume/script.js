const generateQuote = function() {
    const quotes = [
        {
            quote: "People in glasshouses should get undressed in the dark!"
        },
        {
            quote: "A bird in hand makes mess on your wrist"
        },
        {
            quote: "If a language is being used in a compiler to compile, which language is used to compile the compiler? "
        },
        {
            quote: "Gone are the days for real passion for life, everything revolves around few immature feelings - Ego, Lust and Greed!"
        },
        {
            quote: "Dare to be different, unlike the sheep, the wolf stands out in the field!"
        },
        {
            quote: "Without the knowledge of all around, practicality makes no sense!"
        },
        {
            quote: "Life has crafted genders with their roles and duties, one must compliment each other, not compete!"
        },
        {
            quote: "There is no room for honesty, it's a room of snakes, alas we await your arrival!"
        },
        {
            quote: "The World. The Code. The Spark!"
        }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}