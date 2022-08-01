import Header from '../../components/header/Header'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'

function Hotel() {
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
  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className='roomContainer'>
        <div className='roomWrapper'>
          <h1 className='roomTitle'>1 Bedroom Suite</h1>
          <div className='roomImages'>
            {photos.map(photo=>(
              <div className='roomImgWrapper'>
                <img src={photo.src} alt='' className='roomImg'/>
              </div>
            ))}
          </div>
          <div className='roomDetails'>
              <div className='roomDetailsTexts'>
                <h1 className='roomTitle'>Come stay with us</h1>
                <p className='roomDesc'>
                  Best 1 Bedroom Suite in the entire world.
                </p>
              </div>
          </div>
          <div className='roomDetailsPrice'>
            <h2>
              <b>N50000</b>
            </h2>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel