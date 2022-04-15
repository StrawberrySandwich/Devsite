import React from 'react'
import { Link, useLocation } from 'components/Router'

export default function NavLink(props) {
  var isActive = useLocation().pathname === props.to;
  var className = isActive ? 'active' : props.className;

  console.log('isActive;' + isActive)

  return(
      <Link className={className} to={props.to}>
          {props.children}
      </Link>
  );
}
