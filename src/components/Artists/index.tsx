import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

import Artist1 from '../../assets/artista-1.png';
import Artist2 from '../../assets/artista-2.png';
import Artist3 from '../../assets/artista-3.png';
import Artist4 from '../../assets/artista-4.png';
import Artist5 from '../../assets/artista-5.png';
import Artist6 from '../../assets/artista-6.png';
import ArrowRight from '../../assets/arrow-orange.svg';


type Artist = {
  url: StaticImageData;
  qtd_photos: number;
  name: string;
}

const MOCK_ARTISTS: Artist[] = [
  {
    url: Artist1,
    qtd_photos: 80,
    name: 'Mayk Brito',
  },
  {
    url: Artist2,
    qtd_photos: 99,
    name: 'Jakeliny G.',
  },
  {
    url: Artist3,
    qtd_photos: 50,
    name: 'João I. (Biro)',
  },
  {
    url: Artist4,
    qtd_photos: 43,
    name: 'Tamires Santos',
  },
  {
    url: Artist5,
    qtd_photos: 28,
    name: 'Ana Silva',
  },
  {
    url: Artist6,
    qtd_photos: 20,
    name: 'Diego F.',
  },
];

export function Artists() {
  return (
    <section className={styles.container}>
      <h3>Melhores <strong>Artistas</strong></h3>

      <ul className={styles.artistsList}>
        { MOCK_ARTISTS.map(artist => (
          <li className={styles.artist} key={artist.name}>
            <Image src={artist.url} alt={artist.name} />
            <p>{artist.name} <span>{artist.qtd_photos} Fotografias</span></p>
          </li>
        )) }
      </ul>

      <p className={styles.seeAll}>
        <Link href="#">
          <a>Ver todos os artistas</a>
        </Link>
        <Image src={ArrowRight} height={15} />
      </p>
    </section>
  );
}