import styles from './Footer.module.css';
import {ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg'

export default function Footer(){
  return(
      <footer className={styles.rodape}>
        <p>Desenvolvido por Leonardo de Sant Ana</p> |
        <p style={{display: 'flex', gap:'10px', alignItems:'center'}}><MarcaRegistrada style={{width: '20px'}}/> Alura &copy; 2023  todos os direitos reservados </p> 
        
      </footer>
    )
}