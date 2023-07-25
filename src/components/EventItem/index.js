import './index.css'

const EventItem = props => {
  const {eventsList, eventRegistered} = props
  const {imageUrl, name, location, id} = eventsList

  const onClickEvent = () => {
    eventRegistered(id)
  }

  return (
    <li className="list">
      <button onClick={onClickEvent} type="button" className="back">
        <img src={imageUrl} className="image" alt="event" />

        <p className="head">{name}</p>
        <p className="para">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
