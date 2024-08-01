import axios from 'axios'
import type { GetAppsParams, UnsettledItems } from '../type'

const request = axios.create({
  baseURL: '/k/api',
  // headers: {
  //   'X-Requested-With': 'XMLHttpRequest',
  // },
})

// 取得首頁應用程式
export const getApps = (data: GetAppsParams) =>
  request.post('/app/list.json', data)

// 取得空間
export const getSpaces = (data: GetAppsParams) =>
  request.post('/space/list.json', data)

// 取得未處理清單
export const getUnsettledItems = (data: {
  includeGuestInfo: boolean
  size?: number
}) => request.post<UnsettledItems>('/app/listAssigned.json', data)

// 取得空間內的 app
export const getSpaceApps = (data: {
  offset: number
  size: number
  sortKey: 'NAME'
  spaceId: string
}) => request.post('/space/app/list.json', data)
