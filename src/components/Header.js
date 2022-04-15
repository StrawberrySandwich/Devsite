import React from 'react'
import { Link } from 'components/Router'

import ThemeButton from './ThemeButton'
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
        <ThemeButton isDarkMode={props.isDarkMode} onClick={props.onSwapTheme}/>
      </div>
    </nav>
  )
}
