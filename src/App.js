import "./App.scss"
import Header from "./components/header"
import Screen1 from "./components/screen1/screen1"
import Screen2 from "./components/screen2/screen2"
import Screen3 from "./components/screen3/screen3"
import Screen4 from "./components/screen4/screen4"
import Screen5 from "./components/screen5/screen5"

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Screen1 />
        <Screen2 />
        <Screen3 />
        <Screen4 />
        <Screen5 />
      </main>
    </div>
  )
}

export default App
