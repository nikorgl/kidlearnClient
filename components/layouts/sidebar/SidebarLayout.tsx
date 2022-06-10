import styles from './SidebarLayout.module.css';
export interface ISidebarLayout {
  sampleProp: string;
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ sampleProp }) => {
  return <div className={styles.container}>{sampleProp}</div>;
};

export default SidebarLayout;
