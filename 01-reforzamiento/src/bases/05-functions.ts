function greet (name: string):string{
    return `Hola ${name}`
}

const greet2 = (name: string) => `Hola ${name}`;


const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);

interface User {
    uid: string,
    username: string,
}

function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'El_Papi23',
    }
}

const getUser2 = () =>  ({
        uid: 'ABC-123',
        username: 'El_Papi23',
    });


const user = getUser()
const user2 = getUser2()
console.log(user, user2);

const myNumbres: number[] = [1, 2, 3, 4, 5];

// myNumbres.forEach(function(value){
//     console.log({value});
// });

// myNumbres.forEach((value) => {
//     console.log({value})
// });

// myNumbres.forEach(console.log);

myNumbres.forEach((value, index, arr) => {
    console.log(value)
});