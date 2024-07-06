import React from 'react'

const Contact = () => {
    return (
        <form>
            <div className='container'>
                <div className='row'>
                    <div class="col-md-4">
                        <label for="exampleFormControlInput1" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="col-md-4">
                        <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="col-md-4">
                        <label for="exampleFormControlInput1" class="form-label">Username</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                </div>

                <div className='row'>
                    <div class="col-md-6">
                        <label for="exampleFormControlInput1" class="form-label">city</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="col-md-3">
                        <label for="exampleFormControlInput1" class="form-label">state</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="col-md-3">
                        <label for="exampleFormControlInput1" class="form-label">zip</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                </div>
                <div className='row' style={{marginTop: "10px"}}>
                    <div className='col-md-3'>
                        <button className='btn btn-primary'>Submit Order</button>
                    </div>

                </div>
            </div>

        </form>
    )
}

export default Contact
