import React from 'react'
import '../css/loanOne.css'

const LoanSecOne = () => {
  return (
    <div className='Loans'>
        <div className="activeLoans">
                <div className="card">
                    <div className="container">
                        <h1 className='h1'>Active Loan</h1>
                    <div className="right">
                    <div className="text-wrap">
                        <p className="text-content">
                            <div className="interest">
                                <p><b>Interest</b> 5.5%</p>
                            </div>
                            <div className="interest">
                                <p><b>Tenute EMI: </b>5.5%</p>
                            </div>
                            <div className="interest">
                                <p><b>Next Due:</b> 5 Jul, 2024</p>
                            </div>
                        </p>
                        <p className="time">Loan took 16 Months Ago</p>
                    </div>
                    <div className="button-wrap">
                        <button className="primary-cta">View More</button>
                        <button className="secondary-cta">Pay Now</button>
                    </div>
                    </div>
                    </div>
                </div>
        </div>

        <div className="History">
            <div className="card">
                    <div className="container">
                        <h1 className="h1">Previous Loan</h1>
                        <div className="right">
                        <div className="text-wrap">
                            <p className="text-content">
                                <div className="interest">
                                    <p><b>Loan Amount</b> 100000000</p>
                                </div>
                                <div className="interest">
                                    <p><b>Loan Interest: </b>5.5%</p>
                                </div>
                                <div className="interest">
                                    <p><b>Loan Paid On:</b> 5 Jun, 2023</p>
                                </div>
                            </p>
                            <p className="time">Loan took 1 Year Ago</p>
                        </div>
                        <div className="button-wrap">
                            <button className="primary-cta">View More</button>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default LoanSecOne
