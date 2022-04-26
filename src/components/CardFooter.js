
function CardFooter(props) {
    const imageSources = props.imageSources;
    const imgs = imageSources.map((src, index) => <img key={index} src={src} alt={index} />)
    return (
        <footer>
            {imgs}
        </footer>
    );
}

export default CardFooter;