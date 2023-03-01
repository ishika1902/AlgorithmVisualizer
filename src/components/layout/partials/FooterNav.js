import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#">Contact</Link>
        </li>
        <li>
          {/* <Link to="#">About us</Link> */}
          <a href = "#About">About us</a>
        </li>
        <li>
          {/* <Link to="#0">View Algorithms</Link> */}
          <a href = "#Algorithms">View Algorithms</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;