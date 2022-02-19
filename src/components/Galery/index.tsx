import Image from 'next/image';
import styles from './styles.module.scss';

import GaleryImage1 from '../../assets/galeria-1.png';
import GaleryImage2 from '../../assets/galeria-2.png';
import GaleryImage3 from '../../assets/galeria-3.png';
import GaleryImage4 from '../../assets/galeria-4.png';
import GaleryImage5 from '../../assets/galeria-5.png';
import GaleryImage6 from '../../assets/galeria-6.png';
import GaleryImage7 from '../../assets/galeria-7.png';
import GaleryImage8 from '../../assets/galeria-8.png';

type ImageProps = {
  url: StaticImageData;
  alt: string;
};

const MOCK_IMAGES: ImageProps[] = [
  {
    url: GaleryImage1,
    alt: 'First Galery Image'
  },
  {
    url: GaleryImage2,
    alt: 'Second Galery Image'
  },
  {
    url: GaleryImage3,
    alt: 'Third Galery Image'
  },
  {
    url: GaleryImage4,
    alt: 'Fourth Galery Image'
  },
  {
    url: GaleryImage5,
    alt: 'Fifth Galery Image'
  },
  {
    url: GaleryImage6,
    alt: 'Sixth Galery Image'
  },
  {
    url: GaleryImage7,
    alt: 'Seventh Galery Image'
  },
  {
    url: GaleryImage8,
    alt: 'Eighth Galery Image'
  },
];

export function Galery() {
  return (
    <section className={styles.gallery}>
      { MOCK_IMAGES.map(image => (
        <Image key={image.alt} src={image.url} />
      )) }
    </section>
  );
}