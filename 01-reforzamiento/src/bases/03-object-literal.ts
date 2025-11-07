interface Person {
    firtsName: string;
    lastName: string;
    age: number;
    adress: Adress;
}
interface Adress {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firtsName: 'Tony',
    lastName: 'Stark',
    age: 45,
    adress: {
        postalCode: 'Z170774',
        city: 'Quito'
    } 
}
console.log(ironman);

// const spiderman: Person = {
//     firtsName: "Peter",
//     lastName: "Parker",
//     age: 20,
// }

// console.log(spiderman);
// const spiderman = {...ironman};
// const spiderman = structuredClone(ironman);

// ironman.fisrtName = 'Peter';
// ironman.lastName = 'Parker';
// ironman.age = 22;
// ironman.address.city = 'Sna José';

// console.log(ironman, spiderman)