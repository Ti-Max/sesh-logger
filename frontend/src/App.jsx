import React from "react";
import { getAllFromDatabase, getFromDatabase, putInDatabase } from "./database";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    await putInDatabase(this.props.database, "sessions", "cat", "qwer");
    const sessions = getFromDatabase(
      this.props.database,
      "sessions",
      "cat"
    ).then((response) => console.log(response));
    this.state = {};
  }

  render() {
    return <div>hello from react</div>;
  }
}

export default App;
