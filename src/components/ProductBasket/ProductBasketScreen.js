
import { useProducts } from "../../hooks/useProducts";


export const ProductBasket = () => {

  const { basketProducts,handleGetDeleteBasketProduct,handleAdd,
    handleLess } = useProducts();

  return (
    <div className="Cart-Container">
        <div className="basket">
          {
            basketProducts.map((basketProduct,idx)=>{

                const less =()=>{
                  if(basketProduct.amount !== 1){
                    handleLess(basketProduct.id)
                  }
                }

              return(
              <div key={idx} className="basket-product">
                <div className="item">
                  <div className="product-image">
                    <img
                    src={basketProduct.foto}
                    alt={basketProduct.nombre}
                    className="product-frame"/>
                  </div>
                  <div className="product-details">
                    <h1>{basketProduct.descripcion}</h1>
                    <p><strong>{basketProduct.nombre}</strong></p>
                  </div>
                </div>
                <div className="price">{basketProduct.total}</div>
                <div className="quantity">
                <button className="less"  onClick={less}>-</button>
                <h2> { basketProduct.amount } </h2>
                <button className="plus" onClick={()=>handleAdd(basketProduct.id)}>+</button>
                </div>
                <div className="subtotal">{basketProduct.amount*basketProduct.total}</div>
                <div className="remove">
                  <button
                  onClick={()=>handleGetDeleteBasketProduct(basketProduct.id)}
                  >Borrar</button>
                </div>
              </div>
              )
            })
          }
        </div>
    <aside>
      <div className="summary">
        <div className="summary-total-items"><span className="total-items"></span> Items in your Bag</div>
        <div className="summary-total">
          <div className="total-title">Total</div>
          <div className="total-value final-value" id="basket-total">{
            basketProducts.map(product=>product.amount * product.total).reduce((prev, curr) => prev + curr, 0)
          }</div>
        </div>
        <div className="summary-checkout">
          <button className="checkout-cta">Ir a Pago seguro</button>
        </div>
      </div>
    </aside>
  </div>
    )
}
