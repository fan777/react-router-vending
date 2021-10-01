import { Link } from 'react-router-dom';
const Steak = () => {
  return (
    <div>
      <h2>Juicy steak</h2>
      <img src='images/meat-transparent-png-1.png' alt='Cheetos' />
      <div>
        <Link exact to='/'>Go back</Link>
      </div>

    </div>
  )
}

export default Steak;