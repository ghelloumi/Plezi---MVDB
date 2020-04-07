import React from 'react'
import './styles/App.scss'
import AppHeader from './components/organisms/AppHeader'
import MoviesPage from './components/pages/MoviesPage'

const App = () => {
  return (
      <div className="App">
          <AppHeader />
          <MoviesPage />
      </div>
  )
}

export default App
