import s from './App.module.scss'
import { Outlet, useNavigate } from 'react-router-dom'
import BottomBar from './components/BottomBar'
import { Provider } from 'react-redux'
import store from './store'
import { useEffect } from 'react'

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/about')
  }, [navigate])

  return (
    <Provider store={store}>
      <div className={s['content']}>
        <Outlet />
        <BottomBar />
      </div>
    </Provider>
  )
}

export default App
