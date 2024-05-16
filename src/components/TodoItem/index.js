// Write your code here
import './index.css'

const Solution = props => {
  const {items, removeEl} = props
  const {title, id} = items

  const Final = () => {
    removeEl(id)
  }

  return (
    <li className="rowArrangeEl1">
      <p>{title}</p>
      <button className="ButtonEl34" onClick={Final} type="button">
        Delete
      </button>
    </li>
  )
}

export default Solution
