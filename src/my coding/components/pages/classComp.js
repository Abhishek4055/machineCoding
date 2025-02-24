import { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Abhishek",
    };

    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("parent did Mount");
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.name} ={this.props.age}
        </h1>
      </div>
    );
  }
}

export default ClassComp;
