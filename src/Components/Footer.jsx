import styles from "./footer.module.css";
export default function Footer({ completedTask, totalTask }) {
  

  return (
    <div className={styles.footer}>
        {console.log(totalTask)}
        <span>completed task : {completedTask}</span>

        <span>Todo Item : {totalTask} </span>
        
    </div>
  );
}
