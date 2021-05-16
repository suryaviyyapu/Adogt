import Carousel from 'nuka-carousel';

function ProfileImageSlide(props) {
    const images = props.props.split(',')
    return (
        <div>
            <div className="ml-6">
                <Carousel
                    wrapAround={true}
                    autoplay={true}
                    width="600px"
                    height="320px"
                >
                    {
                    images.map((image, index) => (
                        <img key={image.index} className="overflow-auto" src={image} alt="1" />
                    ))}
                </Carousel>
        </div>
        </div>
    )
}

export default ProfileImageSlide
