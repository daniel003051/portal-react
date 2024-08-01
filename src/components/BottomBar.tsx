import s from './BottomBar.module.scss'
import { Link, useLocation } from 'react-router-dom'
import homeImg from '@img/home.png'
import commentImg from '@img/comment.png'
import checklistImg from '@img/checklist.png'
import favoriteImg from '@img/favorite.png'

const routePath = [
  {
    path: '/about',
    img: homeImg,
    text: '首頁',
  },
  {
    path: '/space',
    img: commentImg,
    text: '空間',
  },
  {
    path: '/favorite',
    img: favoriteImg,
    text: '收藏',
  },
  {
    path: '/checklist',
    img: checklistImg,
    text: '未處理',
  },
]

const BottomBar = () => {
  const location = useLocation()

  return (
    <ul className={s['bottom-bar']}>
      {routePath.map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            className={item.path === location.pathname ? s['is-selected'] : ''}
          >
            <img src={item.img} alt="" />
            <p>{item.text}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default BottomBar
