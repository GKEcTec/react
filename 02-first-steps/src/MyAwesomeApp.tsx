import type { CSSProperties } from 'react';
const firstName = 'Héctor';
    const lastName = 'Alarcón';

    const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
    const isActive = false;

    const address = {
        zipCode: 'ABC-123',
        country: 'Canadá'
    }
    const myStyles: CSSProperties = {
        backgroundColor:'orange',
        borderRadius: isActive ? 10 : 20,
        padding: 10,
        marginTop: 70,
    };
export const MyAwesomeApp = () => {
                
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>
            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p style={myStyles}>
                {JSON.stringify(address)}
            </p>
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