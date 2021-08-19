import '../Header/Header.css';

function Header() {
  return (
    <div className="test">
      <ul className="navmene">
        <li className="navitems">
          <a href="#"> tree </a>{' '}
        </li>{' '}
        <li className="navitems">
          <a href="#"> tranaction </a>{' '}
        </li>{' '}
        <li className="navitems">
          <a href="#"> post </a>{' '}
        </li>{' '}
        <li className="navitems">
          <a href="#"> reports </a>{' '}
        </li>{' '}
      </ul>{' '}
    </div>
  );
}

export default Header;
