import React from 'react'
import { Link } from 'components/Router'

import NavLink from './NavLink'
import logo from '../ss1t.png'

export default function Header(props) {
  return(
    <nav>
      <view style={{ width: 100, height: 50, aspectRatio: 1}}>
        <Link to="/">
          <img style={{widtch: "100%", height: '100%', resizeMode: 'stretch'}} src={logo} alt="Logo"/>
        </Link>
      </view>
      <div>
        <NavLink className="menu" to="/">Home</NavLink>
        <NavLink className="menu" to="/about">About</NavLink>
        <NavLink className="menu" to="/blog">Blog</NavLink>
        <NavLink className="menu" to="/contact">Contact</NavLink>
        <div className="menu" style={{cursor: 'pointer'}} onClick={props.onSwapTheme}>
          {props.isDarkMode ? 'Dark' :'Light'}
        </div>
      </div>
    </nav>
  )
}
