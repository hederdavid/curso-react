import './App.css'
import MyComponent from './components/MyComponent'
import Tittle from './components/Tittle'

function App() {
    const redTittle = true

  return (
    <>
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>
      {/* CSS dinâmico */}
      <h2 className={redTittle ? "red-tittle" : "tittle"}>Este título terá CSS dinâmico.</h2>
      <Tittle />
    </>
  )
}

export default App
