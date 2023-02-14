import { RegistrationForm } from 'modules';

import { Link } from 'react-router-dom';

import { ROUTE } from 'router';

import { icons } from './data/icons';

import styles from './styles.module.scss';

import { logoIcon } from '../../assets';

export const RegistrationPage = () => (
  <main className={styles.main}>
    <div className={styles.bg} />
    <div className={styles.wrapper}>
      <div className={styles.aboutWrapper}>
        <div className={styles.about}>
          <Link to={ROUTE.HOME} className={styles.logo}>
            <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
          </Link>
          <h1>Помогаем автоматизировать бизнес-процессы с помощью чат-ботов</h1>
          <ul className={styles.socialList}>
            {icons.map((Icon, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={i}>
                <Icon />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.registration}>
        <RegistrationForm />
      </div>
    </div>
  </main>
);
