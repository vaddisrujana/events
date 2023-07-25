import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  yetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="register"
        alt="yet to register"
      />
      <p>
        A live performance brings so much to your <br /> relationship with
        dance. DSeeing dance live
        <br /> can often make you fall totally in love with <br /> this
        beautiful art form
      </p>
      <button>Register Here</button>
    </div>
  )

  registered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="registered"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  registrationClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="closed"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  render() {
    const {status} = this.props

    console.log(status)

    switch (status) {
      case 'YET_TO_REGISTER':
        return this.yetToRegister()
      case 'REGISTERED':
        return this.registered()
      case 'REGISTRATIONS_CLOSED':
        return this.registrationClosed()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
