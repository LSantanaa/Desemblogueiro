import PostModelo from "components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minhaFotoSobreMim.jpg";
import styles from "./SobreMim.module.css";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo={"Sobre mim"}>
      <h3 className={styles.subtitulo}>Olá, eu sou o Leonardo!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Leonardo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou aluno de Front-end na Alura e estou feliz de te
        ver por aqui.
      </p>

      <p className={styles.paragrafo}>
        Minha história com programação começou quando eu era apenas uma criança curiosa.
        Eu tinha muita vontade de entender e aprender como funcionava "coisas tecnológicas", principalmente como eram feito os jogos. Inicialmente eu queria desenvolver games, mas por ter uma infância difícil e pouco recurso eu levei um certo tempo para começar a estudar programação, e ao invés de games, me aproximei mais da parte web onde mergulhei de cabeça nos estudos, tendo o javascript como principal foco de linguagem.
      </p>

      <p className={styles.paragrafo}>
        Apesar de estar estudando há cerca de um ano e meio, foi somente em 2023, com a oportunidade da Alura em parceria com a Oracle no programa ONE, que finalmente comecei a me sentir mais preparado para o mercado de trabalho, e hoje busco a minha primeira oportunidade como dev.
      </p>
    </PostModelo>
  );
}
