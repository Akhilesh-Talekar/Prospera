import React from 'react'

const AccountOpeningCharges = () => {
  return (
    <div className='container p-5 border-top'>
      <h3>Charges for account <span style={{color:"#0d6efd"}}>opening</span></h3>
      <div className='table-container'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Type of account</th>
                    <th>Charges</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Online account</td>
                    <td><span className='free-tag'>Free</span></td>
                </tr>
                <tr>
                    <td>Offline account</td>
                    <td><span className='free-tag'>Free</span></td>
                </tr>
                <tr>
                    <td>NRI account(offline only)</td>
                    <td>₹ 500</td>
                </tr>
                <tr>
                    <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                    <td>₹ 500</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default AccountOpeningCharges
