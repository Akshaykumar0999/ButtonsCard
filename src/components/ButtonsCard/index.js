import './index.css'

const ButtonsCard = props => {
  const {buttonDetail, buttonClick, isActive} = props
  const {id, buttonText} = buttonDetail
  const onClickButton = () => {
    buttonClick(id)
  }
  const isActiveClass = isActive ? 'actButton' : null
  return (
    <li className="list">
      <button
        className={`button ${isActiveClass}`}
        type="button"
        onClick={onClickButton}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonsCard
