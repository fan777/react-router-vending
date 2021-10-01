import { Link } from 'react-router-dom';
const Cheetos = () => {
  return (
    <div>
      <h2>Cheesy dust</h2>
      <img src='images/food-transparent-background-13.png' alt='Cheetos' />
      <div>
        <Link exact to='/'>Go back</Link>
      </div>

    </div>
  )
}

export default Cheetos;