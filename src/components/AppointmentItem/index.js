import './index.css'

const AppointmentItem = props => {
  const {itemDetails, onStarClicked} = props
  const {id, title, formatDate, isLiked} = itemDetails
  const starClicked = () => onStarClicked(id)

  return (
    <li className="itemMain" type="none">
      <div className="itemCont1">
        <p>{title}</p>
        <p>{formatDate}</p>
      </div>
      <button
        className="btnItem"
        data-testid="star"
        onClick={starClicked}
        type="button"
      >
        {isLiked ? (
          <img
            alt="star"
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
          />
        ) : (
          <img
            alt="star"
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
          />
        )}
      </button>
    </li>
  )
}

export default AppointmentItem
