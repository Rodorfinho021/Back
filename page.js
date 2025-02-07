import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.logo}>
        Med<span className={styles.color_logo}>Center</span>
      </div>

      <div className={styles.header}>
        <div className={styles.conteudo}>
          <ul className={styles.divisao}>
            <li>MÉDICO
            <div className={styles.element}><ul> <Link href="/componentes/medico/"><li>Listar</li></Link>    <li>Adicionar</li> <li>Editar</li>  <li>Excluir</li> </ul></div>
            </li>
            <li>PACIENTE
              <div className={styles.element}><ul><Link href="/sobre"><li>Listar</li></Link>    <li>Adicionar</li> <li>Editar</li>  <li>Excluir</li> </ul></div>
            </li>
            <li>CONSULTA
            <div className={styles.element}><ul><Link href="/sobre"><li>Listar</li></Link>    <li>Adicionar</li> <li>Editar</li>  <li>Excluir</li> </ul></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
