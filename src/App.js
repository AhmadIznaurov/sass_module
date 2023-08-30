import { Grid } from './styles/module/Grid';
import styles from './styles/styles.module.scss';

export const App = () => {
  return (
    <div>
      <Grid />
      <a href="#">Link 1</a>
      <div className={styles.centered_block}>
        <ul>
          <li><a href="">Element One</a></li>
          <li>Element Two</li>
          <li>Element Three</li>
          <li>Element Four</li>
          <li>Element Five</li>
          <li>Element Six</li>
        </ul>
        <a href="">Empty link</a>
    <br/>
        <a href="">Link 2</a>
      </div>
    </div>
  );
}

