import React from 'react'
import './search.styles.css'

export const Search = ({ onChange, placeholder }) => (
  <input 
    className="search"
    type="search" 
    placeholder={placeholder} 
    onChange={onChange} 
  />
)