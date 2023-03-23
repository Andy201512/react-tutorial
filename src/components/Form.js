import { Component } from "react";
import styles from 'css/Form.module.css'

class Form extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            title: '',
            description: '',
            completed: false,
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
        if (!event.target.title.value) return;

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { title, description } = this.state;

        return (
            <form onSubmit={this.onFormSubmit} className={styles['form--normal']}>
                <div className={styles['rowOneThirds--normal']}>
                    <label 
                        htmlFor="title"
                        className={styles['label--normal']}
                    >title:</label>
                    <input
                        value={title}
                        name="title"
                        id="title"
                        onChange={this.handleChange}
                        className={styles['input--normal']}
                    ></input>
                </div>
                <div className={styles['rowOneThirds--normal']}>
                    <label
                        htmlFor="description"
                        className={styles['label--normal']}
                    >description:</label>
                    <input
                        value={description}
                        name="description"
                        id="description"
                        onChange={this.handleChange}
                        className={styles['input--normal']}
                    ></input>
                </div>
                <div className={styles['rowOneThirds--normal']}>
                    <button 
                        type="submit"
                    >Submit</button>
                </div>
            </form>
        );
    }
}

export default Form;