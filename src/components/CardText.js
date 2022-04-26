function CardText(props) {
    return (
        <div className='Card--text'>
            <h3>{props.title}</h3>
            <p>{props.text}
            </p>
        </div>
    );
}

export default CardText;