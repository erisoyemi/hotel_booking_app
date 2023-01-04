import Header from '../../components/header/Header'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import {useState} from "react";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  
  const photos = [
    {
      src: 'https://fairmont-austin.com/wp-content/uploads/2020/06/Fairmont-Austin-1-K-1-BDRM-Suite-Parkview-1444080-1920x1280.jpg'
    },
    {
      src: 'https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2018-07/home_1bedroom_oceanview_bed1.jpg?itok=GCv5QtFW'
    },
    {
      src: 'https://www.themarkhotel.com/app/uploads/2015/04/manhattan-suite-living-and-bedroom-2000x1333.jpg'
    }
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="roomContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} />
            <FontAwesomeIcon icon={faCircleArrowLeft} />
            <FontAwesomeIcon icon={faCircleArrowRight} />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
          </div>
        )}
        <div className="roomWrapper">
          <h1 className="roomTitle">1 Bedroom Suite</h1>
          <div className="roomImages">
            {photos.map((photo, i) => (
              <div className="roomImgWrapper">
                <img
                  onClick={()=>handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="roomImg"
                />
              </div>
            ))}
          </div>
          <div className="roomDetails">
            <div className="roomDetailsTexts">
              <h1 className="roomTitle">Come stay with us</h1>
              <p className="roomDesc">
                Best 1 Bedroom Suite in the entire world. Equipped with:
              </p>
              <ul className="roomComp">
                <li className="roomCompItem">1 Large Fridge</li>
                <li className="roomCompItem">1 Queen Bed</li>
                <li className="roomCompItem">1 TV</li>
                <li className="roomCompItem">Kitchenette</li>
              </ul>
            </div>
            <div className="roomDetailsPrice">
              <h2>
                <b>Price: N50000</b>
              </h2>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel