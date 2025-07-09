// components/layout/Footer.tsx
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.about}>
          <h3 className={styles.logo}>MD Shuttles</h3>
          <p>&quot;Safe, Reliable, and Efficient Transportation and Delivery Solutions&quot;</p>
        </div>
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/packages">Packages</Link></li>
            <li><Link href="/book">Book Now</Link></li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>129 Beaufort St, Goodwood, Cape Town</p>
          <p>Phone: 073 835 8504</p>
          <p>Email: info@mdshuttles.co.za</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © {new Date().getFullYear()} MD Shuttles | Built with ♥  by coderon</p>
      </div>
    </footer>
  );
};

export default Footer;