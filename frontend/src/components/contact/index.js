import React from "react";
import "./index.css";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mgerndqk");
  if (state.succeeded) {
    return window.location.reload();
    

  }


  return (
    <div className="App">
      <div class="container">
        <div class="contact-box">
          <div class="left"></div>
          <div class="right">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <input
                id="name"
                type="name"
                name="name"
                class="field"
                placeholder="Name"
              />

              <ValidationError
                prefix="Name"
                field="name" 
                errors={state.errors}
              />

              <input
                id="email"
                type="email"
                name="email"
                class="field"
                placeholder="Email Address"
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <input
                id="phone"
                type="phone"
                name="phone"
                class="field"
                placeholder="Phone"
              />

              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />

              <textarea
                id="message"
                name="message"
                class="field"
                placeholder="Message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button type="submit" class="btn" disabled={state.submitting}>
                Submit
              </button>
            </form>
          </div>

          <div class="contact-details">
            <h2>Contact Details</h2>
            <div class="row">
              <div class="address clearfix">
              <p>
				  Address. :Sahab - Jordan
                    <br />
                    Mobile. :+962 7 9627 2623
                    <br />
                    Tel. :+962 6 4021556
                    <br />
                    Fax. :+962 6 4021557
                    <br />
                    P.O.Box 330413 Amman 11134 Jordan
                    <br />
                    E-mail : followup@artco-jo.com{" "}
                  </p>
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      width="350"
                      height="300"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=%D8%B4%D8%B1%D9%83%D8%A9%20%D9%85%D9%88%D8%A7%D8%B1%D8%AF%20%D8%A3%D9%86%D9%82%D8%B1%D8%A9%20%D9%84%D9%84%D8%A3%D8%BA%D8%B0%D9%8A%D8%A9%D8%8C%20Unnamed%20Road,%20%D8%B9%D9%85%D9%91%D8%A7%D9%86%D8%8C%20%E2%80%8F%D8%B9%D9%85%D8%A7%D9%86%E2%80%8F%D8%8C%20%E2%80%8F%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86%E2%80%8F&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
                    <a href="https://2piratebay.org"></a>
                    <br />
                    <style>.mapouter</style>

                    <style>.gmap_canvas</style>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
