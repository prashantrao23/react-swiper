import React, { useContext, useEffect } from 'react'
import NetflixApiContext from '../api/NetflixApiContext';


const Data = () => {

    const context = useContext(NetflixApiContext);
    const { fetchData, myData } = context;


    useEffect(() => {
        fetchData(); // Initiate the API request
        // eslint-disable-next-line
    }, []);

    // if (!myData || !myData.titles) {
    //     return null; // Handle loading or error state
    // }

    return (
        <div className='text-white py-20 '>

            {!myData || !myData.titles ? (

                <div className='text-center text-2xl'>
                    No Data to display yet ...
                </div>
            ) :
                (

                    myData.titles.map((title, index) => (
                        <div key={index}>
                            <h2><span className='text-xl'>Type: </span>{title.summary.type === 'movie' ? 'Movie' : 'Show'}</h2>
                            <h3><span className='text-xl'>Title: </span>{title.summary.title}</h3>
                            <p><span className='text-xl'>Synopsis: </span>{title.summary.synopsis}</p>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default Data