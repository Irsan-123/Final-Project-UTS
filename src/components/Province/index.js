import { nanoid } from "nanoid";
import styles from "./Province.module.css";

function Province (props) {
    let { province } = props;
    let no = 0;

    return (
        <div className={styles.container}>
            <section className={styles.province}>
                <h1>Province</h1>
                <p>Data Covid Provinsi</p>
                <table className={styles.province__table}>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Kota</td>
                            <td>Positif</td>
                            <td>Sembuh</td>
                            <td>Dirawat</td>
                            <td>Meninggal</td>
                        </tr>
                    </thead>
                    <tbody>
                        {province.map((data) => {
                            return (
                                <tr>
                                    <td>{no++}</td>
                                    <td>{data.kota}</td>
                                    <td>{data.kasus}</td>
                                    <td>{data.sembuh}</td>
                                    <td>{data.dirawat}</td>
                                    <td>{data.meninggal}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Province;