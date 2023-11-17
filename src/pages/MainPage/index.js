import React from 'react'
import Banner from '../../components/Banner'
import Row from '../../components/Row'
import requests from '../../api/requests'

const MainPage = () => {
    return (
    <div>
        <Banner/>
        <Row
            title = "NETFLIX ORIGINALS"
            id = "NO"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
        />
        <Row title="Trending Now" id="TN" fetchUrl = {requests.fetchTrending}/>
        <Row title="Top Rated" id="TN" fetchUrl = {requests.fetchTopRated}/>
        <Row
            title = "Action Movies"
            id = "AM"
            fetchUrl={requests.fetchActionMovies}
            isLargeRow
        />
        <Row
            title = "Comedy Movies"
            id = "CM"
            fetchUrl={requests.fetchComedyMovies}
            isLargeRow
        />
        <Row
            title = "Horror Movies"
            id = "HM"
            fetchUrl={requests.fetchHorrorMovies}
            isLargeRow
        />
        <Row
            title = "Romance Movies"
            id = "RM"
            fetchUrl={requests.fetchRomanceMovies}
            isLargeRow
        />
        <Row
            title = "Documentaries"
            id = "DM"
            fetchUrl={requests.fetchDocumentaries}
            isLargeRow
        />
    </div>

)
}

export default MainPage