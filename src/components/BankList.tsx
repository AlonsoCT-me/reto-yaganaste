import React from 'react';
import { Bank } from '@/types/bank';
import styles from '@/styles/BankList.module.scss';

interface BankListProps {
  banks: Bank[];
}

const BankList: React.FC<BankListProps> = ({ banks }) => {
    return (
      <div className={styles['bank-list-container']}>
        <h1 className={styles['bank-list-title']}>Lista de bancos registrados:</h1>
        <ul className={styles['bank-list']}>
          {banks.map((bank, index) => (
            <li key={index} className={styles['bank-list-item']}>
              <span className={styles['bank-list-logo']}>
              <img src={bank.url} title={`${bank.bankName}`} alt={`${bank.bankName} logo`} className={styles['bank-logo-img']} />
              </span>
              <div className={styles['bank-details']}>
                <h2>{bank.bankName}</h2>
                <p className="description">Slogan: {bank.description}</p>
                <p className="age">Años: {bank.age}</p>
                <a href={bank.url} target="_blank" rel="noopener noreferrer">Ver sitio web</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default BankList;