function identifyStrings(listofWords, text) {
    let words = text.split(' ');
    let resultArray = [];

    for (let i = 0; i < words.length; i++) {
        if (listofWords.includes(words[i].toLowerCase())) {
            if (i > 0 && i < words.length - 1) {
                if ((words[i - 2].length > 3 && words[i - 1].length > 3) && (words[i + 1].length > 3 && words[i + 2].length > 3)) {
                    resultArray.push(words[i - 2] + ' ' + words[i - 1] + ' ' + words[i] + ' ' + words[i + 1] + ' ' + words[i + 2]);
                }
            }
        }
    }

    return resultArray;
}

let list = ["baking", "chocolate"];
let text = "Baking: The warm aroma of freshly baked cookies filled the kitchen, enticing everyone to gather for a sweet treat. Sunlight streamed through the window, casting a golden glow on the recipe book where she'd meticulously planned her next baking adventure. Don't forget the chocolate chips!\" he reminded her, his eyes sparkling with anticipation. With practiced ease, she measured flour, sugar, and butter, the ingredients for countless delicious memories. Baking Laughter filled the air as they cracked eggs, a messy but joyous tradition in their baking routine. The oven hummed to life, a promise of golden brown perfection waiting within. Meanwhile, they prepped the frosting, very rich chocolate concoction that would be the crowning glory of their creation. They worked side-by-side, a well-oiled team united by their love of baking and spending time together. Finally, after what seemed like forever, the timer buzzed, announcing the arrival of their masterpiece. As they savored the warm, chocolatey cookies, they knew they weren't just enjoying a treat, but a moment of pure happiness.";

console.log(identifyStrings(list, text));
