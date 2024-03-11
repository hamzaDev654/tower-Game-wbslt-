import React from 'react'
import './Section.css'

const Section = ({children, className}) => {
  let classes = `Section + ${className?className:''}`
  return (
    <div className={classes}>{children}</div>
  )
}

export default Section