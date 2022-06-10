import styles from './Translate.module.css';
export interface ITranslate {}

const Translate: React.FC<ITranslate> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>
          <div>Слов</div>
          <div>Группа</div>
        </h1>
      </div>
    </div>
  );
};

export default Translate;
