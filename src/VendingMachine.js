
import { Link } from 'react-router-dom';
import './VendingMachine.css';

const VendingMachine = () => {
  return (
    <div className='VendingMachine'>
      <div>
        <img src='images/vending-machine-clipart.svg' alt='Vending Machine' />
      </div>
      <div>
        <Link exact to='/cheetos'>Cheetos</Link> <Link exact to='/steak'>Steak</Link> <Link exact to='/gummy-bears'>Gummy Bears</Link>
      </div>
    </div >
  );
}

export default VendingMachine;