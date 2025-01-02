
const {emailTemplate} = require('./js-foundation/01-template');



// require('./js-foundation/02-destructuring');
const {getUserById} = require('./js-foundation/03-callbacks');


// console.log(emailTemplate)
const id = 1;

getUserById(id, function(error, user){
    if ( error ){
        throw new Error(error, id);
    }
    // getUserById(2, function(error, user2){
    //     if ( error ){
    //         throw new Error(error, id);
    //     }
    //     console.log({user, user2});
    // });
    console.log({user});
});