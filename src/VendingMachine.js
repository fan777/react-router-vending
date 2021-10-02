
import { Link } from 'react-router-dom';
import './VendingMachine.css';

const VendingMachine = () => {
  return (
    <div className='VendingMachine'>
      <h2>What do you want?!?!?</h2>
      <img src='images/vending-machine-clipart.svg' alt='Vending Machine' />
      <ul>
        <li><Link exact to='/cheetos'>Cheetos</Link> </li>
        <li><Link exact to='/steak'>Steak</Link> </li>
        <li> <Link exact to='/gummy-bears'>Gummy Bears</Link></li>
      </ul>
    </div >
  );
}

export default VendingMachine;