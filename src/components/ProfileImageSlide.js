import React from 'react';
import Carousel from 'nuka-carousel';

function ProfileImageSlide(animal) {
    return (
        <div>
            <div className="ml-6">
                <Carousel
                    wrapAround={true}
                    autoplay={true}
                    width="600px"
                    height="320px"
                >
                    {animal.moreImages.map((image) => (
                        <img className="overflow-auto" src={image} alt="1" />
                    ))}
                </Carousel>
        </div>
        </div>
    )
}

export default ProfileImageSlide
