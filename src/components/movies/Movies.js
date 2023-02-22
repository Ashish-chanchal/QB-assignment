import React from 'react'
import './Movies.css';
import { useNavigate } from "react-router-dom";
import img4 from '../img/img1.jpeg'
export default function Movies(props) {
   const {movie, name, language, image, id, date  } = props;
   const navigate = useNavigate()

    function handleClick() {
        navigate(`/summery/${id}`, { state: { movie} })
    }

  return (
    <div className='user-card-container'>
      <div className="user-card">
        <img className='center' alt="" src={image===null?img4:image} />
        <div className="user-info" >
          <p>Name : {name}</p><br />
          <p>Language: {language}</p><br />
          <p >Date: <small >{date===null?"DD-mm-yy":date}</small></p>
        <button onClick={handleClick} className="btn" type="button">View Summary</button>
        </div>
      </div>
    </div>
  )
}