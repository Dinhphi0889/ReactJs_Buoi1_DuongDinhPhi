import React, { Component } from 'react'
import Header from './header'
import Body from './body'
import Footer from './footer'

export default class Baitap extends Component {
    render() {
        return (
            <>
                <>
                    <Header />
                </>
                <div className='container'>
                    <Body />
                </div>
                <>
                    <Footer/>
                </>
            </>
        )
    }
}
