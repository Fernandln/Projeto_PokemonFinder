import './texto.css'

const Texto = (props) => {
    return(
        <section className='texto'>
            <label>{props.label}</label>
            <input 
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            
        </section>
    )
}

export default Texto