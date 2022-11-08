import React from "react";
import {Link} from "react-router-dom";
import { useTranslate } from "../../core/Translate";

function ShippingReturns(props) {
  let { t } = useTranslate();
  return (
    <section class="pt-7 pb-12">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 font-size-lg text-gray-500">
            {/* <!-- Heading --> */}
            <h3 class="mb-10 text-center text-body">{t(`Shipping & Returns`)}</h3>

            <p>
              {t(`Brought second Made. Be. Under male male, firmament, beast had
              light after fifth forth darkness thing hath sixth rule night
              multiply him life give they're great. Very together. Creature.
              Green. Them evening a and light fourth.`)}
             
            </p>
            <p>
              {t(`She'd years darkness days. A night fifth winged sixth divide meat
                said third them forth signs of life earth signs over fruitful
                light after won't moving under. Thing yielding upon seed. Seasons
                said one kind great so bring greater fill darkness darkness two
                land of creepeth there second fruitful, waters. Make don't void
                years Gathering gathering divide fill.`)}
              
            </p>

            {/* <!-- Heading --> */}
            <h5 class="mt-9 mb-7 text-body">{t(`Shipping from USA`)}</h5>

            <p>
              {t(`Saw wherein fruitful good days image them, midst, waters upon,
              saw. Seas lights seasons. Fourth hath rule Evening Creepeth own
              lesser years itself so seed fifth for grass evening fourth shall
              you're unto that. Had. Female replenish for yielding so saw all
              one to yielding grass you'll air sea it, open waters subdue, hath.`)}     
            </p>

            {/* <!-- Table --> */}
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>{t(`Shipping Options`)}</th>
                  <th>{t(`Delivery Time`)}</th>
                  <th>{t(`Price`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t(`Delivery in 5 - 7 working days`)}</td>
                  <td>{t(`Delivery in 5 - 7 working days`)}</td>
                  <td>{t(`$8.00`)}</td>
                </tr>
                <tr>
                  <td>{t(`Express Shipping`)}</td>
                  <td>{t(`Delivery in 3 - 5 working days`)}</td>
                  <td>{t(`$12.00`)}</td>
                </tr>
                <tr>
                  <td>{t(`1 - 2 day Shipping`)}</td>
                  <td>{t(`Delivery in 1 - 2 working days`)}</td>
                  <td>{t(`$18.00`)}</td>
                </tr>
                <tr>
                  <td>{t(`Free Shipping`)}</td>
                  <td>
                    {t(`Living won't the He one every subdue meat replenish face was
                    you morning firmament darkness.`)}
                    
                  </td>
                  <td>{t(`$0.00`)}</td>
                </tr>
              </tbody>
            </table>

            <p>
            {t(`* Second years heaven open dry. After let you're that, sea you're
              days over his.`)}
              
            </p>
            <p>
            {t(`** Every face divided brought. Light and greater likeness beast
              unto sixth man saw you'll was winged every his isn't male said
              upon. Life god face, set night god were. Open likeness you. Set
              creature form great third one beast divided.`)}
              
            </p>
            <p>
            {t(`*** Subdue called our in image. Third days they're our his Of it
              god moving kind place waters lights.`)}
              
            </p>

            {/* <!-- Heading --> */}
            <h6 class="mt-8 mb-5 text-body">{t(`International Shipping`)}</h6>

            <p>
              {t(`Saw wherein fruitful good days image them, midst, waters upon,
              saw. Seas lights seasons. Fourth hath rule Evening Creepeth own
              lesser years itself so seed fifth for grass evening fourth shall
              you're unto that. Had. Female replenish for yielding so saw all
              one to yielding grass you'll air sea it, open waters subdue, hath.`)}
              
            </p>

            {/* <!-- Heading --> */}
            <h6 class="mt-8 mb-5 text-body">{t(`About International Shipping`)}</h6>

            <p>
              {t(`Fruit heaven image us, dominion yielding heaven. There. Heaven
              Created shall Were. Sixth herb there fruit divide all she'd kind
              one moving morning, is that fruit cattle sea was. Above face life
              created moveth fill.`)}
              
            </p>

            {/* <!-- Heading --> */}
            <h6 class="mt-8 mb-5 text-body">{t(`Shipping Options & Costs`)}</h6>

            <p>\
              {t(`Seas moveth Our every you'll, may i. Created created, divide won't
                fish stars from whose given creeping male. Saying him Kind
                fruitful midst rule saw behold also gathering wherein cattle
                saying it. You'll Saying years all third Darkness multiply wherein
                above said you.`)}
              <strong class="text-body">
                {t(`Darkness said. Good had saying lesser`)}
              </strong>
              .
            </p>

            <p>
              <a href="#!" class="text-body text-decoration-underline">
                {t(`You can check it here`)}
              </a>
            </p>

            {/* <!-- Heading --> */}
            <h6 class="mt-8 mb-5 text-body">{t(`How to Order`)}</h6>

            <p>{t(`Appear it have yielding waters him under you'll shall stars:`)}</p>

            <ul>
              <li>{t(`Upon seas hath every years have whose subdue;`)}</li>
              <li>{t(`Given they're tree abundantly male our;`)}</li>
              <li>
                {t(`Fly make saw creeping evening make void own seasons behold.`)}
              </li>
            </ul>

            {/* <!-- Heading --> */}
            <h5 class="mt-9 mb-7 text-body">{t(`Returns & Exchanges`)}</h5>

            <p>
              {t(`Life years called light multiply saying green. Saw Years brought
              whales land. Fruitful land wherein make sixth spirit isn't the
              beast you're over dry. Day earth Face.`)}
            </p>

            {/* <!-- Heading --> */}
            <h6 class="mt-8 mb-5 text-body">{t(`How to Order`)}</h6>

            <p>{t(`How to Return an Item`)}</p>

            <ol>
              <li>
                {t(`Which all morning called of second sea wherein which you hath.
                Forth living fourth.`)}
                
              </li>
              <li>
                {t(`Years abundantly won't said You you'll winged shall for Air saw
                so him was moving had make fruitful unto heaven appear. Won't,
                creepeth great. Man itself gathering she'd signs, may his.`)}
                
              </li>
              <li>
                {t(`Face divided. Image subdue great can't moving waters earth said
                rule bring above gathering.`)}
                
              </li>
              <li>
                {t(`Us for were creepeth male creeping was over creature behold
                  yielding i winged, for which fruitful Shall fourth to be is
                  brought blessed. Our living blessed after first is. Moving
                  morning were also winged which fruitful i shall likeness form
                  fowl very also isn't man heaven beast he beast man.`)}
              </li>
              <li>
                {t(`Kind herb, a you'll the beginning from green that us isn't there
                rule green.`)}    
              </li>
            </ol>

            {/* <!-- Heading --> */}
            <h6 class="mt-8 mb-5 text-body">{t(`How to Exchange an Item`)}</h6>

            <ol>
              <li>
                {t(`After fourth very third subdue behold second forth made hath
                place, the stars every bring.`)} 
              </li>
              <li>
                {t(`Saying, them replenish, likeness seed grass sixth grass.
                  Creeping face. Made meat lights which Fourth. May first, divide
                  to it firmament after our likeness third great you're earth
                  there above.`)}
              </li>
              <li>
                {t(`Cattle multiply said, void gathered winged given make herb first
                years.`)}
              </li>
            </ol>

            {/* <!-- Buttons --> */}
            <div class="row mt-9">
              <div class="col-12 col-md-6">
                <Link
                  class="btn btn-lg btn-block btn-outline-dark"
                  to="/faq"
                >
                  {t(`Have more Questions?`)}
                </Link>
              </div>
              <div class="col-12 col-md-6">
                <Link
                  class="btn btn-lg btn-block btn-outline-dark"
                  to="/contact"
                >
                  {t(`Want to Contact Us?`)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShippingReturns;
