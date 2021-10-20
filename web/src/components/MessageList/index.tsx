import styles from './styles.module.scss';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <h1>TEXTSHARE</h1>

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            doloremque corrupti praesentium asperiores sed atque maiores, hic
            odit laudantium, quos dolor. Itaque dolorum neque saepe eligendi
            minus iste quod eveniet.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/JoaoGuiBC.png" alt="Jonas" />
            </div>
            <span>Jonas</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            doloremque corrupti praesentium asperiores sed atque maiores, hic
            odit laudantium, quos dolor. Itaque dolorum neque saepe eligendi
            minus iste quod eveniet.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/JoaoGuiBC.png" alt="Jonas" />
            </div>
            <span>Jonas</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            doloremque corrupti praesentium asperiores sed atque maiores, hic
            odit laudantium, quos dolor. Itaque dolorum neque saepe eligendi
            minus iste quod eveniet.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/JoaoGuiBC.png" alt="Jonas" />
            </div>
            <span>Jonas</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
