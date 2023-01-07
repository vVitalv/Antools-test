import "./App.scss"
import Header from "./components/header"
import Screen1 from "./components/screen1"

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Screen1 />
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App
