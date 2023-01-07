import "./App.scss"
import Header from "./components/header"
import Screen1 from "./components/screen1/screen1"
import Screen2 from "./components/screen2/screen2"

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Screen1 />
        <Screen2 />
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App
