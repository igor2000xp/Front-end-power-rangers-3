import { RegistrationForm } from 'modules';

import { icons } from './data/icons';

import styles from './styles.module.scss';

export const RegistrationPage = () => (
  <main className={styles.wrapper}>
    <div className={styles.about}>
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
    <div className={styles.registration}>
      <RegistrationForm />
    </div>
  </main>
);
