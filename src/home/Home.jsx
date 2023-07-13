import React from 'react'
import Nav from '../nav/Nav'
import Camel from '../products_module/img/wp4088921.jpg'
import './home.scss'

export default function Home () {
  return (
    <>
      <Nav/>
      <img className="camel-img" src={Camel} alt="Camel Picture" />
    </>
  )
}
