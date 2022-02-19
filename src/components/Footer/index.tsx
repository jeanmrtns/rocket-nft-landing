import Image from "next/image";
import Link from "next/link";

import styles from './styles.module.scss';
import ArrowUp from '../../assets/arrow-black.svg';
import InstagramIcon from '../../assets/instagram.svg';
import YoutubeIcon from '../../assets/youtube.svg';
import TwitterIcon from '../../assets/twitter.svg';
import EmailIcon from '../../assets/email.svg';

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footerHeader}>
        <h3>Rocket <span>NFTs</span></h3>
        <button>
          <Image src={ArrowUp} alt="Back to beginning" />
        </button>
      </div>

      <div className={styles.footerContent}>
        <form>
          <h4>Fique por dentro de <span>todas as novidades</span></h4>

          <label>
            <input type="text" placeholder="nft@rocketseat.com.br" />
            <button>Enviar</button>
          </label>
        </form>

        <div className={styles.separator} />

        <div className={styles.links}>
          <div>
            <p>Empresa</p>
            <Link href="#">
              <a>Sobre</a>
            </Link>
            <Link href="#">
              <a>Serviços</a>
            </Link>
            <Link href="#">
              <a>Time</a>
            </Link>
            <Link href="#">
              <a>Carreira</a>
            </Link>
          </div>

          <div>
            <p>Mapa</p>
            <Link href="#">
              <a>Galeria</a>
            </Link>
            <Link href="#">
              <a>Populares</a>
            </Link>
            <Link href="#">
              <a>Vendas</a>
            </Link>
            <Link href="#">
              <a>Contato</a>
            </Link>
          </div>

          <div>
            <p>Links</p>
            <Link href="#">
              <a>FAQs</a>
            </Link>
            <Link href="#">
              <a>Termos</a>
            </Link>
            <Link href="#">
              <a>Política</a>
            </Link>
            <Link href="#">
              <a>Ajuda</a>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.contact}>
        <p>www.rocketseat.com.br</p>

        <div>
          <Link href="#">
            <a>
              <Image src={InstagramIcon} alt="Instagram" />
            </a>
          </Link>

          <Link href="#">
            <a>
              <Image src={YoutubeIcon} alt="Insagram" />
            </a>
          </Link>

          <Link href="#">
            <a>
              <Image src={TwitterIcon} alt="Twitter" />
            </a>
          </Link>

          <Link href="#">
            <a>
              <Image src={EmailIcon} alt="Email" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}