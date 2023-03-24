import styles from './Panel.module.scss';

export interface IPanel {
    heading: string;
    children: React.ReactNode
}

const Panel: React.FC<IPanel> = ({heading, children}) => {
  return (
    <div className={styles.container}>
        <h2> 
            {heading}
        </h2>
        <div className={styles.children}>
            {children}
        </div>
    </div>
)
}

export default Panel;
