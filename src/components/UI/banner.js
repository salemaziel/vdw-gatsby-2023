import React from 'react'
import Container from './Container'
////import Container from 'react-bootstrap/Container'
////import Row from 'react-bootstrap/Row'
////import Col from 'react-bootstrap/Col'

//import './banner.scss'
import "./banner.css"


const Banner = ({ bgImage, height, children }) => {

return (
    <section className="relative pt-5 pb-3 text-white BannerSection"
    style={{
        "--image": `url(${bgImage})`,
        height: `${height}`
    }}
    >
    <Container className="">
    {children}
    </Container>

    </section>
)
}

export default Banner