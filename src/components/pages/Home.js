import React, { useEffect, useState } from 'react'
import HolidayItem from '../holiday/HolidayItem'
import axios from 'axios'

const Home = () => {
  const BASE_URL =
    'https://cors-anywhere.herokuapp.com/https://calendarific.com/api/v2'
  const API_KEY = process.env.REACT_APP_API_KEY

  const [holiday, setHoliday] = useState({
    jan: [],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  })
  const [country, setCountry] = useState('TH')
  const [year, setYear] = useState('2019')

  useEffect(() => {
    fetchHoliday()
    console.log(holiday)
  }, [])

  const onChange = e => {
    if (e.target.name === 'country') {
      setCountry(e.target.value)
    } else if (e.target.name === 'year') {
      setYear(e.target.value)
    }
  }

  const onSubmit = e => {
    fetchHoliday(country, year)
  }

  const fetchHoliday = async (country = 'TH', year = '2019') => {
    const res = await axios.get(
      `${BASE_URL}/holidays?api_key=${API_KEY}&country=${country}&year=${year}`
    )
    const holidays = res.data.response.holidays
    setHoliday({
      jan: holidays.filter(item => item.date.datetime.month === 1),
      feb: holidays.filter(item => item.date.datetime.month === 2),
      mar: holidays.filter(item => item.date.datetime.month === 3),
      apr: holidays.filter(item => item.date.datetime.month === 4),
      may: holidays.filter(item => item.date.datetime.month === 5),
      jun: holidays.filter(item => item.date.datetime.month === 6),
      jul: holidays.filter(item => item.date.datetime.month === 7),
      aug: holidays.filter(item => item.date.datetime.month === 8),
      sep: holidays.filter(item => item.date.datetime.month === 9),
      oct: holidays.filter(item => item.date.datetime.month === 10),
      nov: holidays.filter(item => item.date.datetime.month === 11),
      dec: holidays.filter(item => item.date.datetime.month === 12)
    })
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              type="text"
              name="country"
              placeholder="2 digits e.g. US"
              onChange={onChange}
            />
            <label htmlFor="country">Country:</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="year"
              placeholder="e.g. 2019"
              onChange={onChange}
            />
            <label htmlFor="year">Year:</label>
          </div>
          <a class="waves-effect waves-light btn center" onClick={onSubmit}>
            Submit
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <HolidayItem holiday={holiday} />
        </div>
      </div>
    </div>
  )
}

export default Home
