import './banner.css'
import imagem from './19183755227514.webp'
const Banner = () => {
    return(
        <div className='banner'>
            <img src={imagem} alt='Imagem de fundo'/>
            <div className='text'>
                Pokemon Finder
            </div>
        </div>
    )
}

export default Banner