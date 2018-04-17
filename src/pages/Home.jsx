import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Fade from "react-reveal/Fade";

import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
// import Carousel from "../components/Carousel.jsx";
import "./Photography.css";

import p1 from "../images/PhotographyImages/Decorative/pic (13).JPG";
import p2 from "../images/PhotographyImages/pic (2).jpg";
import p3 from "../images/PhotographyImages/pic (3).jpg";
import p4 from "../images/PhotographyImages/car/017.jpg";
import p5 from "../images/PhotographyImages/pic (5).JPG";
import p6 from "../images/PhotographyImages/pic (6).jpg";
import p7 from "../images/PhotographyImages/Clothing/pic (3).jpg";
import p8 from "../images/PhotographyImages/pic (8).JPG";
import p9 from "../images/PhotographyImages/pic (9).jpg";
import p10 from "../images/PhotographyImages/pic (10).jpg";
import p11 from "../images/PhotographyImages/pic (11).JPG";
import p12 from "../images/PhotographyImages/pic (12).jpg";
import p13 from "../images/PhotographyImages/pic (13).jpg";
import d1 from "../images/GraphicPageImages/guidelines.png";
import d2 from "../images/GraphicPageImages/digital.png";
import d3 from "../images/GraphicPageImages/packaging.png";
import e1 from "../images/GraphicPageImages/experience-la.jpg";
import e2 from "../images/GraphicPageImages/experience-london.jpg";
import e3 from "../images/GraphicPageImages/experience-rome.jpg";
import e4 from "../images/GraphicPageImages/experience-dubai.jpg";
import e5 from "../images/GraphicPageImages/experience-staffordshire.jpg";
import bb1 from "../images/GraphicPageImages/brand-building.png";
import b1 from "../images/GraphicPageImages/logo-playboy.jpg";
import b2 from "../images/GraphicPageImages/logo-magellan-jets.jpg";
import b3 from "../images/GraphicPageImages/logo-la-cold.jpg";
import b4 from "../images/GraphicPageImages/logo-swell.jpg";
import b5 from "../images/GraphicPageImages/logo-espresso.jpg";
import b6 from "../images/GraphicPageImages/logo-saturnbath.jpg";
import b7 from "../images/GraphicPageImages/logo-moet.jpg";
import b8 from "../images/GraphicPageImages/logo-dca.jpg";
import b9 from "../images/GraphicPageImages/logo-ticketmaster.jpg";
import b10 from "../images/GraphicPageImages/logo-nespresso.jpg";
import b11 from "../images/GraphicPageImages/logo-akzonobel.jpg";
import b12 from "../images/GraphicPageImages/logo-barclays.jpg";
import n1 from "../images/GraphicPageImages/blog-clients.jpg";
import n2 from "../images/GraphicPageImages/blog-playboy.jpg";
import n3 from "../images/GraphicPageImages/blog-jet.jpg";

import FoodPhoto from '../pages/FoodPhotography.jsx';

import a1 from "../images/GraphicPageImages/IndustrialPhotography.jpg"
import a2 from "../images/GraphicPageImages/AdvertisingPhotography.jpg"
import a3 from "../images/GraphicPageImages/ClothingPhotography.jpg"
import a4 from "../images/GraphicPageImages/AerialPhotography.jpg"
import a5 from "../images/GraphicPageImages/ManufacturePhotography.jpg"
import a6 from "../images/GraphicPageImages/JeweleryPhotography.jpg"
import a7 from "../images/GraphicPageImages/PanoramaPhotography.jpg"

import pp1 from "../images/dslr-top.png";
import pp2 from "../images/filming.png";
import pp3 from "../images/editing.png";
import pp4 from "../images/procces.png";

import ee1 from "../images/PhotographyImages/photo_2018-04-10_13-57-20.jpg";
import ee2 from "../images/PhotographyImages/photo_2018-04-10_13-57-39.jpg";
import ee3 from "../images/PhotographyImages/photo_2018-04-10_13-57-45.jpg";
import ee4 from "../images/PhotographyImages/photo_2018-04-10_13-57-50.jpg";
import ee5 from "../images/PhotographyImages/photo_2018-04-10_13-57-55.jpg";




