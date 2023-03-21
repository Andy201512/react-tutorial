import { Component } from 'react';
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toDoList: [],
    };
  }

  handleSubmit = (toDoItem) => {
    this.setState({toDoList: [...this.state.toDoList, toDoItem]})
  }

  render() {
    return (
      <div className="App">
        <Table toDoList={this.state.toDoList}></Table>
        <Form handleSubmit={this.handleSubmit}></Form>
      </div>
    );
  }
}

export default App;
