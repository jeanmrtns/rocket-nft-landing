import Image from 'next/image';
import styles from './styles.module.scss';

import LogoSVG from '../../assets/logo.svg';
import WolfSVG from '../../assets/logo_MetaMask.svg';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.container}>
      <Image src={LogoSVG} />
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/buy">
              <a>Comprar NFT</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <a>FAQ</a>
            </Link>
          </li>
        </ul>
      </nav>

      <button className={styles.connectButton}>
        <Image src={WolfSVG} alt="Logo Meta Mask" />
        <strong>Conectar carteira</strong>
      </button>
    </header>
  );
}