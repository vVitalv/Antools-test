import "./App.scss"
import Header from "./components/header"
import Search from "./components/search"

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Search />
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App
