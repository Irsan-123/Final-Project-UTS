import { useState } from "react";
import styles from "./Form.module.css";
import gambar from "./form.svg"

function Form (props) {
    const { province, setProvince } = props; 
    const [ kota, setKota] = useState("Jakarta");
    const [ status, setStatus ] = useState("Positif");
    const [ jumlah, setJumlah ] = useState();

    function handleKota (e) {
        setKota(e.target.value);
    }

    function handleStatus (e) {
        setStatus(e.target.value);
    }

    function handleJumlah (e) {
        setJumlah(e.target.value);
    }

    function handleForm (e) {
        e.preventDefault();
        const data = province;

    if (jumlah > 0) {
      let value = parseInt(jumlah);
      let nama = data.findIndex((obj) => obj.kota == kota);

      if (status == "Positif" || status == "kasus") {
        data[nama].kasus =
          parseInt(data[nama].kasus) + value;
      } else if (status == "Dirawat") {
        data[nama].dirawat =
          parseInt(data[nama].dirawat) + value;
      } else if (status == "Sembuh") {
        data[nama].sembuh =
          parseInt(data[nama].sembuh) + value;
      } else if (status == "Meninggal") {
        data[nama].meninggal =
          parseInt(data[nama].meninggal) + value;
      }
      setProvince([...data]);

    } 
    }

    return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
            <img
                className={styles.form__image}
                src={gambar}
                alt="placeholder"
            />
        </div>
        <div className={styles.form__right}>
            <h1>Form Inputan</h1>
            <form className={styles.form__form} action="" onSubmit={handleForm}>
                <p>Provinsi</p>
                <select name="province" id="province" onChange={handleKota} value={kota}>
                    {province.map((data) => {
                        return (
                            <option value={data.kota}>{data.kota}</option>
                        )
                    })}
                </select>

                <p>Status</p>
                <select name="status" id="status" onChange={handleStatus} value={status}>
                    <option value="Positif">Positif</option>
                    <option value="Sembuh">Sembuh</option>
                    <option value="Dirawat">Dirawat</option>
                    <option value="Meninggal">Meninggal</option>
                </select>

                <p>Jumlah</p>
                <input value={jumlah} type="number" onChange={handleJumlah}/>

                <button>Simpan</button>
            </form>
        </div>
      </section>
    </div>
    )
}

export default Form ;