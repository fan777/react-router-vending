import { Link } from 'react-router-dom';
const GummyBears = () => {
  return (
    <div>
      <h2>Chewy Screams</h2>
      <img src='images/gummy-bear-silhouette-21.png' alt='Cheetos' />
      <div>
        <Link exact to='/'>Go back</Link>
      </div>

    </div>
  )
}

export default GummyBears;