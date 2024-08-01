import CustomButton from '../../components/CustomButton'
import './index.css'

const Home = () => {
    return(
        <div className='home-container'>
            <h1>MS Dhoni: Cricket's Legendary Captain</h1>
            <p>Discover the iconic career of MS Dhoni, 
                celebrated for his leadership prowess and unforgettable 
                moments on the cricket field.
            </p>
            <CustomButton radius='8px' height='38px' width='110px' text="Know More" bgColor="#C0A106" textColor="#fff" />
        </div>
    )
}

export default Home