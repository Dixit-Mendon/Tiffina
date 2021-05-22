import React from 'react';
import { Carousel } from 'react-bootstrap';
import './OfferDisplay.css';

const OfferDisplay = ({ offer1, offer2, offer3 }) => {
    return (
        <div>
            <Carousel className="carousel-container">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={offer1}
                        alt="First Offer"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={offer2}
                        alt="Second Offer"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={offer3}
                        alt="Third Offer"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default OfferDisplay;
