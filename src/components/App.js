import { Component } from 'react';
import { read, utils, writeFileXLSX } from 'xlsx';
import 'css/index.css';
import styles from 'css/App.module.css';
import Table from "./Table";
import Form from "./Form";
import UploadButton from './UploadButton';

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

    handleImport = (event) => {
        const { files } = event.target;
        var reader = new FileReader();
        reader.readAsArrayBuffer(files[0]);

        // 下面是在设置FileReader读取的回调，与上传回调函数handleImport不是同一事件触发，event入参是不同的
        reader.onload = (event) => {
            try {
                const { result } = event.target;
                const wb = read(result); // parse the array buffer
                const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
                const data = utils.sheet_to_json(ws); // generate objects
                this.setState({
                    toDoList: data.map((value) => {
                        return {
                            title: value.title || '',
                            description: value.description || '',
                            completed: value.completed || false,
                        };
                    })
                });
            } catch (error) {
                console.log('解析出错', error)
            }
        }
    }

    handleExport = () => {
        const ws = utils.json_to_sheet(this.state.toDoList);
        const wb = utils.book_new();
        utils.book_append_sheet(wb, ws, "Data");
        writeFileXLSX(wb, `ToDoList${(() => { let event = new Date(); return event.toLocaleString('zh-CN') })()}.xlsx`);
    }

    render() {
        return (
            <div className={styles['app--normal']} >
                <Form handleSubmit={this.handleSubmit}></Form>
                <Table
                    toDoList={this.state.toDoList}
                    handleCompleteItem={this.handleCompleteItem}
                    handleRemoveItem={this.handleRemoveItem}
                ></Table>
                <div className={styles['rowDiv--normal']}>
                    <div className={styles['colDiv--normal']}>
                        <UploadButton handleImport={this.handleImport}></UploadButton>
                    </div>
                    <div className={styles['colDiv--normal']}>
                        <button
                            type='export'
                            onClick={this.handleExport}
                        >导出</button>
                    </div>
                    <div className={styles['colDiv--normal']}>
                        <button
                            type='clear'
                            onClick={() => { this.setState({ toDoList: [] }) }}
                        >清除</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
