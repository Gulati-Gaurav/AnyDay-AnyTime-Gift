import React from 'react'
import "./Feedback_style.css"
let obj=[];

function Feedback() {
    const onsubmit=(e)=>{
        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
        let msg=document.getElementById("message").value;
        obj.push({name:name,email:email,msg:msg});
        console.log(obj);
        e.preventDefault();
    }
  return (
    <section id="contact-form">
        <div class="contact-container" >
            <h1 class="l-heading"><span class="text-contact-primary">Feedback</span> Form</h1>
            <p> Feel free to drop us your feedback </p>
            <form action="submit" class="contact-form-info" onSubmit={onsubmit}>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Mr. X would not be good choice" />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="No Spams, Promise" />
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" placeholder="Feedback or Query " ></textarea>
                </div>
                <button class="btn" type="submit" >Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Feedback