import React from 'react';
import BankList from '@/components/BankList';
import { Bank } from '@/types/bank';
import styles from '@/styles/Home.module.scss';

async function getBanks(): Promise<Bank[]> {
  try {
    const response = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks', {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error('No hay respuest del servidor:', response.status, response.statusText);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error('Error al cargar los datos:', error);
    return [];
  }
}

export default async function Home() {
  const banks = await getBanks();

  if (banks.length === 0) {
    return (
      <div className={styles.error_message}>
        <p>Error al cargar los datos</p>
      </div>
    );
  }

  return <BankList banks={banks} />;
};