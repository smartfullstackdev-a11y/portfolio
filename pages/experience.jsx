import { getExperiences } from './api/experience';
import { getEducation } from './api/education';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, EffectCards, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/effect-creative"
import styles from '../styles/Experience.module.scss';

const Experience = ({ experiences, education }) => {

  return (
    <>
      <div className={styles.container}>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[Scrollbar, EffectCards]}
          className={styles.expSwiper}
        >
          {
            experiences.map((experience, key) => (
              <SwiperSlide key={key} className={styles.swiperSlide}>
                <div className={styles.cover} style={{ '--background': `url(/imgs/experience/${experience.company}/bg.png)` }}></div>
                <div className={styles.swiperCard}>
                  <div>
                    <div className={styles.role}>{experience.role}</div>
                    <div className={styles.justifyBetween}>
                      <div className={styles.companyName}>{experience.company}</div>
                      <div>{experience.period}</div>
                    </div>
                    <div className={styles.companyIcons}>
                      {
                        experience.links.map((social, key) => {
                          const icon = Object.keys(social)[0];
                          const link = social[icon];

                          return (
                            <a target="_blank" href={link} key={key}>
                              <img src={`/icons/${icon}.svg`} alt={icon} />
                            </a>
                          );
                        })
                      }
                    </div>
                    <div className={styles.smSwiperContainer}>
                      <Swiper
                        effect={'creative'}
                        grabCursor={true}
                        className={styles.smSwiper}
                        loop={true}
                        modules={[Autoplay, EffectCreative]}
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        creativeEffect={{
                          "prev": {
                            "shadow": true,
                            "origin": "left center",
                            "translate": [
                              "-5%",
                              0,
                              -200
                            ],
                            "rotate": [
                              0,
                              100,
                              0
                            ]
                          },
                          "next": {
                            "origin": "right center",
                            "translate": [
                              "5%",
                              0,
                              -200
                            ],
                            "rotate": [
                              0,
                              -100,
                              0
                            ]
                          }
                        }}
                      >
                        {
                          new Array(5).fill(0).map((val, index) => (
                            <SwiperSlide>
                              <img src={`/imgs/experience/${experience.company}/${index + 1}.png`} alt="experience" />
                            </SwiperSlide>
                          ))
                        }
                      </Swiper>
                      <div className={styles.about}>
                        About
                        <div style={{ marginTop: '8px' }}>
                          {experience.description}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.desc}>
                    Achievements
                    <ul>
                      {
                        new Array(3).fill(0).map((val, index) => (
                          <li>{experience.achievements[index]}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper >
        <div className={styles.education}>
          <div className={styles.title}>
            {education.degree}
          </div>
          <div className={styles.university}>
            <div>
              {education.university}
            </div>
            <div className={styles.duration}>
              {education.period}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const experiences = getExperiences();
  const education = getEducation();

  return {
    props: { title: 'Experience', experiences, education },
    revalidate: 60
  };
}

export default Experience;
