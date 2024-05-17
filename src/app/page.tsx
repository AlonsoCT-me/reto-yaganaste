import React from 'react';
import BankList from '@/components/BankList';

async function getBanks() {
  const response = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks', {
    cache: "no-store",
  });
  return await response.json();
}

export default async function Home() {
  const banks = await getBanks();

  return <BankList banks={banks} />
};