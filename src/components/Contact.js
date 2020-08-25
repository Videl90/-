import React from 'react';
import './styles.css'

function Contact () {
    return (
        <form>
            <div className="form-group">
                <label for="exampleInputName1">Name</label>
                <input type="name" class="form-control" id="exampleInputName1"></input>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email Adress</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            
        </form>
    )
}


export default Contact;