import { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPercentFormProps = {
  dispatch: React.Dispatch<OrderActions>
  tip: number
}
export default function TipPercentForm({dispatch, tip} : TipPercentFormProps) {
  return (
    <div>
      <h3 className=" font-black text-2xl">Propinas</h3>
      <form>
        {tipOptions.map(tipOp => (
          <div key={tipOp.id} className="flex gap-4">
            <label htmlFor={tipOp.id}>{tipOp.label}</label>
            <input
              id={tipOp.id}
              type="radio"
              name="tip"
              value={tipOp.value}
              onChange={e => dispatch({type: 'add-tip', payload : {value : +e.target.value}})}
              checked={tipOp.value === tip}
            
            />
          </div>
        ))}
      </form>
    </div>
  )
}
