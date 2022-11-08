import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";

import {useTranslate } from "../../../core/Translate";
import Product from "../../shop/components/Product";

function TopSellers({data}) {
  let {t} = useTranslate();

  const [dataRender, setDataRender] = useState(data?.res);
  useEffect(()=>{
    setDataRender(data?.res)
  },[data])

  return (
    <section className="py-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            {/* Heading */}
            <h2 className="mb-4 text-center">{t(`Top month Sellers`)}</h2>
            {/* Nav */}
            <div className="nav justify-content-center mb-10">
              <a
                className="nav-link active"
                href="#topSellersTab"
                data-toggle="tab"
                onClick={() => setDataRender(data.res)}
              >
                Laptop
              </a>
              <a className="nav-link" href="#topSellersTab" data-toggle="tab" onClick={() => setDataRender(data.res1)}>
                Camera
              </a>
              <a className="nav-link" href="#topSellersTab" data-toggle="tab" onClick={() => setDataRender(data.res2)}>
                Motor
              </a>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="topSellersTab">
            <div className="row">
              {
                dataRender && dataRender.map((item) => <Product home key={item._id} {...item}/>)
              }

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Link  */}
            <div className="mt-7 text-center">
              <Link className="link-underline" to="/shop">
                Discover more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSellers;
