import React, { useState } from "react";
import NetflixApiContext from "./NetflixApiContext";
import axios from "axios";


const NetflixApiState = (props) => {

    const host = 'https://netflix54.p.rapidapi.com';

    const API_Key = '995c3b13d5msh8f2ec43b7f5d188p1f4bc3jsn066cec4a630a'

    // const authToken = localStorage.getItem('token');

    const [movie, setMovie] = useState([])
    const [show, setShow] = useState([])
    const [documentry, setDocumentry] = useState([])

    const [titleDetails, setTitleDetails] = useState([])

    const [season, setSeason] = useState([])
    const [episode, setEpisode] = useState()

    //Fetch data
    const fetchMovie = async () => {

        const options = {
            method: 'GET',
            url: `${host}/search/`,
            params: {
                query: 'movie',
                offset: '0',
                limit_titles: '50',
                limit_suggestions: '20',
                lang: 'en'
            },
            headers: {
                'X-RapidAPI-Key': API_Key,
                'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log('Data from Netflix state', response.data);
            setMovie(response.data);
        } catch (error) {
            console.error('Error from netflix state', error);
        }

    }

    const fetchShow = async () => {

        const options = {
            method: 'GET',
            url: `${host}/search/`,
            params: {
                query: 'show',
                offset: '0',
                limit_titles: '50',
                limit_suggestions: '20',
                lang: 'en'
            },
            headers: {
                'X-RapidAPI-Key': API_Key,
                'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log('Data from Netflix state', response.data);
            setShow(response.data);
        } catch (error) {
            console.error('Error from netflix state', error);
        }

    }

    const fetchDocumentry = async () => {

        const options = {
            method: 'GET',
            url: `${host}/search/`,
            params: {
                query: 'documentaries',
                offset: '0',
                limit_titles: '50',
                limit_suggestions: '20',
                lang: 'en'
            },
            headers: {
                'X-RapidAPI-Key': API_Key,
                'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log('Data from Netflix state', response.data);
            setDocumentry(response.data);
        } catch (error) {
            console.error('Error from netflix state', error);
        }

    }

    const fetchTitle = async (id) => {

        const options = {
            method: 'GET',
            url: `${host}/title/details/`,
            params: {
                ids: id,
                lang: 'en'
            },
            headers: {
                'X-RapidAPI-Key': API_Key,
                'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log('Fetch Title from Netflix state', response.data);
            setTitleDetails(response.data);
        } catch (error) {
            console.error('Error from title netflix state', error);
        }

    }

    const fetchSeasons = async (id) => {

        const options = {
            method: 'GET',
            url: `${host}/title/seasons/`,
            params: {
                ids: id,
                lang: 'en'
            },
            headers: {
                'X-RapidAPI-Key': API_Key,
                'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log('Fetch Season from Netflix state', response.data);
            setSeason(response.data);
        } catch (error) {
            console.error('Error from Season netflix state', error);
        }

    }


    const fetchEpisode = async (id) => {

        const options = {
            method: 'GET',
            url: `${host}/season/episodes/`,
            params: {
                ids: id,
                lang: 'en'
            },
            headers: {
                'X-RapidAPI-Key': API_Key,
                'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log('Fetch Season Episode from Netflix state', response.data);
            setEpisode(response.data);
        } catch (error) {
            console.error('Error from Season episode netflix state', error);
        }

    }


    return (

        <NetflixApiContext.Provider value={{ movie, show, titleDetails,documentry, fetchMovie, fetchShow,fetchDocumentry, fetchTitle, fetchSeasons, season, fetchEpisode, episode }}>
            {props.children}
        </NetflixApiContext.Provider>


    )

}


export default NetflixApiState;


