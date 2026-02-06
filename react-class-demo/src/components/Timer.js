import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h3>
          Current Time: {this.state.time.toLocaleTimeString()}
        </h3>
      </div>
    );
  }
}

export default Timer;
