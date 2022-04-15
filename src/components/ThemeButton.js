import React, {useState} from 'react'

export default function ThemeButton(props) {
  var theTheme = props.isDarkMode ? 'Dark' :'Light';
  const [theme, setTheme] = useState()
  console.log('theme: ' + theme)


  const onClick = () => {
    props.onClick()
    console.log('isDark: ' + props.isDarkMode)
    theTheme = props.isDarkMode ? 'Dark' :'Light';
    setTheme(theTheme)
    console.log('theme: ' + theme)
  }

  return(
      <div className="menu" style={{cursor: 'pointer'}} onClick={onClick}>{theme}</div>
  );
}
