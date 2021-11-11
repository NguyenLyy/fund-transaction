import React from 'react'
import {Link} from "react-router-dom";

const Transaction = () => {
    return (
        <>
            <div className="transaction-header-container">
                <div className="base1"></div>
                <div className="base2">
                    <div className="phone-ui">
                        <div className="fund-balance">
                            <p className="ab">Account Balance</p>
                            <p className="amount">$50,000</p>
                            <p className="acc-num">Account no: <span className="acc-number">6156738012</span></p>
                            <div className="buttons">
                            <Link className="add-money"><img src="https://img.icons8.com/material-outlined/20/ffffff/add.png" alt=""/ >&nbsp;Add money</Link>
                            <Link className="send-money"><img src="https://img.icons8.com/material-outlined/20/ffffff/filled-sent.png" alt=""/>&nbsp;Send money</Link>
                            </div>
                        </div>
                        <div className="dot-container">
                            <div className="dot1"></div>
                           
                        </div>
                        <div className="quick-action">
                            <p className="qa">Quick actions</p>
                            <div className="actions-container">
                                <div className="loans">
                                    <img className="loan-img" src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/40/000000/external-loan-due-diligence-icongeek26-linear-colour-icongeek26.png" alt=""/>
                                    <p className="loan-text">Loans</p>
                                </div>
                                <div className="airtime">
                                <img className="airtime-img" src="https://img.icons8.com/ios-filled/40/000000/shake-phone.png" alt=""/>
                                    <p className="loan-text">Airtime</p>
                                </div>
                                <div className="pay-bills">
                                <img className="pay-bills-img" src="https://img.icons8.com/external-justicon-lineal-justicon/40/000000/external-payment-working-from-home-justicon-lineal-justicon.png" alt=""/>
                                    <p className="loan-text">Pay bills</p>
                                </div>
                            </div>
                        </div>
                        <div className="transaction-history">
                        <p className="ta">Transactions</p>
                        <div className="no-transaction">
                        <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/50/3ea176/external-list-approved-and-rejected-bearicons-glyph-bearicons-1.png" alt=""/>
                            <p className="ntheader">No transactions yet</p>
                            <p className="no-transaction-text">You've not performed any transactions yet. <br />
                            When you do, they will appear here.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transaction
