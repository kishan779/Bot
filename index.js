// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const simpleGit = require('simple-git');
// const random = require('random');
// const FILE_PATH = './data.json';

// const makeCommit = n =>{
//     if (n===0) return simpleGit().push();
//     // const x = random.int(0,54);
//     // const y = random.int(0,6);
//     // Generate a random integer between 0 and 54
//     // for weeks
//     const x = Math.floor(Math.random() * (54 + 1));

//     // for days
//     // Generate a random integer between 0 and 6
//     const y = Math.floor(Math.random() * (6 + 1));

//     const DATE = moment().subtract(1,'y').add(1,'d')
//                     .add(x,'w').add(y,'d').format();
//     const data = {
//         date : DATE
//     }

//     console.log(DATE);
//     jsonfile.writeFile(FILE_PATH, data, ()=>{
//         simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE },
//         makeCommit.bind(this, --n));
//     });
// }
// makeCommit(10);

// ==============================================================
// All Year Program :-
// For 2023 and 2024
// For 2023
// For Year 2022 and 2021


const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');
const FILE_PATH = './data.json';

const makeCommit = n =>{
    if (n===0) return simpleGit().push();

// Set the year to 2023
const year = 2023;

    //  // Randomly select between 2023 and 2024
    //  const year = Math.random() < 0.5 ? 2023 : 2024;


// // Generate a random integer between 0 and 1 to decide the year (0 for 2021, 1 for 2022)
// const year = Math.floor(Math.random() * 2) + 2021;

// Generate a random integer between 0 and 54 for weeks
const x = Math.floor(Math.random() * (54 + 1));

// Generate a random integer between 0 and 6 for days
const y = Math.floor(Math.random() * (6 + 1));

// Create a date in the specified year and add random weeks and days
const DATE = moment().year(year).month(0).date(1) // Start from January 1st of the selected year
                .add(x, 'w').add(y, 'd').format();
    const data = {
        date : DATE
    }

    console.log(DATE);
    jsonfile.writeFile(FILE_PATH, data, ()=>{
        simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE },
        makeCommit.bind(this, --n));
    });
}
makeCommit(100);


