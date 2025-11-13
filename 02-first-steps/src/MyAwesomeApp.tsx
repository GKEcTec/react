export const MyAwesomeApp = () => {

    const firstName = 'Héctor';
    const lastName = 'Alarcón';

    const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];

    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>
        </>
    )
}

// export function MyAwesomeApp() {
//     return (
//         <>
//             <h1>Héctor</h1>
//             <h3>Alarcón</h3>
//         </>
//     )
// }