
import { Link } from 'react-router-dom';
import './VendingMachine.css';

const VendingMachine = () => {
  return (
    <div className='VendingMachine'>
      Vending machine
      <Link exact to='/cheetos'>Cheetos</Link>
      <Link exact to='/steak'>Steak</Link>

    </div>
  );
}

export default VendingMachine;