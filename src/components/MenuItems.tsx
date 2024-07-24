import { formatCurrency } from "../helpers"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
  item: MenuItem
  dispatch: React.Dispatch<OrderActions>
}
export default function MenuItems({item, dispatch} : MenuItemProps) {
  return (
    <button 
      className="border-2 border-teal-300 hover:bg-teal-100  w-full p-3 flex justify-between"
      onClick={() => dispatch({type : 'add-item',payload : {item}})}
      >
      
      <p className=" ">{item.name}</p>
      <p className="font-black"> {formatCurrency( item.price)}</p>
    </button>
  )
}