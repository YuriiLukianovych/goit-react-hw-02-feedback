import css from './App.module.scss';
import Feedback from './components/Feedback';

export const App = () => {
  return (
    <div className={css.bodyWrapper}>
      <h2>Feedback widget</h2>
      <Feedback />
    </div>
  );
};
