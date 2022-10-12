import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index';

const Shop = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch) ;

  return (
    <div className='container'>
      <h2>Deposit/Withdraw Money</h2>
      <div className='d-flex'>
        <button className='btn btn-primary mx-2' onClick={()=>{actions.withdrawMoney(100)}}>-</button>
        <p>Update Balance</p>
        <button className='btn btn-primary mx-2 'onClick={()=>{actions.depositMoney(100)}}>+</button>
      </div>
    </div>
  )
}

export default Shop