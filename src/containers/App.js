import React, { Component } from "react";
import { connect } from "react-redux";
import MainPage from "../components/MainPage";
import { setSearchField, requestRobots } from "../actions";
import "tachyons";
import "./App.css";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobot.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);