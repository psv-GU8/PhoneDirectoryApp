import React, { Component } from "react";
import Header from "./header";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", phone: "" };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  Styles = {
    backBtn: {
      background: "transparent",
      width: 70,
      padding: 10,
      fontSize: 18,
      margin: "40px 40px",
      borderRadius: 100,
      cursor: "pointer"
    },
    btn: {
      background: "transparent",
      border: "none",
      outline: "none",
      fontSize: 18,
      cursor: "pointer"
    },
    subscriberInfo: {
      textAlign: "left",
      padding: "10px 40px",
      fontSize: 18
    },
    addBtn: {
      background: "#095",
      width: 70,
      padding: 10,
      fontSize: 18,
      borderRadius: 100,
      margin: "40px 40px"
    },
    link: {
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: 20,
      color: "#fff",
      cursor: "pointer"
    },
    inputContainer: {
      textAlign: "left",
      padding: "10px 40px",
      fontSize: 18
    },
    input: {
      width: 300,
      height: 30
    }
  };
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handlePhoneChange(event) {
    this.setState({ phone: event.target.value });
  }
  submitHandler(event) {
    event.preventDefault();
    var data = { name: this.state.name, phone: this.state.phone };
    window.list.push(data);
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="addSubscriberContainer">
        <Header title={"ADD SUBSCRIBER"} />
        <div style={this.Styles.backBtn}>
          <button style={this.Styles.btn} onClick={this.props.history.goBack}>
            Back
          </button>
        </div>
        <form onSubmit={this.submitHandler}>
          <div className="inputContainer" style={this.Styles.inputContainer}>
            <label>Name :</label>
            <br />
            <input
              style={this.Styles.input}
              id="name"
              name="name"
              onChange={this.handleNameChange}
            />
            <br />
            <br />
            <label>Phone :</label>
            <br />
            <input
              style={this.Styles.input}
              id="phone"
              name="phone"
              onChange={this.handlePhoneChange}
            />
            <br />
          </div>
          <div className="subscriberInfo" style={this.Styles.subscriberInfo}>
            <h4>Subscriber to be added:</h4>
            <span>Name: </span>
            <span>{this.state.name ? this.state.name : ""}</span>
            <br />
            <span>Phone: </span>
            <span>{this.state.phone ? this.state.phone : ""}</span>
            <br />
          </div>
          <div style={this.Styles.addBtn}>
            <input style={this.Styles.link} type="submit" value="ADD" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddUser;
