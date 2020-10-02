class Potion {
    constructor(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 35);
    } else {
        this.value = Math.floor(Math.random() * 5 + 6);
    }
}
}
module.exports = Potion;