import React, { useState } from 'react';
import './index.css';
// import { getMsDhoniApi } from '../../apiServices/services'
// import { battingStatsUrl } from '../../apiServices/confidential'
import StatsTable from '../../components/StatsTable';

const Portfolio = () => {
    const [headers] = useState([
        "ROWHEADER",
        "Test",
        "ODI",
        "T20",
        "IPL"
    ]);

    const [values] = useState([
        { "values": ["Matches", "90", "350", "98", "257"] },
        { "values": ["Innings", "144", "297", "85", "223"] },
        { "values": ["Runs", "4876", "10773", "1617", "5169"] },
        { "values": ["Balls", "8248", "12303", "1282", "3773"] },
        { "values": ["Highest", "224", "183", "56", "84"] },
        { "values": ["Average", "38.09", "50.58", "37.6", "39.46"] },
        { "values": ["SR", "59.12", "87.56", "126.13", "137.0"] },
        { "values": ["Not Out", "16", "84", "42", "92"] },
        { "values": ["Fours", "544", "826", "116", "356"] },
        { "values": ["Sixes", "78", "229", "52", "247"] },
        { "values": ["Ducks", "10", "10", "1", "5"] },
        { "values": ["50s", "33", "73", "2", "24"] },
        { "values": ["100s", "6", "10", "0", "0"] },
        { "values": ["200s", "1", "0", "0", "0"] },
        { "values": ["300s", "0", "0", "0", "0"] },
        { "values": ["400s", "0", "0", "0", "0"] }
    ]);

    // const [errorMsg, setErrorMsg] = useState(undefined)
    // const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     const getBattingStats = async() => {
    //         try {
    //             setLoading(true)
    //             const response = await getMsDhoniApi(battingStatsUrl)
    //             if(response.status === 200){
    //                 setHeaders(response.data.headers)
    //                 setErrorMsg(undefined)
    //                 setLoading(false)
    //             }else {
    //                 setErrorMsg(response.error.data.message || "Failed to fetch batting statistics")
    //                 setLoading(false)
    //             }
    //         } catch (error) {
    //             setErrorMsg("Failed to fetch batting statistics")
    //             setLoading(false)
    //         }
    //     }

    //     getBattingStats()
    // }, [])

    return (
        <>
            <div className='title-container'>
                <h1>Portfolio</h1>
            </div>
            <div className='portfolio-container'>
                <div>
                    <h1>Batting Statistics:</h1>
                    <StatsTable headers={headers} values={values} />
                </div>
                <div>
                    <h1>Bowling Statistics:</h1>
                    <StatsTable headers={headers} values={values} />
                </div>
            </div>
        </>
    );
};

export default Portfolio;
