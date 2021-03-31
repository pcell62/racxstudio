import React, { Component } from 'react'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import Service from 'parts/Service'
import Portfolio from 'parts/Portfolio'
import Advantage from 'parts/Advantage'
import Testimonial from 'parts/Testimonial'
import Discuss from 'parts/Discuss'
import Footer from 'parts/Footer'

import Data from 'json/landingPage.json'

export default class LandingPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero {...this.props}></Hero>
                <Service data={Data.service}></Service>
                <Portfolio data={Data.portfolio}></Portfolio>
                <Advantage data={Data.advantage}></Advantage>
                <Testimonial data={Data.testimonial}></Testimonial>
                <Discuss></Discuss>
                <Footer></Footer>
            </>
        )
    }
}
