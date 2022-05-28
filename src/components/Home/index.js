import {useState} from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray =['o', 'b', 'o', 'd', 'a', 'n']
    const jobArray =['s','o', 'f', 't', 'w', 'a', 'r','e','', 'd', 'e', 'v', 'l', 'o', 'p', 'e', 'r']

    return(
        <div className = 'container home-page'>
            <div className = 'text-zone'>
                <h1>Hi, <br/> I'm
                <img src = {LogoTitle} alt = 'developer' />
                <AnimatedLetters letterClass = {letterClass}
                strArray ={nameArray}
                idx ={15}/>
                <br/>
                software developer
                </h1>
                <h2> Blockchain Developer / Fullstack Developer </h2>
                <Link to ='/contact' className = 'flat-button'> CONTACT ME </Link>  
            </div> 
        </div>
    ) 
}
export default Home
