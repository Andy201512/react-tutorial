import styles from 'css/UploadButton.module.css'

function UploadButton(props) {
    return (
        <div className={styles['uploadBox--normal']}>
            <input
                type='file'
                accept=".xlsx,.xls"
                onChange={props.handleImport}
                className={styles['uploadInput--normal']}
            />
            <div className={styles['uploadShowBox--normal']}>
                <span className={styles['uploadSpan--normal']}>上传</span>
            </div>
        </div>
    );
}

export default UploadButton;