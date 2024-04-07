const elRoot = document.getElementById('root')
const root = ReactDOM.createRoot(elRoot)

// :React RAW API compared to JSX

// const elBox = React.createElement('div',
//     { className: 'container', children: 'Hello React!!!' })
// // const elBox = <div className="container">Hello React!!!</div>

// root.render(elBox)
// console.log('elBox:', elBox)

// :Some more JSX

// Example I

// const names = <ol>
//     <li>Puki</li>
//     <li>Muki</li>
// </ol>

// console.log('names:', names)
// root.render(names)

// Example II

// const myLink = <a href="http://example.com" >
//     <p className="special">Click me please</p>
// </a>

// console.log('myLink:', myLink)
// root.render(myLink)

// :JSX Must have one parent element

// This is valid
// const fruits = <ul>
//     <li>Apple</li>
//     <li>Orange</li>
// </ul>

// TODO: add a heading

// root.render(
//     fruits
// )

// :Hello Declarative Rendering - 
// :Embedding JS expressions inside JSX (Interpolation)

// const fullName = 'Puki Ma'
// const greeting = <h1>Hello {fullName}</h1>

// root.render(
    //     greeting
    // )
    
// const sum = 2 + 1
// const firstName = 'Jonni'
// const container = <section>
//     <p>
//         {sum} ~ {Math.PI.toFixed(5)}
//     </p>
//     <p>
//         {firstName + ' - ' + new Date().toDateString()}
//         {console.log('render')}
//     </p>
// </section>


// root.render(
//     container
// )

// :Dynamic Attributes! (data binding)

// const isDark = false
// const dynClass = isDark ? 'dark' : 'light'

// const imgName = (Math.random() > 0.5) ? 'dog' : 'cat'
// const dynSrc = `./assets/img/${imgName}.jpg`

// const HelloWorld =
//     <div>
//         <h2 className={dynClass}>Some Header</h2>
//         <img src={dynSrc} alt="" />
//     </div>

// root.render(HelloWorld)

// :Conditional Rendering

// Option 1 -> just using ifs.

// const isDark = true
// let button
// if (isDark) {
//     button = <button>
//         Go Light
//     </button>
// } else {
//     button = <button>
//         Go Dark
//     </button>
// }

// root.render(button)

// Option 2 - The Ternary Operator (short if)

// var age = 25
// const msg =
//     <h1>
//         {(age >= 18) ? <span>Old enough {Math.PI}</span> : <span> {'Too young - ' + age}</span>}
//     </h1>

// root.render(msg)

// Option 3 - Short Circuit - using &&

// const age = 6
// const isAdult = true

// const tasty =
//     <ul>
//         <li>Chips</li>
//         <li>Pizza</li>
//         <li>Eggplant</li>
//         <li>Grappa</li>
//     </ul>

// root.render(tasty)

// :Loops and Arrays

// const names = ['Muki', 'Puki', 'Duki', 'Ruki', 'Muki'];

// root.render(
//     <p>{names}</p>
// )

// root.render(
//     <p>{names.join(' ')}</p>
// )

// const names = ['Muki', 'Puki', 'Duki', 'Ruki', 'Muki'];

// root.render(
//     <ul>
//         {
//             names.map((name, idx) => <li key={name + idx}>{name}</li>)
//         }
//     </ul>
// )

// const users = [{ id: 'u101', fullName: 'Muki Ja' }, { id: 'u102', fullName: 'Puki Ma' }]

// root.render(
//     <ul>
//         {
//             users.map(user => <li key={user.id}>{user.fullName}</li>)
//         }
//     </ul>
// )

// :Event Handling

// function handleClick(...args) {
//     console.log('args:', args)
// }

// const SomeButton = <button onClick={handleClick}>
//     Click Me!
// </button>

// root.render(
//     SomeButton
// )

// Passing arguments

// function handleClick(ev, msg) {
//     console.log('ev:', ev)
//     console.log('msg', msg)
// }

// const SomeButton = <button onClick={ev => handleClick(ev, 'Hi')}>
//     Click Me!
// </button>

// root.render(
//     SomeButton
// )

// :React Components - function that returns JSX

// function SomeFuncCmp() {
//     return <h1>Hello React Component</h1>
// }

// const section = <section className="container">
//     <SomeFuncCmp />
// </section>

// root.render(
//     section
// )

// :React App Structure

// In a real React App we will only have this code ONCE
// our entire app will be rendered inside 
// a single root component, usally called App

// import { App } from './root-cmp.jsx'
// const elRoot = document.getElementById('root')
// const root = ReactDOM.createRoot(elRoot)
// root.render(
//     <App />
// )