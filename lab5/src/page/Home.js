import React from 'react'
import Menu from '../component/Menu'
import Banner from '../component/Banner'
import CategoryList from '../component/CategoryList'

const Home = () => {
  return (
    <>
        <Banner/>
        <CategoryList/>
        <div>
            This is HOME PAGE
        </div>
    </>
  )
}

export default Home
