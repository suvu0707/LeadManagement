import React from 'react'

function Dashboard() {
    return (
        <div className="container">
            <div className="row mt-4">

                <h3 className="text-center text-primary">Lead Management Dashboard</h3>
                <div className="col-lg-3 mb-3">
                    <div className="card border-2 border-primary">
                        <div className="card-body">
                            <h5 className='text-center text-primary'>Products</h5>
                            <p className='text-center text-primary'>100</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 mb-3">
                    <div className="card border-2 border-primary">
                        <div className="card-body">
                            <h5 className='text-center text-primary'>Customers</h5>
                            <p className='text-center text-primary'>200</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-3">
                    <div className="card border-2 border-primary">
                        <div className="card-body">
                            <h4 className='text-center text-primary'>+ </h4>
                            <h5 className='text-center text-primary'>New Product</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-3">
                    <div className="card border-2 border-primary">
                        <div className="card-body">
                            <h4 className='text-center text-primary'>+ </h4>
                            <h5 className='text-center text-primary'>New Leads</h5>
                        </div>
                    </div>
                </div>



                <div className="col-lg-3 mb-3">
                    <div className="card border-2 border-primary">
                        <div className="card-body">
                            <h5 className='text-center text-primary'>Today Follow Up</h5>
                            <p className='text-center text-primary'>20</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-3">
                    <div className="card border-2 border-primary">
                        <div className="card-body">
                            <h5 className='text-center text-primary'>Rejected Leads</h5>
                            <p className='text-center text-primary'>300</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-3">
                    <div className="card border-2 border-primary">
                        <div className="card-body">
                            <h5 className='text-center text-primary'>Generate Invoice</h5>
                            <p className='text-center text-primary'>200</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-3">
                    <div className="card border-2 border-primary">
                        <div className="card-body">
                            <h5 className='text-center text-primary'>Pending Approval</h5>
                            <p className='text-center text-primary'>67</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Dashboard