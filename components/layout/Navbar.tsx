import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          MD Shuttles
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link href="/book" className={styles.ctaButton}>
          Book Now
        </Link>
      </div>
    </header>
  );
};

export default Navbar;