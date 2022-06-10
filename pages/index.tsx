import { NextPageWithLayout } from './page';
import styles from '../styles/Home.module.css';
import Translate from '../components/trainings/translate/Translate';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { mockSidebarLayoutProps } from '../components/layouts/sidebar/SidebarLayout.mocks';

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>hellloooooo</h1>
      <Translate />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout {...mockSidebarLayoutProps.base} />
      {page}
    </PrimaryLayout>
  );
};
