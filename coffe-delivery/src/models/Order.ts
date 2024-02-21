import { OrderInfo } from '@/pages/Checkout'
import { IItem } from './Cart'

export interface Order extends OrderInfo {
  id: number
  items: IItem[]
}
