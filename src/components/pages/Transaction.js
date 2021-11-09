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
                            <Link className="add-money">Add money</Link>
                            <Link className="send-money">Send money</Link>
                            </div>
                        </div>
                        <div className="quick-action"></div>
                        <div className="transaction-history"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transaction
