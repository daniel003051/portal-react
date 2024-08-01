type ResponseWrapper<T> = {
  result: T
}

export type UnsettledItem = {
  count: number
  guest: boolean
  icon: string
  id: string
  name: string
  spaceId: null
}

export type UnsettledItems = ResponseWrapper<{
  assignedAppList: UnsettledItem[]
}>
