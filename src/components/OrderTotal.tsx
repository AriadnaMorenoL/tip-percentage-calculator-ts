import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";
import { OrderActions } from "../reducers/order-reducer";

type OrderTotalProps = {
  order: OrderItem[]
  tip: number
  dispatch: React.Dispatch<OrderActions>
}

export default function OrderTotal({order, tip, dispatch}: OrderTotalProps) {

  const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

  const orderTotal = useMemo(() => subtotalAmount + tipAmount, [tip, order])

  return (
    <>
      <div className="space-y-3">
        <h2 className=" font-black text-2xl">Total y propinas</h2>
        <p>Subtotal a pagar: {''}
          <span className="font-black">{formatCurrency(subtotalAmount)}</span>
        </p>

        <p>Propina: {''}
          <span className="font-black">{formatCurrency(tipAmount)}</span>
        </p>

        <p>Total a pagar: {''}
          <span className="font-black">{formatCurrency(orderTotal)}</span>
        </p>

      </div>
      <button
        className=" w-full bg-blue-600 p-3 uppercase text-white font-bold mt-10 disabled:opacity-30"
        disabled={orderTotal === 0}
        onClick={() => dispatch({type : 'place-order'})}
      >
        Guardar Orden
      </button>
    </>
  )
}
