import styles from '../styles/Story.module.scss';
import Link from 'next/link';

const StoryPage = () => {
  return (
    <div className={styles.story}>
      <h1>🚀 Journey to Digital Success: The Software Engineer's Story</h1>

      <h2>Chapter 1: The Spark of Innovation</h2>

      <p>Once upon a time in the bustling city of Cedar Park, there lived a software engineer named Kevin. Kevin had a passion for solving problems and creating digital magic. With a knack for turning the most tangled code into a symphony of seamless functionality, Kevin's reputation began to grow.</p>

      <ul>
        <li><strong>Unmatched Expertise:</strong> Known for mastery in multiple programming languages.</li>
        <li><strong>Creative Solutions:</strong> Thinking outside the box was second nature.</li>
        <li><strong>Attention to Detail:</strong> Every pixel, every line of code meticulously crafted.</li>
      </ul>

      <h3>The Challenge Accepted</h3>

      <p>One day, a local business approached Kevin with a challenge that many before had deemed impossible. They needed an innovative application to streamline their operations and outshine the competition.</p>

      <h2>Chapter 2: The Crafting of a Masterpiece</h2>

      <h3>The Workshop</h3>

      <p>Kevin delved deep into the toolbox of technology:</p>

      <ul>
        <li><strong>Agile Methodologies:</strong> Adopted to ensure adaptability and timely delivery.</li>
        <li><strong>Cutting-Edge Technologies:</strong> Utilized to provide the best possible user experience.</li>
        <li><strong>Robust Architecture:</strong> Implemented to guarantee scalability and security.</li>
      </ul>

      <h3>Trial by Fire</h3>

      <p>Through sleepless nights and endless cups of coffee, Kevin transformed ideas into code. Testing, refining, and enhancing until the application wasn't just functional — it was a work of art.</p>

      <h2>Chapter 3: A Triumph of Technology</h2>

      <h3>The Big Reveal</h3>

      <p>At last, the day arrived. Amidst an air of expectancy, the application was launched. It was more than just a solution; it was a game-changer. Users marveled at its elegance and ease of use. The business flourished, setting new industry standards overnight.</p>

      <ul>
        <li className="highlight"><strong>Thriving Users:</strong> Their efficiency doubled, and their satisfaction soared.</li>
        <li className="highlight"><strong>A Business Transformed:</strong> Profits skyrocketed as the application drew acclaim.</li>
        <li className="highlight"><strong>An Engineer Celebrated:</strong> Kevin became the go-to software engineer in Sokal.</li>
      </ul>

      <h2>Epilogue: Your Story Awaits</h2>

      <p>Now, imagine what Kevin could do for your business. Whether you're seeking to revolutionize your industry or simply improve your day-to-day operations, Kevin is ready to embark on this journey with you.</p>

      <ul>
        <li><strong>Your Vision Realized:</strong> Bring your ideas to life with unmatched technical prowess.</li>
        <li><strong>Your Goals Achieved:</strong> Surpass your objectives with innovative software solutions.</li>
        <li><strong>Your Success Assured:</strong> Join forces with a software engineer who crafts victories.</li>
      </ul>

      <div className={styles.contact}>
        <h2>★ Let the Adventure Begin! ★</h2>

        <p><Link href="/contact">Contact Kevin</Link>  today, and transform your vision into a digital reality that captivates clients and eclipses competitors. Your quest for excellence ends here, with a software engineer who not only codes but creates legacies.</p>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Story' },
  };
}

export default StoryPage;
