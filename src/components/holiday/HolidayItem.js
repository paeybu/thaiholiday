import React, { useEffect } from 'react'

const HolidayItem = ({ holiday }) => {
  useEffect(() => {
    console.log(holiday)
  }, [holiday])
  return (
    <div className="month-grid">
      <div className="card">
        <div className="card-content center">
          <h3 className="month-label">January</h3>
          <ul>
            {holiday.jan.map((item, index) => (
              <li key={index}>
                <span className="date green-text">
                  {item.date.datetime.day}
                </span>{' '}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-content center">
          <h3 className="month-label">February</h3>
          <ul>
            {holiday.feb.map((item, index) => (
              <li key={index}>
                <span className="date green-text">
                  {item.date.datetime.day}
                </span>{' '}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-content center">
          <h3 className="month-label">March</h3>
          <ul>
            {holiday.mar.map((item, index) => (
              <li key={index}>
                <span className="date green-text">
                  {item.date.datetime.day}
                </span>{' '}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-content center">
          <h3 className="month-label">April</h3>
          <ul>
            {holiday.apr.map((item, index) => (
              <li key={index}>
                <span className="date green-text">
                  {item.date.datetime.day}
                </span>{' '}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-content center">
          <h3 className="month-label">May</h3>
          <ul>
            {holiday.may.map((item, index) => (
              <li key={index}>
                <span className="date green-text">
                  {item.date.datetime.day}
                </span>{' '}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-content center">
          <h3 className="month-label">June</h3>
          <ul>
            {holiday.jun.map((item, index) => (
              <li key={index}>
                <span className="date green-text">
                  {item.date.datetime.day}
                </span>{' '}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-content center">
          <h3 className="month-label">July</h3>
          <ul>
            {holiday.jul.map((item, index) => (
              <li key={index}>
                <span className="date green-text">
                  {item.date.datetime.day}
                </span>{' '}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-content center">
          <h3 className="month-label">August</h3>
          <ul>
            {holiday.aug.map((item, index) => (
              <li key={index}>
                <span className="date green-text">
                  {item.date.datetime.day}
                </span>{' '}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-content center">
          <h3 className="month-label">September</h3>
          <ul>
            {holiday.sep.map((item, index) => (
              <li key={index}>
                <span className="date green-text">
                  {item.date.datetime.day}
                </span>{' '}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-content center">
          <h3 className="month-label">October</h3>
          <ul>
            {holiday.oct.map((item, index) => (
              <li key={index}>
                <span className="date green-text">
                  {item.date.datetime.day}
                </span>{' '}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-content center">
          <h3 className="month-label">November</h3>
          <ul>
            {holiday.nov.map((item, index) => (
              <li key={index}>
                <span className="date green-text">
                  {item.date.datetime.day}
                </span>{' '}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-content center">
          <h3 className="month-label">December</h3>
          <ul>
            {holiday.dec.map((item, index) => (
              <li key={index}>
                <span className="date green-text">
                  {item.date.datetime.day}
                </span>{' '}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HolidayItem
