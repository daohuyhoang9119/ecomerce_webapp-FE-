import { useTranslate } from "../../../core/Translate"
import { useSelector, useDispatch } from "react-redux";
import { removeWishList } from './../../../redux/action/authAction';
import { FormatCurrency } from './../../../utils/FormatCurrency';


export default function AccountWishlistItem(props){
    let {t} = useTranslate();
    const dispatch = useDispatch();

    const handleRemoveWishList = (e) =>{
        e.preventDefault();
        dispatch(removeWishList({...props}));
    }
    
    return (
        <div className="col-6 col-md-4">
          <div className="card mb-7">
            {/* Image */}
            <div className="card-img">
              {/* Action */}
              <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" onClick={handleRemoveWishList}>
                <i className="fe fe-x" />
              </button>
              {/* Button */}
              <button
                className="btn btn-xs btn-block btn-dark card-btn"
                data-toggle="modal"
                data-target="#modalProduct"
              >
                <i className="fe fe-eye mr-2 mb-1" /> {t(`Quick View`)}
              </button>
              {/* Image */}
              <img
                className="card-img-top"
                src={props.thumbnail_url}
                alt="..."
              />
            </div>
            {/* Body */}
            <div className="card-body font-weight-bold text-center">
              <a className="text-body" href="product.html">
                {props.name}
              </a>{" "}
              <br />
              <span className="text-muted">{FormatCurrency(props.real_price)} VND</span>
            </div>
          </div>
        </div>
    )
}