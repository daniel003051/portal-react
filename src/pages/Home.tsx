import { Swiper, SwiperSlide } from 'swiper/react'
import s from './Home.module.scss'
import 'swiper/css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUnsettledList, selectList } from '../store/slice/unsettledList'
import type { AppDispatch } from '../store'
import { Link } from 'react-router-dom'

const Home = () => {
  const dispatch: AppDispatch = useDispatch()
  const states = useSelector(selectList)

  useEffect(() => {
    if (states.fetched) return
    dispatch(fetchUnsettledList())
  }, [])

  return (
    <>
      <div className={s['check-list']}>
        <section>
          <h2>Hello! Daniel!</h2>

          <Swiper spaceBetween={12} normalizeSlideIndex={false}>
            {states.unsettledList.map((item) => (
              <SwiperSlide key={item.id} className={s['item']}>
                <img src={item.icon} alt="" />
                <p>
                  {item.name}: <span> {item.count}</span>
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section>
          <h2>
            空間 <Link to="/space">看更多</Link>
          </h2>
          <ul className={s['space-list']}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <li key={i}>
                <img
                  src="https://static.cybozu.com/contents/k/image/icon/app/document.png"
                  alt=""
                />
                <p>交際費申請</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}

export default Home
