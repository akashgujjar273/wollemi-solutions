function findDuplicates(arr) {
    if(!Array.isArray(arr)){
        return
    }
    let duplicateValues = {};
    arr.forEach(function(item) {
        duplicateValues[item] ? duplicateValues[item]++ : duplicateValues[item] = 1
        // if (duplicateValues[item]) {
        //     duplicateValues[item]++
        // } else {
        //     duplicateValues[item] = 1
        // }
    });

    for (let item in duplicateValues) {
        if (duplicateValues[item] > 1) {
            console.log(item);
        }
    }
}

findDuplicates([1, 2, 3, 4, 2, 3,3,3]);