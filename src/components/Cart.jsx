import { useCartContext } from "../context/CartContext"
import CartWithItems from '../components/CartWithItems';
import CartEmpty from '../components/CartEmpty';

function Cart() {

  const { cartList } = useCartContext();

  return (

    <>
      {cartList.length > 0 ?
        <CartWithItems />
        :
        <CartEmpty />
      }
    </>
  )
}

export default Cart