import { useReducer } from "react";
import MenuItems from "./components/MenuItems";
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import TipPercentForm from "./components/TipPercentForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {

  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className=" bg-teal-300 py-5">
        <h1 className=" text-center text-4xl font-black ">
          {" "}
          Calculadora de porpinas y consumo
        </h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className=" font-black text-4xl"> Menu</h2>

          <div className=" space-y-3 mt-10">

            {menuItems.map(item => (
              <MenuItems
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>

        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state.order.length > 0 ? (
            <>
              <OrderContents
                order={state.order}
                dispatch={dispatch}
              />
    
              <TipPercentForm
                tip={state.tip}
                dispatch={dispatch}
              />
              <OrderTotal
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />          
            </>
          )
          :(
            <p className="text-center text-2xl"> Orden vacia</p>
          )
        }
        </div>
      </main>
    </>
  );
}

export default App;
