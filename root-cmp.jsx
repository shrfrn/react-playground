export function App() {
    const user = { fullName: 'Duki', age: 50 }
    return (
        <div>
            <header>
                <h1>Lets Play {user.fullName}</h1>
            </header>
            
            <main>
                <Welcome />
                <Welcome />
            </main>
        </div>
    )
}

function Welcome() {
    return <div>
        <h1>Hello there! </h1>
    </div>
}