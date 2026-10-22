import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Navigation } from 'swiper/modules';
import styles from "../styles/Skills.module.scss";
import TechRating from '../components/TechRating';
import { getSkills } from './api/skills';
import 'swiper/css';
import 'swiper/css/effect-cube';

const Skill = ({ skills }) => {
  return (
    <>
      <div className={styles.skills}>

        <div className={styles.naviBtns}>
          <button className='swiper-button-prev'>
            <img src="/icons/arrow-left.svg" alt="arrow-left" />
          </button>
          <button className='swiper-button-next'>
            <img src="/icons/arrow-right.svg" alt="arrow-right" />
          </button>
        </div>
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={true}
          modules={[EffectCube, Navigation]}
          className={styles.swiper}
        >
          {
            Object.keys(skills).map((category, key) => (
              <SwiperSlide className={styles.swiperSlide} key={key}>
                <div className={styles.title}>{category}</div>
                <div className={styles.techstack}>
                  {
                    Object.entries(skills[category]).map(([skill, rating]) => (
                      <TechRating tech={skill} rating={rating} />
                    ))
                  }
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const skills = getSkills();
  return {
    props: { title: 'Skills', skills },
  };
}


export default Skill;