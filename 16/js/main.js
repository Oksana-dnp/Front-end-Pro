"use strict"


let user = {
    phone: '+380506019668',
    primaryPhone: true
}


function checkPhone() {
    for (var key in user) {
        if (user[key] === 'false') Object.freeze(user)
    }
    console.log(Object.getOwnPropertyDescriptor(user))
}

checkPhone(user);
