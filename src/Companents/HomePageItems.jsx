import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import laptop from "../images/HomePageItems/laptop.jpg";
import monitor from "../images/HomePageItems/monitor.jpg";
import monitor1 from "../images/HomePageItems/monitor1.jpg";
import mainboard from "../images/HomePageItems/mainboard.jpg";
import cpu from "../images/HomePageItems/cpu.jpg";
import cooler from "../images/HomePageItems/cooler.jpg";
import ram from "../images/HomePageItems/ram.jpg";
import vga from "../images/HomePageItems/vga.jpg";
import hdd from "../images/HomePageItems/hdd.jpg";
import headphone from "../images/HomePageItems/headphone.jpg";
import keyboard from "../images/HomePageItems/keyboard.jpg";
import keyboard1 from "../images/HomePageItems/keyboard1.jpg";
import speaker from "../images/HomePageItems/speaker.jpg";
import speaker2 from "../images/HomePageItems/speaker2.jpg";
import speaker3 from "../images/HomePageItems/speaker3.jpg";
import mouse from "../images/HomePageItems/mouse.jpg";
import why1 from "../images/why1.png";
import why2 from "../images/why2.png";
import why3 from "../images/why3.png";
import gif from "../images/gif.gif";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function HomePageItems() {
  return (
    <>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className="pageItemsHeader">
          <div data-aos="flip-left" data-aos-duration="2500">
            <p>Populyar kateqoriyalar</p>
          </div>
        </div>
      </AnimationOnScroll>

      <div className="HomePageItems">
        <div className="HomePageItemsContainer">
          <NavLink to="category/laptop">
            <div
              className="card"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-duration="1000"
            >
              <div className="cardInner">
                <div className="front">
                  <img src={laptop} />
                </div>
                <div className="back">
                  <h1>LAPTOPLAR</h1>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="category/monitor">
            <div
              className="card"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-duration="1000"
            >
              <div className="cardInner">
                <div className="front">
                  <img src={monitor1} />
                </div>
                <div className="back">
                  <h1>MON??TORLAR</h1>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="category/cpu">
            <div
              className="card"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-duration="1000"
            >
              <div className="cardInner">
                <div className="front">
                  <img src={cpu} />
                </div>
                <div className="back">
                  <h1>PROSESSORLAR</h1>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="category/vga">
            <div
              className="card"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-duration="1000"
            >
              <div className="cardInner">
                <div className="front">
                  <img src={vga} />
                </div>
                <div className="back">
                  <h1>V??DEO KARTLAR</h1>
                </div>
              </div>
            </div>
          </NavLink>

          {/* <NavLink to="category/cooler">
            <div className="card">
                <div className="cardInner">
                    <div className="front">
                        <img src={cooler} />
                    </div>
                    <div className="back">
                        <h1>SOYUDUCU QUR??ULAR</h1>
                       
                    </div>
                </div>
            </div>
            </NavLink>

            <NavLink to="category/ram">
            <div className="card">
                <div className="cardInner">
                    <div className="front">
                        <img src={ram} />
                    </div>
                    <div className="back">
                        <h1>OPERAT??V YADDA??</h1>
                       
                    </div>
                </div>
            </div>
            </NavLink>

            <NavLink to="category/mainboard">
            <div className="card">
                <div className="cardInner">
                    <div className="front">
                        <img src={mainboard} />
                    </div>
                    <div className="back">
                        <h1>Ana Platalar</h1>
                        
                    </div>
                </div>
            </div>
            </NavLink>

            <NavLink to="category/storage">
            <div className="card">
                <div className="cardInner">
                    <div className="front">
                        <img src={hdd} />
                    </div>
                    <div className="back">
                        <h1>YADDA?? QUR??ULARI</h1>
                        
                    </div>
                </div>
            </div>
            </NavLink>

             */}
        </div>
      </div>

      <div className="whyUs">
        <div
          className="whyUsHeader"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <h2>Niy?? Biz ?</h2>
          <NavLink to="/about">
            Ma??aza haqq??nda ??trafl?? m??lumat ??ld?? edin{" "}
            <i className="fa-regular fa-chevron-right"></i>
          </NavLink>
        </div>
        <div
          className="boxes"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="900"
          data-aos-delay="500"
        >
          <div className="boxBackground">
            <div className="box">
              <h4>Apar??c?? Texnikaya fokuslanm???? e-ticar??t</h4>
              <p>
                Bu g??n y??zl??rl?? m????t??ri ??n son komp??ter komponentl??ri,
                noutbuklar, perfierya v?? ofis avadanl??qlar??n?? almaq ??????n bizim
                sayta m??raci??t edir m??raci??t edir. Sayt??m??zda olan b??t??n
                modell??r d??nyaca m??h??ur brednl??rin m??hsullar??ndand??r.
              </p>
              <div className="boxImg">{/* <img src={why1} /> */}</div>
            </div>
          </div>
          <div className="boxBackground">
            <div className="box">
              <h4>Etibarl?? v?? M??kafatl?? T??cr??b??</h4>
              <p>
                MetaComp ard??c??l olaraq ??n yax???? onlayn al????-veri?? yerl??rind??n
                biri kimi s??ralan??r v?? ??irk??t m??nt??z??m olaraq s??nayed?? apar??c??
                m????t??ri xidm??tl??ri reytinql??ri qazan??r. Bizim ??????n ??n vacib
                n??ans m????t??ri m??mnuniyy??tidir.
              </p>
              <div className="boxImg">{/* <img src={why2} /> */}</div>
            </div>
          </div>
          <div className="boxBackground">
            <div className="box">
              <h4>??lk??nin ist??nil??n yerin?? ??atd??r??lma</h4>
              <p>
                MetaComp ma??azas?? olaraq, m??hsullar?? ??lk??nin ist??nil??n yerin??
                ??atd??r??r??q. Bak?? daxili ??atd??r??lma pulsuzdur. ??g??r yekun m??bl????
                1000 azn-d??n daha ??ox olarsa regionlara ??atd??r??lma pulsuzdur.
              </p>
              <div className="boxImg">{/* <img src={why3} /> */}</div>
            </div>
          </div>
        </div>
      </div>

      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className="pageItemsHeader periferic">
          <div data-aos="flip-left" data-aos-duration="2500">
            <p>Periferik qur??ular</p>
          </div>
        </div>
      </AnimationOnScroll>

      <div className="HomePageItems2">
        <div className="HomePageItemsContainer2">

          <div className="boxes">
            <div
              className="box2"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
            >
              <div className="box2Img boxImgDiv" data-text="Klaviatura">
                <div className="bxi">
                  <NavLink to="category/keyboard">
                    <img src={keyboard1} />
                  </NavLink>
                  <i className="fa-regular fa-magnifying-glass"></i>
                </div>
                <span>
                  <img src="https://www.pcworld.com/wp-content/uploads/2021/09/gaming-keyboard-hub-hero-crop-100734536-orig-1.jpg?quality=50&strip=all" />
                </span>
              </div>
            </div>

            <div
              className="box3"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
            >
              <div className="box3Img boxImgDiv" data-text="Maus">
                <div className="bxi">
                  <NavLink to="category/mouse">
                    <img src={mouse} />
                  </NavLink>
                  <i className="fa-regular fa-magnifying-glass"></i>
                </div>
                <span>
                  <img src="https://images.unsplash.com/photo-1618247130379-980b9fe0df04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="HomePageItems3">
        <div className="HomePageItems3Container">
          <div className="HomePageItems3-left">
            <img src="https://cwsmgmt.corsair.com/pdp/500d-rgb-se/color-profiles/mobile-colorshift.gif" />
          </div>
          <div className="HomePageItems3-right">
            <div className="textDiv">
              <p>??st??nil??n dizaynda sifari?? et, biz toplayaq </p>
            </div>
          </div>
        </div>
      </div>

      <div className="HomePageItems4">
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <div className="pageItemsHeader periferic">
            <div data-aos="flip-left" data-aos-duration="2500">
              <p>S??s qur??ular??</p>
            </div>
          </div>
        </AnimationOnScroll>
        <div className="HomePageItems4Container">
          <img src={gif} />
          <div className="HomePage4Items">
            <div
              className="headHponesBox"
              data-aos="zoom-out"
              data-aos-duration="2500"
            >
              <NavLink to="category/headphone">
                <img src={headphone} />
              </NavLink>
            </div>
            <div
              className="speakersBox"
              data-aos="zoom-out"
              data-aos-duration="2500"
            >
              <NavLink to="category/speaker">
                {/* <img src={speaker} /> */}
                {/* <img src={speaker2} /> */}
                <img src={speaker3} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let t = (s) => s;
export default connect(t)(HomePageItems);
