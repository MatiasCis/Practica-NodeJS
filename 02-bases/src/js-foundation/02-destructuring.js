

// console.log( process.env )


const { SHELL, USERNAME } = process.env
// console.table({SHELL, USERNAME})

const characters = ['Flash', 'Superman', 'Green Lantern','Batman'];

const[ , , , batman] = characters;

// console.log(batman)