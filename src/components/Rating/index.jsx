function Rating({ rate }) {
  console.log(rate)
  if (rate === '5') {
    return (
      <div>
        <i className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>
      </div>
    )
  } else if (rate === '4') {
    return (
      <div>
        <i className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#e3e3e3' }}></i>
      </div>
    )
  } else if (rate === '3') {
    return (
      <div>
        <i className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#e3e3e3' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#e3e3e3' }}></i>
      </div>
    )
  } else if (rate === '2') {
    return (
      <div>
        <i className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#e3e3e3' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#e3e3e3' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#e3e3e3' }}></i>
      </div>
    )
  } else if (rate === '1') {
    return (
      <div>
        <i className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#e3e3e3' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#e3e3e3' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#e3e3e3' }}></i>
        <i className="fa-solid fa-star" style={{ color: '#e3e3e3' }}></i>
      </div>
    )
  } else {
    return <p>No ratings</p>
  }
}

export default Rating
