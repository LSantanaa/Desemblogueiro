import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner(){
  const titulo = "<Desen/>blogueiro"
  return (
      <div className={styles.banner}>
        <div className={styles.apresentacao}>
          <h1 className={styles.titulo}> {titulo}</h1>
          <p className={styles.paragrafo}>
            Boas Vindas ao meu dev blog! Eu sou o Leonardo de Sant Ana, Desenvolvedor Front-end e apaixonado por programação. 
            Aqui compartilho vários conhecimentos e conteúdos do mundo dev, espero que gostem e aprendam algo novo :)
          </p>
        </div>

        <div className={styles.imagens}>
          <img className={styles.circuloColorido} src={circuloColorido} alt="" aria-hidden={true} />
          <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do Leonardo sorrindo" />
        </div>
      </div>
    )
}