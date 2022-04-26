import profile from '../images/profile.jpg'

function CardImage() {
    return (
        <div className='Card--img'>
            <img src={profile} alt="card-logo" />
        </div>
    );
}

export default CardImage;