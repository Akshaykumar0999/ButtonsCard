import {Component} from 'react'
import ButtonsCard from '../ButtonsCard'
import './index.css'

class ChangeLanguage extends Component {
  state = {actId: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0'}

  buttonClick = id => {
    this.setState({actId: id})
  }

  render() {
    const {languageGreetingsList} = this.props
    const {actId} = this.state
    const ActiveObject = languageGreetingsList.find(each => each.id === actId)

    const imgUrl = ActiveObject.imageUrl
    const imgAltText = ActiveObject.imageAltText
    console.log(actId)
    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="ul-card">
          {languageGreetingsList.map(eachButton => (
            <ButtonsCard
              buttonDetail={eachButton}
              key={eachButton.id}
              buttonClick={this.buttonClick}
              isActive={eachButton.id === actId}
            />
          ))}
        </ul>
        <img className="image" src={imgUrl} alt={imgAltText} />
      </div>
    )
  }
}

export default ChangeLanguage
