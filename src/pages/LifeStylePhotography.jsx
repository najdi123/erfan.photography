import Lightbox from 'react-image-lightbox';
import React from 'react';
import './LightBox.css';


import pic1 from "../images/PhotographyImages/LifeStyle/pic (1).jpg";
import pic2 from "../images/PhotographyImages/LifeStyle/pic (2).jpg";
import pic3 from "../images/PhotographyImages/LifeStyle/pic (3).jpg";
import pic4 from "../images/PhotographyImages/LifeStyle/pic (4).jpg";
import pic5 from "../images/PhotographyImages/LifeStyle/pic (5).jpg";
import pic6 from "../images/PhotographyImages/LifeStyle/pic (6).jpg";
import pic7 from "../images/PhotographyImages/LifeStyle/pic (7).jpg";
import pic8 from "../images/PhotographyImages/LifeStyle/pic (8).jpg";
import pic9 from "../images/PhotographyImages/LifeStyle/pic (9).jpg";
import pic10 from "../images/PhotographyImages/LifeStyle/pic (10).jpg";
import pic11 from "../images/PhotographyImages/LifeStyle/pic (11).jpg";
import pic12 from "../images/PhotographyImages/LifeStyle/pic (12).jpg";
import pic13 from "../images/PhotographyImages/LifeStyle/pic (13).jpg";





const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13];


class IndiLightbox extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {

        const { photoIndex, isOpen } = this.state;

        return (
            <div>


                {!isOpen &&
                <div className="image-display">

                    <img src={pic1} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:0 })} />
                    <img src={pic2} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:1 })} />
                    <img src={pic3} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:2 })} />
                    <img src={pic4} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:3 })} />

                    <img src={pic5} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:4 })} />
                    <img src={pic6} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:5 })} />
                    <img src={pic7} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:6 })} />
                    <img src={pic8} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:7 })} />
                    <img src={pic9} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:8 })} />
                    <img src={pic10} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:9 })} />
                    <img src={pic11} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:10 })} />
                    <img src={pic12} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:11 })} />
                    <img src={pic13} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:12 })} />




                </div>

                }
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default IndiLightbox;