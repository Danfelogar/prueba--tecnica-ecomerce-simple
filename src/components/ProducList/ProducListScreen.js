import { useProducts } from "../../hooks/useProducts"

export const ProducList = () => {

    const { list,handleGetAddBasketProduct } = useProducts();

    return (
        <div>
            <div className="container text-center">
                <h1>Productos</h1>
            </div>
            {
                list.map((item,idx)=>{
                    return(
                    <div key={idx} className="shell">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-3">
                                <div className="wsk-cp-product">
                                <div className="wsk-cp-img">
                                    <img src={item.referencia.foto} alt={item.nombre} className="img-responsive" />
                                </div>
                                <div className="wsk-cp-text">
                                    <div className="category">
                                    <span>{item.nombre}</span>
                                    </div>
                                    <div className="description-prod">
                                    <p>{item.referencia.descripcion}</p>
                                    </div>
                                    <div className="card-footer">
                                    <div className="wcf-left"><span className="price">{item.total}</span></div>
                                    <div
                                    className="wcf-right"
                                    onClick={(e)=>handleGetAddBasketProduct(item.id,item.referencia.foto,item.nombre,item.referencia.descripcion,item.total,e)}
                                    ><a href="/product/list" className="buy-btn"><i className="fas fa-shopping-basket"></i></a></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}
