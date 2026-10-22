import styles from "../styles/Rating.module.scss";
import { Rating } from 'react-simple-star-rating'

const TechRating = ({ tech, rating }) => {
  return (
    <>
      <div className={styles.container}>
        <div>{tech}</div>
        <Rating size={17} fillColorArray={new Array(10).fill('#1779db')} iconsCount={10} readonly initialValue={rating} />
      </div>
    </>
  );
}

export default TechRating;