import s from './CheckList.module.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUnsettledList, selectList } from '../store/slice/unsettledList'
import type { AppDispatch } from '../store'

const About = () => {
  const dispatch: AppDispatch = useDispatch()
  const states = useSelector(selectList)

  useEffect(() => {
    if (states.fetched) return
    dispatch(fetchUnsettledList())
  }, [])

  return (
    <>
      <h1 className={s['check-list__title']}>未完成清單</h1>
      <ul className={s['check-list']}>
        {states.unsettledList.map((item) => (
          <li className={s['check-list__item']} key={item.id}>
            <a href={`${item.id}/?bview=ASSIGN`}>
              <img className={s['item__img']} src={item.icon} alt="" />
              <div className={s['item__wrap']}>
                <p className={s['item__name']}>{item.name}</p>
                <p className={s['item__num']}>待處理項目：{item.count}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default About
