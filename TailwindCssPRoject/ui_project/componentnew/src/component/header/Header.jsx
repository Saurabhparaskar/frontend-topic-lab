import Button from "../button/Button";
import styles from './Header.module.css'
const Header =()=>{

    return(
        <>
        
        <div>
            <div className={styles.header}>
            <h3 className={styles.line}>Saurabh Paraskar</h3>
            <button className={styles.btn}> Login</button>
               
            </div>
            
            
            <Button></Button>
        </div>
        
        </>
    )
}
export default Header;