import "./App.scss"
import Header from "./components/header"
import Screen1 from "./components/screen1/screen1"
import Screen2 from "./components/screen2/screen2"
import Screen3 from "./components/screen3/screen3"
import Screen4 from "./components/screen4/screen4"

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Screen1 />
        <Screen2 />
        <Screen3 />
        <Screen4 />
      </main>
    </div>
  )
}

export default App
