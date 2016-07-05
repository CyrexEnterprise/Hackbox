import React from "react";

export default class Home extends React.Component {
  constructor() {
    super();
  }

  // Initialize
  componentWillMount() {
    console.log("home")
  }

  // Destroy
  componentWillUnmount() {
    console.log("home")
  }

  render() {
    console.log("render")
    return (
      <h1>Home</h1>
    );
  }
}
