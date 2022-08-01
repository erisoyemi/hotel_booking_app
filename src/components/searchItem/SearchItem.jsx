import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img
            src="https://th.bing.com/th/id/OIP.NIM5zh3N9lzgELYn7_bvfgHaE8?w=300&h=200&c=7&r=0&o=5&pid=1.7"
            alt=""
            className="siImg"
        />
        <div className="siDesc">
            <h1 className="siTitle">1 Bedroom Suite</h1>
            <span className="siFeatures">
                1 Queen Bed · 1 Bathroom · 1 Kitchen
            </span>
            <span className="siCancelOp">Free cancellation</span>
        </div>
        <div className="siDetails">
            <div className="siDetailTexts">
                <span className="siprice">N50,000</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem