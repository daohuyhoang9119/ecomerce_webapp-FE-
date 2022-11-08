import {Link} from "react-router-dom";
import Skeleton from '@material-ui/lab/Skeleton';
import {useDispatch, useSelector} from "react-redux";
import { addCart } from "../../../redux/action/cartAction";
import { productViewAction} from './../../../redux/action/productAction';
import { addWishList } from './../../../redux/action/authAction';

import { FormatCurrency } from "../../../utils/FormatCurrency";
// import { LOADING } from "../../../redux/type";

export default function Product(props){
  const dispatch = useDispatch();

  let {badges,thumbnail_url, slug, name, price,real_price,rating_average} = props;

  let { loading } = useSelector((state) => state.productReducer);
  
  const handleViewProduct = (e) => {
    e.preventDefault();
    dispatch(productViewAction({...props}))
  }

  const handleAddWishList = (e) => {
    e.preventDefault();
    
    dispatch(addWishList({...props}))
  }
  
  // const handleClickProductDetail = (e) =>{
  //   // dispatch(productDetail(...props));
  //   // e.preventDefault();
  //   console.log('vao day');
  //   dispatch(productDetail(slug));
  //   console.log(slug);
  // }



  const handleAddToCart = (e) =>{
    e.preventDefault();
    dispatch(addCart({...props}));
  }


  return(
        <div className="col-6 col-md-4">
                {/* Card */}
                <div className="card mb-7">
                  {/* Badge */}
                  <div className="badge badge-white card-badge card-badge-left text-uppercase">
                    {badges?.text}
                  </div>
                  {/* Image */}
                  <div className="card-img">
                    {/* Image */}
                    {/* <Link className="card-img-hover" to={`/shop/${slug}`}> */}
                      {
                        loading ? <Skeleton animation="wave" variant="rect" width={250} height={250}/> : 
                        <>
                          <Link className="card-img-hover"  to={`shop/${slug}`} >
                            <img
                              className="card-img-top card-img-back"
                              src={thumbnail_url}
                              alt="..."
                            />
                            <img
                              className="card-img-top card-img-front"
                              src={thumbnail_url}
                              alt="..."
                            />
                          </Link>
                        </>
                      }
                      
                    {/* </Link> */}
                    {/* Actions */}
                    <div className="card-actions">
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="modal"
                          data-target="#modalProduct"
                          onClick={handleViewProduct}
                        >
                          <i className="fe fe-eye" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                          onClick={handleAddToCart}
                        >
                          <i className="fe fe-shopping-cart" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                          onClick={handleAddWishList}
                        >
                          <i className="fe fe-heart" />
                        </button>
                      </span>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="card-body px-0">
                    {/* Category */}
                    {
                      loading === true ? <Skeleton height={60} animation="wave" /> : 
                      <> 
                        <div className="font-size-xs product-rating" >
                            <span>{rating_average} ⭐</span>
                        </div>
                        {/* Title */}
                        <div className="font-weight-bold">
                          <Link className="text-body" to={`/shop/${slug}`}>
                            {name}
                          </Link>
                        </div>   
                      </>
                    }
                    {
                      loading ? <Skeleton animation="wave"/> : 
                        <> 
                          {/* Price */}
                          <div className="font-weight-bold">
                              <span className="font-size-xs text-gray-350 text-decoration-line-through">{`${FormatCurrency(price)}VND`}</span>
                              <span className="text-primary">{`${FormatCurrency(real_price)}VND`}</span>
                          </div>
                        </>
                    }
                    {/* <div className="font-weight-bold text-muted">$129.00</div> */}
                  </div>
                </div>
              </div>


    )
}