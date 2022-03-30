
function Make1(count) {
        letter = "0123456789";
        let randomString = "";
        for (let i = 0; i < count; i++) {
            const randomStringNumber = Math.floor(1 + Math.random() * (letter.length - 1));
            randomString += letter.substring(randomStringNumber, randomStringNumber + 1);
        }
        return randomString;
    }
console.log(Make1(11));


function Make(count) {
    letter = "0123456789";
    let randomString = "";
    for (let i = 0; i < count; i++) {
        const random = Math.floor(1 + Math.random()  *(letter.length));
        randomString += letter.substring(random, random -1);
    }
    return randomString;
}

console.log(Make(10));
