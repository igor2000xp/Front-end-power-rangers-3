import { logoIcon } from 'assets';
import { useWindowSise } from 'hooks';
import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser, useAppSelector } from 'store';
import { ROUTE } from 'router';

import styles from './styles.module.scss';

interface IProps {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
}

export const MenuNav = ({ children }: IProps) => {
  const { width } = useWindowSise();
  const { isAuth } = useAppSelector(getUser);
  const navigate = useNavigate();
  const handleEnter = () => {
    navigate(ROUTE.SIGN_IN);
  };
  const handleRegistration = () => {
    navigate(ROUTE.SIGN_UP);
  };
  return (
    <div className={styles.menu__container}>
      <nav className={styles.menu__nav}>
        {width && width > 768 && (
          <Link to={ROUTE.HOME}>
            <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
          </Link>
        )}
        <ul>
          <li>
            <Link to={ROUTE.SIGN_UP} className={styles.links}>
              О сервисе
            </Link>
          </li>
          <li>
            <Link to={ROUTE.SIGN_UP} className={styles.links}>
              Тарифы
            </Link>
          </li>
          <li>
            <Link to={ROUTE.SIGN_UP} className={styles.links}>
              Статьи
            </Link>
          </li>
        </ul>
      </nav>
      {!isAuth && (
        <div className={styles.buttonsWrapper}>
          <button type="button" className={styles.enter} onClick={handleEnter}>
            Вход
          </button>
          <button type="button" className={styles.registration} onClick={handleRegistration}>
            Регистрация
          </button>
        </div>
      )}
      {children}
    </div>
  );
};
