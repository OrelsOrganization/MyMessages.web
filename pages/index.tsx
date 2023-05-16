import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css'
const Button = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/policy');
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleClick}>
        Go to Policy
      </button>
    </div>
  );
};

export default Button;
