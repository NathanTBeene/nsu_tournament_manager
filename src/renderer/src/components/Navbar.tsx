import { Link } from 'react-router-dom'
import './../css/Navbar.css'
import { FaGamepad } from 'react-icons/fa'
import { RiTeamFill } from 'react-icons/ri'
import { MdOutlineHistory } from 'react-icons/md'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <FaGamepad />
      </Link>
      <Link to="/teams">
        <RiTeamFill />
      </Link>
      <Link to="/">
        <MdOutlineHistory />
      </Link>
    </nav>
  )
}
export default Navbar
