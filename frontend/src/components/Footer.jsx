import { NavLink } from 'react-router-dom'

function Footer() {
  const url = 'https://github.com/tonybnya';
  const text = 'tonbynya';

  return (
    <footer>
      <p>Copyright &copy; 2024 <NavLink to={url}>{text}</NavLink> All Rights Reserved.</p>
    </footer>
  )
}

export default Footer