import './ArtistDetails.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Popover, OverlayTrigger } from 'react-bootstrap';
import Error from './Error';
import Loader from './Loader';
import Header from './Header';
let ArtistDetails = () => {


    let { id } = useParams();
    let [artist, setArtist] = useState({})
    let [error, setError] = useState({})

    const appStyles = {
        backgroundImage: `url(/images/covers/${artist.cover}.jpg)`
    }

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://artists-app-api.herokuapp.com/artists/${id}`,{mode: 'cors'})
            .then((response) => {
                if(!response.ok){
                    setError(response.status);
                    throw Error("Server responds with an error");
                }
                return response.json() })
            .then((data) => {
                setArtist(data);
            })
            .catch((err) => {
                console.log(err.message);
                 })
        }, 1000)
        
            
    }, [id])
    if (artist.name) {
        console.log(artist);
        const popover1 = (props) => (
            <Popover id="popover-basic" {...props}>
                <Popover.Header as="h3">Album Details</Popover.Header>
                <Popover.Body>
                    <strong>Title : </strong>{artist.albums[0].title}<br />
                    <strong>Year : </strong>{artist.albums[0].year}<br />
                    <strong>Price : </strong>${artist.albums[0].price}
                </Popover.Body>
            </Popover>
        );
        const popover2 = (props) => (
            <Popover id="popover-basic" {...props}>
                <Popover.Header as="h3">Album Details</Popover.Header>
                <Popover.Body>
                    <strong>Title : </strong>{artist.albums[1].title}<br />
                    <strong>Year : </strong>{artist.albums[1].year}<br />
                    <strong>Price : </strong>{artist.albums[1].price}$
                </Popover.Body>
            </Popover>
        );
        const popover3 = (props) => (
            <Popover id="popover-basic" {...props}>
                <Popover.Header as="h3">Album Details</Popover.Header>
                <Popover.Body>
                    <strong>Title : </strong>{artist.albums[2].title}<br />
                    <strong>Year : </strong>{artist.albums[2].year}<br />
                    <strong>Price : </strong>{artist.albums[2].price}$
                </Popover.Body>
            </Popover>
        );
        const popover4 = (props) => (
            <Popover id="popover-basic" {...props}>
                <Popover.Header as="h3">Album Details</Popover.Header>
                <Popover.Body>
                    <strong>Title : </strong>{artist.albums[3].title}<br />
                    <strong>Year : </strong>{artist.albums[3].year}<br />
                    <strong>Price : </strong>{artist.albums[3].price}$
                </Popover.Body>
            </Popover>
        );
        return (
            <div>
                <Header />
                <section className="h-100 gradient-custom-2">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-lg-9 col-xl-7">
                                <div className="card border-0">
                                    <div style={appStyles} className="div1 rounded-top text-white d-flex flex-row" >
                                        {/* <img className='img-fluid img-responsive' src={`/images/covers/${artist.cover}.jpg`} /> */}
                                        <div className="artistText ms-3 alert alert-secondary">
                                            <p className='artistName'>{artist.name}</p>
                                            <p className='artistGenre'>{artist.genre}</p>
                                        </div>
                                    </div>
                                    <div className="card-body p-4 text-black">
                                        <div className="mb-5">
                                            <p className="lead fw-normal mb-1 text-start">Bio</p>
                                            <div className="p-4 text-start"  >
                                                <p className="font-italic mb-1">{artist.bio}</p>
                                            </div>
                                        </div>
                                        <div className="w-100 d-flex justify-content-between align-items-center mb-4">
                                            <p className="lead fw-normal mb-0">Albums</p>
                                        </div>
                                        <div className="row g-2">
                                            <div className="col mb-2">
                                                <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={popover1}>
                                                    <img src={`/images/albums/${artist.albums[0].cover}.jpg`} alt="2" className="w-100 rounded-3" />
                                                </OverlayTrigger>
                                            </div>
                                            <div className="col mb-2">
                                                <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={popover2}>
                                                    <img src={`/images/albums/${artist.albums[1].cover}.jpg`} alt="2" className="w-100 rounded-3" />
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                        <div className="row g-2">
                                            <div className="col">
                                                <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={popover3}>

                                                    <img src={`/images/albums/${artist.albums[2].cover}.jpg`} alt="3" className="w-100 rounded-3" />
                                                </OverlayTrigger>
                                            </div>
                                            <div className="col">
                                                <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={popover4}>
                                                    <img src={`/images/albums/${artist.albums[3].cover}.jpg`} alt="4" className="w-100 rounded-3" />
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    } 
    else if(error === 404){
        return (
            <Error />
        );
    }
    else {
        return (
            <Loader />
        );
    }

}

export default ArtistDetails;