import React from "react";
import axios from "axios";
import "../style.css";

class Translate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Your translation",
      translationInput: ""
    };
  }

  render() {
    return (
      <>
        <h1>
          Be Cock<span>ne</span>y
        </h1>
        <h2>Your English to Cockney translator</h2>
        <p className="Description">
          Cockney’s not a language it is only a slang <br /> And was originated
          inna England <br /> The first place it was used was over East London…{" "}
          <br />- Smiley Culture, ‘Cockney Translation’ (1984)
        </p>
        <p className="Insert">Insert the text to translate here:</p>
        <input
          id="translationInput"
          type="text"
          onChange={e => this.setState({ translationInput: e.target.value })}
        />
        <br />
        <button onClick={this.getTranslation}>Translate!</button>
        {/* <p className="Translation">In Cockney...</p> */}
        <div className="box">
          <p className="Result">{this.state.text}</p>
        </div>
      </>
    );
  }

  getTranslation = () => {
    axios
      .get(`https://api.funtranslations.com/translate/cockney.json`, {
        params: {
          text: this.state.translationInput
        }
      })
      .then(response =>
        this.setState({ text: response.data.contents.translated })
      );
  };
}

export default Translate;
