import styles from './app.module.scss';

import { LoginBox } from './components/LoginBox';

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <h1>Hello world</h1>
      <LoginBox />
    </main>
  );
}
