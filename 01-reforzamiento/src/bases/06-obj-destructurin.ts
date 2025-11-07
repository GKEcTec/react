const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};

const { key, name: ironmanName, age: ageIron } = person;

console.log({ironmanName, key, ageIron});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({key, name, age, rank = 'sin rango'}: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank
    }
}

const {keyName, rank, user: {name, age}} = useContext(person)
console.log({keyName, rank, name });
