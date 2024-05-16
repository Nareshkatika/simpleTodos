import {useState} from 'react'
import Solution from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
const SimpleTodos = () => {
  const [deleteBtn, setDeleteBtn] = useState(initialTodosList)

  const removeEl = id => {
    setDeleteBtn(deleteBtn.filter(each => each.id !== id))
  }

  return (
    <div className="BgImg">
      <div className="whitePageEl">
        <h1 className="headingEl2">Simple Todos</h1>
        <ul>
          {deleteBtn.map(eachItem => (
            <Solution removeEl={removeEl} key={eachItem.id} items={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SimpleTodos
