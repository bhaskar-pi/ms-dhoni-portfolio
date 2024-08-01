import './index.css'
import { useEffect, useState} from 'react'
import { getMsDhoniApi } from '../../apiServices/services'
import Loading from '../../components/Loading'
import { aboutUrl } from '../../apiServices/confidential'

const About = () => {
    const [aboutData, setAboutData] = useState({})
    const [errorMsg , setErrorMsg] = useState('')
    const [loading, setLoading] = useState(false)

   useEffect(() => {
    const getMsDhoniAboutDetails = async () => {
        try {
            setLoading(true)
            const response = await getMsDhoniApi(aboutUrl);
            console.log({ response });
            if (response.status === 200) {
                setAboutData(response.data);
                setLoading(false)      
            }
        } catch (error) {
            console.error('Error fetching Ms Dhoni about details:', error);
            setErrorMsg(error.response.data.message);
            setLoading(false)  
        }
    };

    getMsDhoniAboutDetails()
    }, []);

    const truncatedBio = aboutData.bio && aboutData?.bio.slice(0, 800);
    const displayBio =  `${truncatedBio}<a target="_blank" href=${aboutData.webURL}>..show more</a>`;

    return (
        <div className='about-container'>
            <div className='title-container'>
                <h1 className='title'>About</h1>
            </div>    
            <div className='error' style={{height: loading || errorMsg ? '80vh' : '0px'}}>
                {loading && <Loading />}
                {errorMsg && <p className='error-msg'>{errorMsg}</p>}
            </div>
            {!loading && !errorMsg && (<>
                <img src={aboutData.image} alt='Dhoni' />
                <h1>{aboutData.name}</h1>
                <div dangerouslySetInnerHTML={{ __html: displayBio }} />
                
                <div className='cards'>
                    <div className='card personal-information'>
                        <h3>Personal Information</h3>
                        <p>Born: <span>{aboutData.DoBFormat}</span></p>
                        <p>Birth Place: <span>{aboutData.birthPlace}</span></p>
                        <p>Height: <span>{aboutData.height}</span></p>
                        <p>Role: <span>{aboutData.role}</span></p>
                        <p>Batting Style: <span>{aboutData.bat}</span></p>
                        <p>Bowling Style: <span>{aboutData.bowl}</span></p>
                    </div>
                    <div className='card'>
                        <h3>Carrer Information</h3>
                        <p>Teams: <span>{aboutData.teams}</span></p>   
                    </div>
            </div>
            </>)}
        </div>
    );

}

export default About