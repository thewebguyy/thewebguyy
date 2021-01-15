import styles from './box.module.css'

export default function Box (props){
    const{padding,children}=props

    return <div className={`${styles.box} ${styles[padding]}`}>{children}</div>
    
}