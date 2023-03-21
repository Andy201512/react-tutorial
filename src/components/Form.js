import { Component } from "react";

class Form extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            title: '',
            description: '',
        }

        this.state = this.initialState;
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        // 至少输入待办事件的标题才继续提交
        if(!event.target.title.value)return;
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { title, description } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>title:</label>
                <input value={title} name="title" onChange={this.handleChange}></input>
                <label>description:</label>
                <input value={description} name="description" onChange={this.handleChange}></input>
                <button>Submit</button>
            </form>
        );
    }
}

export default Form;