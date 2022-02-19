import Image from 'next/image';
import styles from './styles.module.scss';
import Banner from '../../assets/banner.png';

export function Metrics() {
  return (
    <section className={styles.container}>
      <div className={styles.metrics}>
        <p>
          <strong>10K+</strong>
          Artes
        </p>
        <p>
          <strong>200+</strong>
          Vendas
        </p>
        <p>
          <strong>20</strong>
          Artistas
        </p>
      </div>

      <div className={styles.postsContainer}>
        <div className={styles.posts}>
          <div className={styles.post}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id potenti diam et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.
            </p>
            <a href="#">Lorem Ipsum</a>
          </div>
          <div className={styles.post}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id potenti diam et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.
            </p>
            <a href="#">Lorem Ipsum</a>
          </div>
        </div>

        <Image src={Banner} />
      </div>
    </section>
  )
}