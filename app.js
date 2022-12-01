function rainAmount(mm) {
    if (mm < 40) {
        return "You need to give your plant " + (40 - mm) + "mm of water";
    } else {
        return "Your plant has had more than enough water for today!"
    };
}

console.log(rainAmount(100)); // "Your plant has had more than enough water for today!"
console.log(rainAmount(39)); // "You need to give your plant 1mm of water"