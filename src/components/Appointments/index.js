// Write your code here
import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    Title: '',
    appointmentDate: '',
    appointmentsList: [],
    isClick: false,
  }

  onDateUpdate = e => this.setState({appointmentDate: e.target.value})

  onSearched = e => this.setState({Title: e.target.value})

  onClicked = () => {
    console.log('Object Created')
    const {Title, appointmentDate} = this.state
    const appointmentObject = {
      id: uuidv4(),
      title: Title,
      formatDate: format(new Date(appointmentDate), 'dd MMMM yyyy, EEEE'),
      isLiked: false,
    }
    this.setState(i => ({
      appointmentsList: [...i.appointmentsList, appointmentObject],
      Title: '',
      appointmentDate: '',
    }))
  }

  onStarClicked = id => {
    const {appointmentsList} = this.state
    const filteredList = appointmentsList.map(i => {
      if (i.id === id) {
        return {...i, isLiked: !i.isLiked}
      }
      return i
    })
    this.setState({
      appointmentsList: filteredList,
    })
  }

  onStarBtnClicked = () => this.setState(i => ({isClick: !i.isClick}))

  render() {
    const {Title, appointmentDate, appointmentsList, isClick} = this.state
    const filteredList = appointmentsList.filter(i => i.isLiked)

    return (
      <div className="cont">
        <div className="columnContainer">
          <div className="insideCont">
            <div className="thirdCont">
              <h1>Add Appointment</h1>
              <label className="para" htmlFor="title">
                Title
              </label>
              <input
                className="inputCont"
                placeholder="Title"
                id="title"
                value={Title}
                onChange={this.onSearched}
                type="text"
              />
              <label className="para" onChange={this.onConsole} htmlFor="date">
                DATE
              </label>
              <input
                className="inputCont"
                id="date"
                type="date"
                value={appointmentDate}
                onChange={this.onDateUpdate}
                placeholder="dd/mm/yyyy"
              />
              <button className="btn2" onClick={this.onClicked} type="button">
                Add
              </button>
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>

          <div>
            <hr className="borderStyle" />
            <h1>Appointments</h1>
            <button
              className="btn3"
              onClick={this.onStarBtnClicked}
              type="button"
            >
              Starred
            </button>

            <ul className="itemCont">
              {isClick
                ? filteredList.map(i => (
                    <AppointmentItem
                      key={i.id}
                      itemDetails={i}
                      onStarClicked={this.onStarClicked}
                    />
                  ))
                : appointmentsList.map(i => (
                    <AppointmentItem
                      key={i.id}
                      itemDetails={i}
                      onStarClicked={this.onStarClicked}
                    />
                  ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
