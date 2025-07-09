import { allServices } from '@/data/services';
import styles from './services.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | MD Shuttles',
  description: 'Explore our wide range of transportation and tour services, from airport transfers to customized cultural tours.',
};

const ServicesPage = () => {
  return (
    <div className={styles.servicesPage}>
      <header className={styles.header}>
        <h1>Our Services</h1>
        <p>Reliable solutions for every transportation and touring need.</p>
      </header>

      <div className={styles.container}>
        <div className={styles.servicesGrid}>
          {allServices.map((service) => (
            <div key={service.id} id={service.id} className={styles.serviceBlock}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;