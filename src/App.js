import React from 'react'
// import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import './App.css'
import SearchBar from './SearchBar'
import BookShelf from './BookShelf'


class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf/>
        )}/>
         <Route path="/search" render={() => (
          <SearchBar/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
