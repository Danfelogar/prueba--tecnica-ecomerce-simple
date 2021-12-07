


export const ProductBasket = () => {
return (
  <div className="Cart-Container">
        <div className="basket">
            <div className="basket-labels">
              <ul>
                <li className="item item-heading">Item</li>
                <li className="price">Price</li>
                <li className="quantity">Quantity</li>
                <li className="subtotal">Subtotal</li>
              </ul>
            </div>
          <div className="basket-product">
            <div className="item">
              <div className="product-image">
                <img src="http://placehold.it/120x166" alt="Placholder Image2" className="product-frame"/>
              </div>
              <div className="product-details">
                <h1><strong><span className="item-quantity">4</span> x Eliza J</strong> Lace Sleeve Cuff Dress</h1>
                <p><strong>Navy, Size 18</strong></p>
                <p>Product Code - 232321939</p>
              </div>
            </div>
            <div className="price">26.00</div>
            <div className="quantity">
              <input type="number" value="4" min="1" className="quantity-field"/>
            </div>
            <div className="subtotal">104.00</div>
            <div className="remove">
              <button>Remove</button>
            </div>
          </div>
          <div className="basket-product">
            <div className="item">
              <div className="product-image">
                <img src="http://placehold.it/120x166" alt="Placholder Image2" className="product-frame"/>
              </div>
              <div className="product-details">
                <h1><strong><span className="item-quantity">1</span> x Whistles</strong> Amella Lace Midi Dress</h1>
                <p><strong>Navy, Size 10</strong></p>
                <p>Product Code - 232321939</p>
              </div>
            </div>
            <div className="price">26.00</div>
            <div className="quantity">
              <input type="number" value="1" min="1" className="quantity-field"/>
            </div>
            <div className="subtotal">26.00</div>
            <div className="remove">
              <button>Remove</button>
            </div>
          </div>
        </div>
    <aside>
      <div className="summary">
        <div className="summary-total-items"><span className="total-items"></span> Items in your Bag</div>
        <div className="summary-total">
          <div className="total-title">Total</div>
          <div className="total-value final-value" id="basket-total">130.00</div>
        </div>
        <div className="summary-checkout">
          <button className="checkout-cta">Go to Secure Checkout</button>
        </div>
      </div>
    </aside>
  </div>
    )
}
