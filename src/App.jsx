import { useState, useEffect } from 'react'
import './App.css'
import gamesList from './data/gamesList'
import ListItem from './items/ListItem'

function App() {
  const [list, setList] = useState([])
  let timeoutId = ''

  useEffect(() => {
      const arr = gamesList.map((item, index) => {

        return <ListItem
          key={index}
          index={index}
          game={item}
        />
      })

      setList(arr) 
  }, [])

  const setSelectedIndex = (selectedIndex) => {
    const arr = gamesList.map((item, index) => {
      let className = ''
      if( index < parseInt(selectedIndex) ) {className = 'before-selected'}
      if(index === parseInt(selectedIndex) ) {className = 'selected'}

      return <ListItem
          key={index}
          index={index}
          game={item}
          className={className}
      />
    })

    setList(arr)

    timeoutId = setTimeout(() => {
      const arr = gamesList.map((item, index) => {
        let className = ''
        if(index === parseInt(selectedIndex) ) {className = 'selected'}
  
        return <ListItem
            key={index}
            index={index}
            game={item}
            className={className}
        />
      })

      setList(arr)
    },  selectedIndex  * 2 * 100)
  }

  return (
    <div className="App">
        <ul className="games-list">
        {list.length && list}
      </ul>

      <button onClick={() => {
        clearTimeout(timeoutId)
        setSelectedIndex(  (Math.random() * gamesList.length - 1).toFixed(0) )
      }}>Select Game</button>
    </div>
  )
}

export default App
