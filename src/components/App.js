import { Component } from 'react';
import styles from "css/App.module.css"
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
    };
  }

  handleSubmit = (toDoItem) => {
    this.setState({ toDoList: [...this.state.toDoList, toDoItem] })
  }

  handleCompleteItem = (id) => {
    this.setState({
      toDoList: this.state.toDoList.map((value, index) => {
        if (index === id) {
          return Object.assign({}, value, { completed: !value.completed });
        }
        return value;
      })
    });
  }

  handleRemoveItem = (id) => {
    this.setState({
      toDoList: this.state.toDoList.filter((value, index) => {
        return id !== index;
      })
    });
  }

  render() {
    return (
      <div className={styles['app--normal']} >
        <Form handleSubmit={this.handleSubmit}></Form>
        <div>
          <button type='import'>导入</button>
          <button type='export'>导出</button>
          <button type='clear' onClick={() => {this.setState({toDoList: []})}}>清除</button>
        </div>
        <Table
          toDoList={this.state.toDoList}
          handleCompleteItem={this.handleCompleteItem}
          handleRemoveItem={this.handleRemoveItem}
        ></Table>
      </div>
    );
  }
}

export default App;
