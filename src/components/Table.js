const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>To-do</th>
                <th>Description</th>
                <th>Complete</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const TrItem = props.toDoList.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.title}</td>
                <td>{row.description}</td>
                <td><button onClick={() => {console.log(`${row.title}已完成`)}}>完成</button></td>
            </tr>
        );
    });
    return (
        <tbody>
            { TrItem }
        </tbody>
    );
}

function Table(props) {
    return (
        <table>
            <TableHeader />
            <TableBody toDoList={props.toDoList}/>
        </table>
    );
}

export default Table;