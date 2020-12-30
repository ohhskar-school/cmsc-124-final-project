const animal = {
    alive: true
}

const bird = {
    fly: true,
    __proto__: animal
}

console.log(bird.alive) // Console: true
