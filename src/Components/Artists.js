import './Artists.css'

import { Component } from "react";
import ArtistItem from "./ArtistItem";
import Error from './Error';
import Loader from './Loader';
import Header from './Header';

export default class Artists extends Component{
    constructor(){
        super();
        this.state = {
            ArtistsList:[],
            errorMessage:""
        }
    }

    ShowArtists = ({ArtistsList,errorMessage})=>{
        if(ArtistsList.length>0){
         return ArtistsList.map((Artist)=>{
             return <ArtistItem key={Artist.id} ArtistInfo = {Artist}/>
            }
        )
    }else if(errorMessage.length !== 0){
        return(
            <Loader/>
        )
    }
    else{
        return (
           <Loader/>
        )
    }
}

    render(){
        return(
            <div className='Artists'>
                <Header/>
                {this.ShowArtists(this.state)}
                {/* <StudentDetails/> */}
            </div>
        )
    }

    componentDidMount(){
        setTimeout(() => {
            fetch('https://artists-app-api.herokuapp.com/artists/',{ mode: 'cors'})
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            // console.log(data);
            this.setState({ArtistsList:data});
        })
        .catch((err)=>{this.setState(<Error/>)})
        }, 1000);
        
    }
}
