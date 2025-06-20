import React from 'react'
import PropTypes from 'prop-types'

export default function PageHeader(props) {
  return (
    <div className="banner container-xl">
    <div className="row align-items-center" style={{minHeight: "450px"}}>
        <div className="col-lg-6 col-md-8 ps-4 text-sm-start text-center">
            <h1 className='text-orange'>{props.title}</h1>
             
            
        
        </div>

    </div>
</div>

  )
}
