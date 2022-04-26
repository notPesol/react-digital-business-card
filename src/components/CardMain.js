import CardButton from "./CardButton";
import CardText from "./CardText";
import CardTitle from "./CardTitle";

function CardMain() {

    const texts = [
        {
            title: "About",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nihil minima assumenda delectus a ut. Hic culpa doloremque, 
            adipisci incidunt, architecto soluta odio quisquam inventore 
            magnam repellendus neque harum excepturi asperiores?
            `
        },
        {
            title: "Interests",
            text: "Software Developer, Web Developer,\nReading, Play Games"
        }
    ]

    const cardTexts = texts.map((obj, index) => <CardText key={index} title={obj.title} text={obj.text} />)

    return (
        <div className='Card--main'>
            <CardTitle />
            <CardButton />
            {cardTexts}
        </div>
    );
}

export default CardMain;