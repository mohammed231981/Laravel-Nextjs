import styles from "./card.module.css";

const Card = ({ item }: any) => {
    return (
        <a href={item.url ?? "#"} className={styles.container }>
        <div>
            <div className={styles.texts}>
                <span className={styles.title}>{item.title}</span>
                <div className="flex">
                {item.amount ? (
                    <span className={styles.number}>{item.amount}</span>
               ) : ''}
                {item.eenheid ? (
                <span className="text-xs pl-1">{`(${item.eenheid})`}</span>
                ) : ''}
               </div>
                <span className={styles.detail}>
                {item.status === 0 || item.status === 1 ?  (
                <span className={item.status == 1 ? styles.positive : styles.negative}>
                        {item.status == 1 ? "Goedgekeurd" : "Afgekeurd"}
                </span>) : ''}
                {item.description ?  (
                <span>
                        {item.description}
                </span>) : ''}
                </span>
            </div>
        </div>
        </a>
    );
};

export default Card;