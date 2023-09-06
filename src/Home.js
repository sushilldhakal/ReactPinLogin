import React, { Component } from "react";

import { WebcamCapture } from "./Webcam";
import moment from "moment";

import { Tabs, Tab } from "react-bootstrap";

import "./home.css";

function doDate() {
  var str = "";
  var now = new Date();
  str = now.toDateString() + " " + now.toLocaleTimeString();
  var pinTime = moment(str).format("hh:mm:ss A");
  if (document.getElementById("todaysDate"))
    document.getElementById("todaysDate").innerHTML = pinTime;
}
setInterval(doDate, 1000);

class Home extends Component {
  state = {
    currentTime: moment().format("LT"),
    name: "",
    lat: "",
    lng: "",
    user: { name: "" },
    timesheets: [],
    timesheetLoaded: false,
    isActive: "",
    birthday: false,
    className: "hide tooltip",
    status: false,
    class: "",
  };

  onTimeclick() {
    this.setState({
      status: !this.state.status,
      class: !this.state.status ? "checked" : "",
    });
  }

  onClick = (e) => {
    document.getElementById("webcam-btn").click();
    setTimeout(() => {
      window.location.href = "https://react-pin-login.vercel.app/";
    }, 1000);
  };

  componentDidMount() {}

  render() {
    return (
      <div className="home-container">
        <div className="container-fluid">
          <div className="text white-text">
            <h2 id="todaysDate"> </h2>
            <div className="big-screen">
              <div className="row">
                <div className="col-lg-5 col-sm-12">
                  <div className="video-wrapper">
                    <div className="user-detail-login">
                      <h4 className="name">User Name</h4>
                      <h4 className="role">User Role</h4>
                    </div>

                    <div className="user-home-clocksheet">
                      {this.state.timesheets.map((timesheet, id) => {
                        return (
                          <>
                            <span key={id} className={timesheet.type}>
                              {moment(timesheet.time).format("LT")}
                            </span>
                            <span className={`timesheet-type clock-in`}>
                              Clocked In
                            </span>
                          </>
                        );
                      })}
                    </div>
                    <WebcamCapture id="webimage" />
                  </div>
                </div>
                <div className="col-lg-7 col-sm-12">
                  <div className="record-slider ">
                    <Tabs defaultActiveKey="start">
                      <Tab eventKey="start" title="START">
                        <div className="tooltip-btn btn-outline-success left">
                          <input
                            type="radio"
                            className="btn-check"
                            name="options"
                            id="option1"
                            autoComplete="off"
                            checked
                            onChange={(e) => e.target.value}
                            onClick={() => this.onClick("in")}
                          />
                          <label htmlFor="option1">Clock In</label>
                        </div>
                      </Tab>
                      <Tab
                        eventKey="break"
                        title={
                          this.state.timesheets.length == 2
                            ? "END BREAK"
                            : "BREAK"
                        }
                      >
                        <div
                          className={`tooltip-btn btn-outline-warning middle`}
                        >
                          <input
                            type="radio"
                            className="btn-check"
                            name="option2"
                            id="option2"
                            autoComplete="off"
                            onChange={(e) => e.target.value}
                            onClick={() => this.onClick("break")}
                          />
                          <label htmlFor="option2">START BREAK</label>
                        </div>

                        <div
                          className={`tooltip-btn btn-outline-warning middle ${
                            this.state.timesheets.length == 2
                              ? "not-active"
                              : "tooltip"
                          }`}
                        >
                          <label htmlFor="option1d">END BREAK</label>
                          <input
                            type="radio"
                            className="btn-check"
                            name="option1d"
                            id="option1d"
                            autoComplete="off"
                            onChange={(e) => e.target.value}
                            onClick={() => this.onClick("endBreak")}
                          />
                        </div>
                      </Tab>
                      <Tab eventKey="end" title="FINISH">
                        <div
                          className={
                            `awesome-btn tooltip-btn btn-outline-danger right ` +
                            this.state.class
                          }
                        >
                          <label htmlFor="option3">Clock Out</label>
                          <input
                            type="radio"
                            className="btn-check"
                            name="options"
                            id="option3"
                            autoComplete="off"
                            onChange={(e) => e.target.value}
                            onClick={() => this.onClick("out")}
                          />
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>

                {this.state.birthday && (
                  <div className="col-sm-12">
                    <div className="annimation-rib">
                      <div className="annimation-rib-piece"></div>
                      <div className="annimation-rib-piece"></div>
                      <div className="annimation-rib-piece"></div>
                      <div className="annimation-rib-piece"></div>
                      <div className="annimation-rib-piece"></div>
                      <div className="annimation-rib-piece"></div>
                      <div className="annimation-rib-piece"></div>
                      <div className="annimation-rib-piece"></div>
                      <div className="annimation-rib-piece"></div>
                      <div className="annimation-rib-piece"></div>
                      <div className="annimation-rib-piece"></div>
                      <div className="annimation-rib-piece"></div>
                      <div className="annimation-rib-piece"></div>
                    </div>
                    <div className="fireworks">
                      <div className="wish">
                        <center>
                          <h2>Happy BirthDay {this.state.user.name}</h2>
                        </center>
                      </div>
                      <div className="pyro">
                        <div className="before"></div>
                        <div className="after"></div>
                        <div className="before1"></div>
                        <div className="after1"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
