import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/effect-creative"
import styles from '../styles/ProjectCard.module.scss';
import badges from "../pages/api/data/badges.json";

const ProjectCard = ({ title, desc, link, skillset = [] }) => {
  return (
    <>
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
                <img src={`/imgs/project/${title}/${index + 1}.png`} alt="project" />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className={styles.descContainer}>
          <div className={styles.title}>
            <div>{title}</div>  <a target="_blank" href={link}><img src="/icons/link-open.svg" alt="open-link" /></a>
          </div>
          <div className={styles.desc}>{desc}
          </div>
          <div className={styles.skillset}>
            {
              skillset.map((skill, key) => (
                <img key={key} src={badges[skill]} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
