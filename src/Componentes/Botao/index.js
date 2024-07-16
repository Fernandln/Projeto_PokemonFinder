import './botao.css'

const Botao = (props) => {
    return(
        <div>
            <button 
                className='botao'
                type='submit'
            >
                {props.placeholder}
            </button>
        </div>
    )
}

export default Botao