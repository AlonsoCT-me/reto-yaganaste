import React, { useEffect, useState } from 'react';
import BankList from '@/components/BankList';
import { Bank } from '@/types/bank';
import loadingStyles from '@/styles/Loading.module.scss';
import styles from '@/styles/Home.module.scss';

const Home: React.FC = () => {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks', {
        mode: 'no-cors',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
          },
        });
        const data = await response.json();
        setBanks(data);
        setLoading(false);
      } catch (error) {
        console.error('Hubo un error al cargar la lista de bancos:', error);
        setLoading(false);
      }
    };

    fetchBanks();
  }, []);

  return loading ? (
    <div className={styles.home_wrapper}>
      <div className={loadingStyles.spinner}></div>
    </div>
  ) : (
    <BankList banks={banks} />

  );
};

export default Home;