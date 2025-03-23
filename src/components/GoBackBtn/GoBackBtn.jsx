import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';

const GoBackBtn = () => {
  return (
    <Link to={-1} className={css.link}>
      Go Back
    </Link>
  );
};

export default GoBackBtn;
