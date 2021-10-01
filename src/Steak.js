import { Link } from 'react-router-dom';
const Steak = () => {
  return (
    <div>
      Juicy steak
      <Link exact to='/'>Go back</Link>
    </div>
  )
}

export default Steak;