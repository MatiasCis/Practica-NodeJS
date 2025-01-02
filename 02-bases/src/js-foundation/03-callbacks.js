


const users = [
   { id: 1,
    name: 'Jhon doe'
    },
   { id: 2,
    name: 'Jane doe'
    },
];


function getUserById( id, callback ) {
    const user = users.find( function(user){
        return user.id === id;
    })

    if( !user ){
        return callback(`User with id ${id} not found`);
    }
    return callback(null, user);
}

module.exports = {
    getUserById,
};