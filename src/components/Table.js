import styles from "css/Table.module.css"

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th className={styles['thOneThirds--normal']}>待办标题</th>
                <th className={styles['thOneThirds--normal']}>详细描述</th>
                <th className={styles['thOneThirds--normal']}>操作按钮</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const TrItem = props.toDoList.map((row, index) => {
        return (
            <tr key={index}>
                <td className={`${styles['tdAlignCenter--normal']} ${row.completed ? styles['td--lineThrough'] : ''}`}>{row.title}</td>
                <td className={`${styles['tdAlignCenter--normal']} ${row.completed ? styles['td--lineThrough'] : ''}`}>{row.description}</td>
                <td className={styles['tdAlignCenter--normal']}>
                    <button 
                        onClick={() => props.handleCompleteItem(index)}
                        className={styles['tdButton--normal']}
                    >{row.completed ? '未完' : '完成'}</button>
                    <button 
                        onClick={() => props.handleRemoveItem(index)}
                        className={styles['tdButton--normal']}
                    >移除</button>
                </td>
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
        <table className={styles['table--normal']}>
            <TableHeader />
            <TableBody 
                toDoList={props.toDoList} 
                handleCompleteItem={props.handleCompleteItem}
                handleRemoveItem={props.handleRemoveItem}
            />
        </table>
    );
}

export default Table;