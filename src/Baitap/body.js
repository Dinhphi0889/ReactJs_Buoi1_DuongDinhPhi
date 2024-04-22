import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return <>  
            <div className='Banner mb-5'>
                <div className="card text-center p-4 bg-light border-0">
                    <div className="card-body"> 
                        <h1 className="card-title">A warm welcome!</h1>
                        <p className="card-text">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <a href="1" className="btn btn-primary">Call to action</a>
                    </div>
                </div>
            </div>
            <div className="row gx-lg-5 text-center"> 

                <div className="col-lg-4 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body">
                            <div class="feature bg-primary bg-gradient text-white mb-4 mt-n4"><i class="fa-solid fa-layer-group"></i></div>
                            <h4 className="fs-4 fw-bold">Fresh new layout</h4>
                            <p className="card-text">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body">
                            <div class="feature bg-primary bg-gradient text-white mb-4 mt-n4"><i class="fa-regular fa-circle-down"></i></div>
                            <h4 className="card-title">Free to download</h4>
                            <p className="card-text">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xxl-4 mb-5">
                    <div className="card bg-light border-0">
                        <div className="card-body">
                            <div class="feature bg-primary bg-gradient text-white mb-4 mt-n4"><i class="fa-regular fa-address-card"></i></div>
                            <h4 className="card-title">Jumbotron hero header</h4>
                            <p className="card-text">The heroic part of this template is the jumbotron hero header!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xxl-4 mb-5">
                    <div className="card bg-light border-0">
                        <div className="card-body">
                            <div class="feature bg-primary bg-gradient text-white mb-4 mt-n4"><i class="fa-brands fa-bootstrap"></i></div>
                            <h4 className="card-title">Feature boxes</h4>
                            <p className="card-text">We've created some custom feature boxes using Bootstrap icons!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xxl-4 mb-5">
                    <div className="card bg-light border-0">
                        <div className="card-body">
                            <div class="feature bg-primary bg-gradient text-white mb-4 mt-n4"><i class="fa-solid fa-code"></i></div>
                            <h4 className="card-title">Simple clean code</h4>
                            <p className="card-text">We keep our dependencies up to date and squash bugs as they come!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xxl-4 mb-5">
                    <div className="card bg-light border-0">
                        <div className="card-body">
                            <div class="feature bg-primary bg-gradient text-white mb-4 mt-n4"><i class="fa-regular fa-circle-check"></i></div>
                            <h4 className="card-title">A name you trust</h4>
                            <p className="card-text">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                        </div>
                    </div>
                </div>
            </div>

        </>


    }
}
