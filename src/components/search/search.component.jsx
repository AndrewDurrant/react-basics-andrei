import React from 'react'

export const Search = props => (
  <input 
    type="search" 
    placeholder="search monsters" 
    onChange={e => this.setState({ searchField: e.target.value })} 
  />
)