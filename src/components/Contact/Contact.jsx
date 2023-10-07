import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    // emailjs
    //   .sendForm(
    //     "service_t26rkyd",
    //     "template_cckw50h",
    //     form.current,
    //     "LOdvIZXIweqaGDUA3"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    const templateParams = {
      from_name: name + " " + email,
      to_name: "purirohan153@gmail.com",
      feedback: message,
    };
    emailjs
      .send(
        "service_t26rkyd",
        "template_cckw50h",
        templateParams,
        "LOdvIZXIweqaGDUA3"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div>
      <div className="contact-me-card row">
        <div className="col-lg-6 col-md-5 col-sm-12 px-2 py-2">
          <span className="get-in-touch mx-4 my-5">Get in Touch</span>
          <div className="py-5 uu d-flex justify-content-center">
            <dotlottie-player
              src="https://lottie.host/43344f8f-d773-4ac0-8e66-388812fdbba5/rM0xLISWJs.json"
              background="transparent"
              speed="1"
              style={{ width: "500px", height: "500px" }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
        <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="d-flex flex-column card-contact-right"
          >
            <div className="input-group my-3 d-flex flex-column">
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
                className="input-groups"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group my-3 d-flex flex-column">
              <label htmlFor="">Email</label>
              <input
                name="user_email"
                type="text"
                placeholder="Enter Your Email"
                className="input-groups"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group my-3 d-flex flex-column">
              <label htmlFor="">Message</label>
              <textarea
                placeholder="Enter Your Messsage"
                className="input-groups"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="input-group my-3 d-flex flex-column">
              <input
                className="btn btn-success"
                type="submit"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
