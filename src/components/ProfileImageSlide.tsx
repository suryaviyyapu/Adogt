import React from 'react';
import Carousel from 'nuka-carousel';

interface Props {
    images: String;
}
export const ProfileImageSlide: React.FC<Props> = ({
images
}) => {
    const Images = images.split(',');
    let id: number = 0
    return (
        <div>
            <div>
                <Carousel
                    wrapAround={true}
                    autoplay={true}
                    width="600px"
                    height="320px">
                    {
                        Images.map((image) => (
                            <img key={id++} className="overflow-auto" src={image} alt="1" />
                        ))}
                </Carousel>
            </div>
        </div>
    )
}
export default ProfileImageSlide
