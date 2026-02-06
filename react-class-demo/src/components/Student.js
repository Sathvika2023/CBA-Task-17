import React from "react";

class Student extends React.Component {
  render() {
    return (
      <div className="student-card">
        <h3>Name: {this.props.name}</h3>
        <p>Course: {this.props.course}</p>
      </div>
    );
  }
}

export default Student;
