import datas from "../../utils/constants/indonesia";
import styles from "./Global.module.css";

function Global () {
    const { indonesia } = datas;
    const arrays = indonesia;
    return (
        <div className={styles.container}>
            <section className={styles.global}>
                <h1 className={styles.global__brand}>Indonesia</h1>
                <p className={styles.global__info}>Data Covid di Indonesia</p>
                <div className={styles.global__div}>
                    <div className={styles.global__control}>
                       <h1>Sembuh</h1>
                       <h2>{arrays[0].total}</h2>
                    </div>
                    <div className={styles.global__control}>
                       <h1>Dirawat</h1>
                       <h2>{arrays[1].total}</h2>
                    </div>
                    <div className={styles.global__control}>
                       <h1>Meninggal</h1>
                       <h2>{arrays[2].total}</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Global;