class Photography extends Component {
    render() {
        return (
            <div className="content-wrap container-fluid">
                <Navbar />
                <section className="intro">
                    <div className="jumbotron">
                        <div className="container">
                            <Fade top>
                                <h6 className="name">ERFAN ASKARI</h6>
                            </Fade>
                            <Fade left>
                                <p className="describe">
                                    Freelance Photographer and Branding Consultant based in
                                    Tehran.
                                </p>
                            </Fade>

                        </div>
                    </div>
                    <section className="row portfolio">
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <Link to="/Photography/FoodPhotography">
                                    <div className="img__wrap thumbnail">

                                        <img className="img__img" src={p13} alt="" />

                                        <div className="img__description">
                                            <div className="m-center">

                                                <h5>This album contains photos of products such as perfumes, make up, jewlery, sofas, handbags and shoes</h5>

                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <p >Food Photography Album</p>
                            </div>
                        </Fade>

                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <Link to="/Photography/LifeStylePhotography">
                                    <div className="img__wrap thumbnail">
                                        <img className="img__img" src={p6} alt="" />
                                        <div className="img__description">
                                            <div className="m-center">
                                                <h5>This album contains photos of products such as perfumes, make up, jewlery, sofas, handbags and shoes</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <p >Life-style Photography Album</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <Link to="/Photography/ChildrenPhotography">
                                    <div className="img__wrap thumbnail">
                                        <img className="img__img" src={p3} alt="" />
                                        <div className="img__description">
                                            <div className="m-center">
                                                <h5>This album includes photos of out-door modeling, clothing and accesories </h5>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <p >Children Photography Album</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <Link to="/Photography/DecorativeProducts">
                                    <div className="img__wrap thumbnail">
                                        <img className="img__img" src={p1} alt="" />
                                        <div className="img__description">
                                            <div className="m-center">
                                                <h5>This album contains photos of products such as perfumes, make up, jewlery, sofas, handbags and shoes</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <p >Decorative products Photography Album</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <Link to="/Photography/CarPhotography">
                                    <div className="img__wrap thumbnail">
                                        <img className="img__img" src={p4} alt="" />
                                        <div className="img__description">
                                            <div className="m-center">
                                                <h4>This album contains photos of products such as perfumes, make up, jewlery, sofas, handbags and shoes</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <p >Car Photography Album</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <div className="img__wrap thumbnail">
                                    <img className="img__img" src={p3} alt="" />
                                    <div className="img__description">
                                        <div className="m-center">
                                            Content goes here
                                        </div>
                                    </div>
                                </div>
                                <p >Restaurant space Photography Album</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <Link to="/Photography/ClothingPhotography">
                                    <div className="img__wrap thumbnail">
                                        <img className="img__img" src={p7} alt="" />
                                        <div className="img__description">
                                            <div className="m-center">
                                                Content goes here
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <p >Clothing Photography Album</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <div className="img__wrap thumbnail">
                                    <img className="img__img" src={p9} alt="" />
                                    <div className="img__description">
                                        <div className="m-center">
                                            Content goes here
                                        </div>
                                    </div>
                                </div>
                                <p >PNG Photography Album</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <div className="img__wrap thumbnail">
                                    <img className="img__img" src={p9} alt="" />
                                    <div className="img__description">
                                        <div className="m-center">
                                            Content goes here
                                        </div>
                                    </div>
                                </div>
                                <p >PNG Food Photography Album</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <div className="img__wrap thumbnail">
                                    <img className="img__img" src={p10} alt="" />
                                    <div className="img__description">
                                        <div className="m-center">
                                            Content goes here
                                        </div>
                                    </div>
                                </div>
                                <p >Clothing Photography Album</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <div className="img__wrap thumbnail">
                                    <img className="img__img" src={p12} alt="" />
                                    <div className="img__description">
                                        <div className="m-center">
                                            Content goes here
                                        </div>
                                    </div>
                                </div>
                                <p >Vehicle Photography Album</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <Link to="/Photography/IndustrialPhotography">
                                    <div className="img__wrap thumbnail">
                                        <img className="img__img" src={p11} alt="" />
                                        <div className="img__description">
                                            <div className="m-center">
                                                Content goes here
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <p >Industrial Photography Album</p>
                            </div>
                        </Fade>
                    </section>
                </section>

                <section className="services">
                    <div className="jumbotron blue-jumbo">
                        <div className="container blue-container">
                            <section className="intro">
                                <Fade top>
                                    <p className="name"> SERVICES</p>
                                </Fade>
                                <Fade left>
                                    <h2 className="blue-describe ">
                                        Full-service creative solution for brand design, digital content
                                        and packaging development.</h2>
                                </Fade>
                            </section>
                            <section className="row services-wrapper">
                                <div className="col-sm-12 col-md-6 col-lg-4 servax">
                                    <div className="brand-design ">
                                        <a href="#">
                                            <Fade left>
                                                <img src={pp1} alt="" />
                                            </Fade>
                                        </a>
                                        <h2 style={{ color: "rgb(0, 240, 220)" }}>عکاسی</h2>
                                        {/*<h3 style={{ color: "rgb(0, 240, 220)" }}>*/}
                                        {/*Brand strategy, creative direction and production for*/}
                                        {/*printed and online projects.*/}
                                        {/*</h3>*/}
                                        <h1 className="brand-describe">عکاسی ساده از محصول (png)</h1>
                                        <h1 className="brand-describe">عکاسی از محصول با دکور</h1>
                                        <h1 className="brand-describe">عکاسی لباس بدون مدل</h1>
                                        <h1 className="brand-describe">عکاسی لباس با مدل در استودیو</h1>
                                        <h1 className="brand-describe">عکاسی لباس با مدل در فضای باز</h1>
                                        <h1 className="brand-describe">عکاسی از خدمات و سرویس</h1>
                                        <h1 className="brand-describe">عکاسی خارجی ساختمان (Architecture)</h1>
                                        <h1 className="brand-describe">عکاسی داخلی ساختمان</h1>
                                        <br />
                                        <br />
                                        {/*<a href="#">*/}
                                        {/*<p className="portfolio-link">VIEW PHOTOGRAPHY PORTFOLIO ></p>*/}
                                        {/*</a>*/}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4 servax">
                                    <div className="brand-design ">
                                        <a href="#">
                                            <Fade bottom>
                                                <img src={pp2} alt="" />
                                            </Fade>
                                        </a>
                                        <h2 style={{ color: "rgb(0, 240, 220)" }}>فیلم</h2>
                                        <h1 className="brand-describe">فیلم برداری با انواع دوربین حرفه ای</h1>
                                        <h1 className="brand-describe">فیلم برداری با crane</h1>
                                        <h1 className="brand-describe">فیلم برداری هوایی</h1>

                                        <br />
                                        <br />
                                        <a href="#">
                                            {/*<p className="portfolio-link">*/}
                                            {/*VIEW FILMING PORTFOLIO >*/}
                                            {/*</p>*/}
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4 servax">
                                    <div className="brand-design ">
                                        <a href="#">
                                            <Fade right>
                                                <img src={pp3} alt="" />
                                            </Fade>
                                        </a>

                                        <h2 style={{ color: "rgb(0, 240, 220)" }}>روتوش و تدوین</h2>
                                        <h1 className="brand-describe">روتوش عکس</h1>
                                        <h1 className="brand-describe">تدوین فیلم</h1>
                                        <br />
                                        <br />
                                        {/*<a href="#">*/}
                                        {/*<p className="portfolio-link">VIEW EDITING PORTFOLIO ></p>*/}
                                        {/*</a>*/}
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>


                </section>


                <section className="about">
                    <div className="jumbotron">
                        <div className="container">

                            <h6 className="name">ABOUT</h6>
                            <Fade left>
                                <p className="describe-designer">
                                    My name is Erfan Askari, a freelance Photographer and Branding Consultant based in Tehran. I have over 10 years of professional work with the Iran’s leading brands and have developed more than 20 brands while collaborating with some of the best design agencies around the globe.
                                    <br/>
                                </p>
                            </Fade>
                            <br/>

                            <a href="#" style={{ color: "rgb(0, 240, 220)", textDecoration: 'none'  }}>
                                <p style={{ color: "rgb(0, 240, 220)", textDecoration: 'none'  }}>
                                    DOWNLOAD RESUME »
                                </p></a>

                        </div>
                    </div>
                    <section className="about">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 city-image">
                                <img src={ee1} alt=""/>
                            </div>
                            <div className="col-sm-6 col-md-6 city-text">

                                <p>
                                    عکاسی صنعتی به شاخه ای از عکاسی گفته می شود که وظیفه ان به نمایش گذاردن دقیق و کامل و باکیفیت محصول یا پروداکت می باشد ٬ در این شاخه از عکاسی، عکاس با استفاده از تججهیزات مناسب و انتخاب نورهای دقیق و کامل تلاش می کند تا حد امکان تصوری با کیفیت و دقیق از کالا ثبت کند که در آن تمامی خصوصیات ظاهری کالا به نمایش گذارده شود .
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-6 city-text">
                                <h5></h5>
                                <p></p>
                                <p>
                                    عکاسی تبلیغاتی میبایست تمام خصوصیات یک عکس حرفه‌ای را دربرگیرد و به مولفه‌های مهم دیگری نیز نیازمند است. هدف از عکاسی تبلیغاتی تنها معرفی کالا نیست بلکه تشویق و ترغیب مشتری به خرید و استفاده آن از محصول است. به بیان ساده‌تر عکس تبلیغاتی می‌بایست بیننده را به خرید کالا ترغیب کند٬ درست به مانند یک ‌تیزر‌! ‌اما‌ با‌ راه‌ و ‌روشی‌ متفاوت
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-6 city-image">
                                <img src={ee2} alt="" />
                            </div>
                            <div className="col-sm-6 col-md-6 city-image">
                                <img src={ee3} alt="" />
                            </div>
                            <div className="col-sm-6 col-md-6 city-text">
                                <h5>Ghost mannequin</h5>
                                <p>عکاسی پوشاک شاخه‌ای از عکاسی تبلیغاتی است که در آن مد، لباس و هنر درهم آمیخته می‌شوند. جذب مخاطبان داخلی از این راه به منظور پیشی گرفتن از رقبای این صنعت امری اجتناب ناپذیراست. استودیو خانه عکس مفتخراست که حرفه‌ای‌ترین ابزارآلات ممکن و تیمی متشکل از اساتید دانشگاه‌های هنر و فارغ التحصیلان رشته های مرتبط از دانشگاه‌های معتبر را به خدمت گرفته تا خدماتی شایسته به مشتریان خود ارائه نماید. </p>
                                <p>
                                    $75 per photo, flat rate
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-6 city-text">
                                <h5>Dubai, UAE</h5>
                                <p>1992 – 1995</p>
                                <p>
                                    عکاسی و تصویر برداری بصورت هوایی بیش از 100 سال یعنی از زمانی که انسان توانست برای اولین بار پرواز کند و دوربین فیلمبرداری نیز اختراع گردید، قدمت دارد. این روش، در واقع دیدن و گرفتن عکس و فیلم از داخل یک وسیله پرنده و از مناظریست که از روی زمین بخوبی دیده نمی شوند. تصویربرداری هوایی چه بوسیله ماهواره باشد، چه وسایل پرنده سرنشین دار و یا وسایل پرنده بدون سرنشین، یکی از زیباترین و کاربردی ترین روشهای تصویربرداری در دنیاست تا با استفاده از تسلط هوایی بتوان شمایی کامل از پروژه ها و فعالیتها بدست آورد.
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-6 city-image">
                                <img src={ee4} alt="" />
                            </div>
                            <div className="col-sm-6 col-md-6 city-image">
                                <img src={ee5} alt="" />
                            </div>
                            <div className="col-sm-6 col-md-6 city-text">
                                <h5>Staffordshire, UK</h5>
                                <p>1972 – 1992</p>
                                <p>
                                    عکاسی صنعتی از فضاهای صنعتی یکی از شاخه های عکاسی صنعتی است که عموما به سفارش یک سازمان یا مجموعه صنعتی صورت می پذیرد و به ثبت فرایندهای تولیدی، اجرایی و یا ثبت تجهیزات سازمانی می پردازد. عکس صنعتی ممکن است با مقاصد داخلی ( به عنوان مثال مدیریت پروژه‌ها ) و یا خارجی ( به عنوان مثال تبلیغات یا روابط عمومی ) بکار گرفته شود
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-6 city-text">
                                <h5></h5>
                                <p></p>
                                <p>
                                    نزدیک به نیمی از طلای دنیا نزد دولتها بصورت شمش (قطعه‌های طلا) نگه داری میشود. طلا همیشه ارزش خود را حفظ کرده است. از سال ۱۸۴۰ تا ۱۹۰۰ میلادی، هزاران نفر طی جریانی که به هجوم برای طلا یا تب طلا معروف شد، در کالیفرنیا، کلرادو، یوکون در کانادا، آفریقای جنوبی و استرالیاو از همه مهمتر جزایر هاوایی بخت خویش را برای دستیابی به طلا آزمودند.
                                    عکاسی از این فلز ارزشمند، جواهر آلات و فلزات نظیر آن یکی از مهمترین و لذت‌ بخش ترین شاخه عکاسی صنعتی / هنری بشمار میرود. این شاخه از عکاسی تجربه، امکانات و تجهیزات منحصر بفردی را می‌طلبد که استدیو خانه عکس می‌تواند آنها را در اختیار مشتریان خود قراردهد.
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-6 city-image">
                                <img src={a6} alt="" />
                            </div>
                            <div className="col-sm-6 col-md-6 city-image">
                                <img src={a7} alt="" />
                            </div>
                            <div className="col-sm-6 col-md-6 city-text">
                                <h5></h5>
                                <p></p>
                                <p>
                                    تصاویر پانوراما به طور کلی به سه دسته تقسیم می‌شوند:

                                    پانوراما عریض (عموما با جابجایی دوربین): که می‌تواند از چندین عکس به هم پیوسته در عرض تشکیل شود و قابلیت پرینت بر روی کاغذ را دارد.
                                    پانوراما ۳۶۰ درجه و کمتر (نام دیگر:افقی)(عموما با چرخاندن دوبین): این نوع پانوراما در عرض به صورت ۳۶۰ درجه با گرفتن چندین عکس تشکیل می‌شود به طوری که اگر در عرض تصویر را ادامه بدهید می‌توانید همه قسمتهای عکس گرفته شده را مشاهده کنید. تصور کنید که در جایی ایستاده و در عرض دور سر خود می‌چرخید و همه جای محل ایستادن خود را مشاهده می‌کنید.</p>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="brand-building">
                    <div className="jumbotron blue-jumbo">
                        <div className="container blue-container">

                            <strong>
                                <p className="name"> پروسه عکاسی</p>
                            </strong>
                            <div className="row">
                                <p>ما در تمام مراحل کار جویای نیازهای عکاسی شما هستیم تا آنچه شما در نظر دارید را تهیه و تولید کنیم وبرای تهیه عکس و فیلم برای شما مجهز به دوربین های حرفه ای مختلف با کارایی های مختلف و لنزهای متعدد هستیم. یکی از دلایل قیمت بالای کار ما این است که برای مثال در ازای تحویل هر 100 عکس به طور متوسط 500 الی 1000 عکس میگیریم و برای هر عکس تحویلی به طور متوسط 30 دقیقه زمان برای روتوش میگذاریم. کار ما صرفا با فشار دادن دکمه دوربین تمام نمیشود و تا به دست آوردن رضایت شما از عکس و فیلم مورئ نظر شما همراهی میکنیم.</p>
                                <img src={pp4} alt=""/>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="brands">
                    <div className="jumbotron">
                        <div className="container">

                            <h6 className="name">BRANDS</h6>
                            {/*<Fade left>*/}
                            <p className="describe-brands">
                                From telecommunication giants, household brands and private jet companies to small businesses and individuals, I’ve completed work in just about every business sector.
                            </p>
                            {/*</Fade>*/}

                            <section className="brands-logo">
                                <div className="row brands-row">
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b1} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b2} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b3} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b4} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b5} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b6} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b7} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b8} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b9} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b10} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b11} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b12} alt="" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>

                <section className="news">
                    <div className="jumbotron">
                        <div className="container">
                            <h6 className="name">NEWS</h6>
                            <p className="describe-brands">
                                All the latest news, updates on recent projects and stories from the world of design.
                            </p>

                            <section className="row news-images">
                                <div className="col-sm-12 col-md-4 col-lg-4 news-pad">
                                    <a className="nav-link" to="#">
                                        <img src={n1} alt="" />
                                        <h5 className="describe-news" style={{paddingTop: '2rem'}}>
                                            Thou Shall Not Consult With thy Neighbor’s Wife for Design
                                            Feedback
                                        </h5>
                                    </a>
                                    <p style={{ color: "rgb(0, 240, 220)" }}>SEPTEMBER 17, 2017</p>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4 news-pad">
                                    <a className="nav-link" to="#">
                                        <img src={n2} alt="" />
                                        <h5 className="describe-news" style={{paddingTop: '2rem'}}>New packaging design collaboration with Playboy in LA</h5>
                                    </a>
                                    <p style={{ color: "rgb(0, 240, 220)" }}>SEPTEMBER 3, 2017</p>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4 news-pad">
                                    <a className="nav-link" to="#">
                                        <img src={n3} alt="" />
                                        <h5 className="describe-news" style={{paddingTop: '2rem'}}>
                                            Flying high with new Magellan Jets advertising campaign
                                        </h5>
                                    </a>
                                    <p style={{ color: "rgb(0, 240, 220)" }}>AUGUST 24, 2017</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}

export default Photography;