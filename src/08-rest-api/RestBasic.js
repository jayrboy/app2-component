/* eslint-disable */

import { useState } from 'react'

const RestBasic = () => {
  let [serverTime, setServerTime] = useState('')
  let [footballResult, setFootballResult] = useState('')

  const onClickShowTime = () => {
    fetch('https://vercel-server-react.vercel.app/api/server-time')
      .then((response) => response.json())
      .then((result) => {
        let r = (
          <>
            {result.hour}:{result.minute}:{result.second}
          </>
        )
        setServerTime(r)
      })
      .catch((err) => alert(err))
  }

  const onClickFootballResult = () => {
    fetch('https://vercel-server-react.vercel.app/api/football-result')
      .then((response) => response.text())
      .then((result) => setFootballResult(result))
      .catch((err) => alert(err))
  }

  return (
    <>
      <h3>REST Basic</h3>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={onClickShowTime}
        >
          แสดงเวลาจาก Server
        </button>
        <div>{serverTime}</div>
        <br />
        <button
          className="btn btn-sm btn-outline-warning"
          onClick={onClickFootballResult}
        >
          แสดงผลการแข่งขัน
        </button>
        <br />
        <div dangerouslySetInnerHTML={{ __html: footballResult }}></div>
      </div>
    </>
  )
}
export default RestBasic
