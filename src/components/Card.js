

import CardImage from './CardImage'
import CardMain from './CardMain'
import CardFooter from './CardFooter'

import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import google from '../images/google.png'

export default function Card() {

    const imageSources = [
        twitter,
        facebook,
        instagram,
        google
    ]

    return (
        <div className="Card">
            <CardImage/>
            <CardMain/>
            <CardFooter imageSources={imageSources}/>
        </div>
    )
}