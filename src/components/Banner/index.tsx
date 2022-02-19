import styles from './styles.module.scss';
import Image from "next/image";
import GroupAvatars from "../../assets/group-avatars.png"
import BadgeSVG from "../../assets/badge.svg";

export function Banner() {
  return (
    <section className={styles.container} >
      <div className={styles.about}>
        <p>
          Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). 
          Compre, venda e descubra ativos digitais exclusivos para você.
        </p>

        <div>
          <Image src={GroupAvatars} alt="Grupo de avatares" />
          <p>
            <strong>+10</strong>
            Artistas selecionados
          </p>
        </div>
      </div>

      <div className={styles.badgeContainer}>
        <p>
          Descubra a verdadeira 
          arte digital e colecione diversas <strong>NFTs</strong>
        </p>
        <Image src={BadgeSVG} alt="Explore a arte" height="450px" width="450px" />
      </div>
    </section>
  );
}