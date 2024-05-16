function wordFrequencyChecker(text) {
    let words = text.split(" ");
    let frequency = {};
    words.forEach(word => {
        frequency[word] ? frequency[word]++ : frequency[word] = 1
    });
    let frequentWords = {};
    for (let word in frequency) {
        if (frequency[word] > 2) {
            frequentWords[word] = frequency[word];
        }
    }
    console.log("Word Count:", frequency);
    console.log("Frequent Words:", frequentWords);
}

const text = "apple banana apple orange banana apple orange apple";
wordFrequencyChecker(text);
