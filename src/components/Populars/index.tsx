import Image from 'next/image';
import Astronaut1 from '../../assets/astronauta-1.png';
import Astronaut2 from '../../assets/astronauta-2.png';
import Astronaut3 from '../../assets/astronauta-3.png';
import Astronaut4 from '../../assets/astronauta-4.png';
import ArrowRight from '../../assets/arrow-white.svg';

import styles from './styles.module.scss';

export function Populars() {
  return (
    <section className={styles.container}>
      <h2><strong>Populares</strong> da semana</h2>

      <div className={styles.astronautsGroup}>
        <div>
          <div className={styles.astronaut}>
            <h4>Astronauta 1 <Image src={ArrowRight} alt="Astronauta 1" height={20} /></h4>
            <p>Mayk Brito <strong>1.50 RKT</strong></p>
            <Image src={Astronaut1} alt="Astronauta 1" />
          </div>

          <div className={styles.astronaut}>
            <h4>Astronauta 3 <Image src={ArrowRight} alt="Astronauta 3" height={20} /></h4>
            <p>João Inácio (Biro) <strong>3.75 RKT</strong></p>
            <Image src={Astronaut3} alt="Astronauta 1" />
          </div>
        </div>

        <div className={styles.separator} />

        <div>
          <div className={styles.astronaut}>
            <h4>Astronauta 2 <Image src={ArrowRight} alt="Astronauta 2" height={20} /></h4>
            <p>Jakeliny Gracielly <strong>2.0 RKT</strong></p>
            <Image src={Astronaut2} alt="Astronauta 1" />
          </div>

          <div className={styles.astronaut}>
          <h4>Astronauta 4 <Image src={ArrowRight} alt="Astronauta 4" height={20} /></h4>
            <p>Tamires Santos <strong>4.30 RKT</strong></p>
            <Image src={Astronaut4} alt="Astronauta 1" />
          </div>
        </div>
      </div>
    </section>
  );
}