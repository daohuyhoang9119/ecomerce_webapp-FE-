import { useTranslate } from "../../../core/Translate"

export default function ListCartItem(props){
    let {t} = useTranslate();
    return (
        <li className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-4">
                      {/* Image */}
                      <a href="product.html">
                        <img
                          src={props.thumbnail_url}
                          alt="..."
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="col">
                      {/* Title */}
                      <p className="mb-4 font-size-sm font-weight-bold">
                        <a className="text-body" href="product.html">
                          {t(`${props.name}`)}
                        </a>{" "}
                        <br />
                        <span className="text-muted">{props.real_price} VND</span>
                      </p>
                      {/* Text */}
                      <div className="font-size-sm text-muted">
                        Số lượng: {props.numCart}                         
                      </div>
                    </div>
                  </div>
                </li>
    )
}