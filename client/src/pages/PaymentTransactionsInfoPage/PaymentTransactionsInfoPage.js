import React from 'react';
import Header from '../../components/Header/Header';
import styles from './PaymentTransactionsInfoPage.module.sass'
import Footer from '../../components/Footer/Footer';

const PaymentTransactionsInfoPage = () => {
    return (
        <div>
            <Header/>
            <div className={styles.container}>
                <table>
                    <caption>all transactions</caption>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>earned</td>
                        <td>+350$</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>spent</td>
                        <td>-350$</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>earned</td>
                        <td>+200$</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>spent</td>
                        <td>-200$</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    );
};

export default PaymentTransactionsInfoPage;