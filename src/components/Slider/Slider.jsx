import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slider.css'


const Slider = ({ images, brandName }) => {


    return (
        <div>
            <Slide className="">
                <div className="each-slide-effect">
                    <div className='bg-cover bg-center' style={{ 'backgroundImage': `url(${images[0]})`, }}>
                        {/* <span className="text-5xl">{brandName}</span> */}
                        <div className="wrapper">
                            <svg>
                                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                                    {brandName}
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className='bg-cover bg-center' style={{ 'backgroundImage': `url(${images[1]})` }}>
                        
                        <div className="wrapper">
                            <svg>
                                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                                    {brandName}
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className='bg-cover bg-center' style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <div className="wrapper">
                            <svg>
                                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                                    {brandName}
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </Slide>




            {/* <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/BC3474C/brand-logo-toyota.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/wr17Xkc/brand-logo-mercedes-benz.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/pxM1Wb8/brand-logo-honda.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/pxM1Wb8/brand-logo-honda.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Slider;