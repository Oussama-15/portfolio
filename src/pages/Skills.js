import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Skills() {
  const [technologies, setTechnologies] = useState([])
  useEffect(() => {
    axios.get('https://devmastery-assets.vercel.app/technologies.json')
      .then((result) => {
        console.log(result.data)
        setTechnologies(result.data)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])
  console.log('tech', technologies);
  return (
    <div className='container mt-5'>
      <div className='row'>
        {technologies.map((t) => {
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3" key={t.id}>
              <div className="card p-3">
                <img src={t.image} className="card-img-top" alt={t.name} />
                <div className="card-body">
                  <h5 className="card-title">{t.name}</h5>
                  <a href="#" className="btn btn-primary">Lean about</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills