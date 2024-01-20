// 6 paragraphs
const text = [
    "I'm baby sartorial you probably haven't heard of them art party snackwave hoodie, af lumbersexual mlkshk. Celiac organic gorpcore pug whatever. Sriracha gastropub humblebrag paleo letterpress, normcore yr edison bulb retro fit godard. Meh meggings succulents, live-edge polaroid vexillologist pinterest blue bottle messenger bag shaman paleo green juice blog helvetica. Lyft cardigan forage helvetica pinterest, vape tilde sustainable vice. Slow-carb ascot jianbing meggings."
    ,
    "Fashion axe pitchfork retro umami ethical street art. Trust fund chambray pug, selfies hella pour-over crucifix lyft food truck deep v. Yuccie pop-up kogi small batch affogato locavore meggings air plant portland leggings four dollar toast bicycle rights. Taxidermy chillwave food truck synth fashion axe messenger bag DIY wayfarers tacos bicycle rights everyday carry.",
    "Cold-pressed shoreditch organic, ethical glossier pickled meditation hoodie drinking vinegar jawn cray gluten-free. Hexagon food truck swag palo santo franzen. Chia messenger bag hella poke, palo santo lo-fi kale chips intelligentsia. Truffaut jean shorts beard etsy. Copper mug offal raw denim vinyl ennui gatekeep.",
    "Franzen vaporware jawn small batch squid activated charcoal brunch four loko kogi church-key grailed DIY organic pour-over selfies. Lyft freegan twee +1 shaman. Forage readymade vegan, kinfolk bushwick banjo echo park you probably haven't heard of them af hoodie shoreditch. Ramps pork belly aesthetic before they sold out locavore jean shorts, lo-fi cray freegan umami shabby chic praxis tumblr hammock venmo.",
    "Bicycle rights lo-fi bodega boys twee glossier, jawn gatekeep tattooed ethical intelligentsia flexitarian thundercats activated charcoal crucifix ennui. Selvage pug jianbing blog hammock chillwave etsy typewriter humblebrag. Pour-over adaptogen thundercats meggings. Edison bulb DIY marfa jean shorts cray adaptogen keffiyeh thundercats yuccie pug poke neutral milk hotel messenger bag. Mixtape heirloom health goth four dollar toast dreamcatcher salvia.",
    "Dummy text? More like dummy thicc text, amirite?"
]

const input = document.querySelector('.input');
const button = document.getElementById('generate');
const article = document.querySelector('.paragraph');

let result = [];
function generateRandomParagraph(num) {

    for (let j = 0; j < num; j++) {
        let newPar = [];
        let wordCount = 0;

        while (wordCount < 50) {
            for (let i = 0; i < text.length; i++) {
                const randomWordIndex = Math.floor(Math.random() * text[i].split(' ').length);
                const randomWord = text[i].split(' ')[randomWordIndex];

                if (newPar.length === 0) {
                    newPar.push(randomWord.charAt(0).toUpperCase() + randomWord.slice(1));
                } else {
                    newPar.push(randomWord);
                }

                wordCount += randomWord.split(/\s+/).length;

            }
        }
        // Ensure the paragraph ends with ".", "!", or "?"
        const punctuation = ['.', '!', '?'];
        const randomPunctuation = punctuation[Math.floor(Math.random() * punctuation.length)];
        newPar[newPar.length - 1] += randomPunctuation;

        newPar.push('<br><br>')
        result.push(newPar.join(" "))
    }
    return result.join(" ");
}

button.addEventListener('click', function () {
    const inputValue = parseInt(input.value, 10)
    const final = generateRandomParagraph(inputValue);
    article.innerHTML = final;
})