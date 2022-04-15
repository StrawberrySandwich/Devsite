import React, {useState} from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Dynamic from 'containers/Dynamic'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {

  const [isDarkMode, setIsDarkMode] = useState()

  const onSwapTheme = () => {
    setIsDarkMode(!isDarkMode)
    //console.log(isDarkMode)
  }

  return (
    <Root>
      <div className="page-container">
        <Header isDarkMode={isDarkMode} onSwapTheme={onSwapTheme}/>
        <div className="content">
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
        <Footer/>
      </div>
    </Root>
  )
}

export default App
