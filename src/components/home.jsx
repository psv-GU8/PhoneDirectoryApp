import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriberList: window.list
    };
  }
  Styles = {
    addBtn: {
      background: "#095",
      width: 70,
      padding: 10,
      fontSize: 18,
      margin: "50px 50px",
      borderRadius: 100,
      cursor: "pointer"
    },
    link: {
      textDecoration: "none",
      color: "#fff"
    },
    delBtn: {
      border: "none",
      outline: "none",
      background: "#dd4e3b",
      color: "#fff",
      padding: 10,
      borderRadius: 100,
      cursor: "pointer"
    },
    subscriberList: {
      margin: "40px 40px"
    },
    table: {
      padding: 10,
      fontSize: 20,
      width: "100%"
    },
    tr: {
      padding: 110
    },
    th: {
      padding: "30px 50px"
    },
    td: {
      padding: "10px 50px"
    }
  };

  deleteSubscriber(value) {
    console.log("You clicked on id - ", value);
    window.list = window.list.filter(item => item.phone !== value);
    this.setState({
      subscriberList: window.list
    });
  }

  render() {
    return (
      <div className="home">
        <Header title={"PHONE DIRECTORY"} />
        <div style={this.Styles.addBtn}>
          <Link to="/add" style={this.Styles.link}>
            ADD
          </Link>
        </div>
        <div className="subscriberList" style={this.Styles.subscriberList}>
          <table style={this.Styles.table}>
            <thead>
              <tr style={this.Styles.tr}>
                <th style={this.Styles.th}>Name</th>
                <th style={this.Styles.th}>Phone</th>
              </tr>
            </thead>
            <tbody>
              {this.state.subscriberList
                ? this.state.subscriberList.map(data => {
                    return (
                      <tr key={data.phone}>
                        <td style={this.Styles.td}>{data.name}</td>
                        <td style={this.Styles.td}>{data.phone}</td>
                        <td style={this.Styles.td}>
                          <button
                            style={this.Styles.delBtn}
                            onClick={() => this.deleteSubscriber(data.phone)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
