import Carousel from 'nuka-carousel';

function ProfileImageSlide(props) {
    const images = props.images[0]
    let id = 0
    return (
        <div>
            <div className="ml-6">
                <Carousel
                    wrapAround={true}
                    autoplay={true}
                    width="600px"
                    height="320px">
                    {
                    images.map((image) => (
                        <img key={id++} className="overflow-auto" src={image} alt="1" />
                    ))}
                </Carousel>
        </div>
        </div>
    )
}

export default ProfileImageSlide
