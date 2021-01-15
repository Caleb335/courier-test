import React from "react";
import Grid from "@material-ui/core/Grid";
import contactStyle from "./scss/contact.module.scss";
import Button from "../../components/Buttons";
import Input, { Textarea } from "../../components/Inputs";

const Contact = ({ id, ...props }) => {
  const [input, setInput] = React.useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <section id={id} {...props} className={contactStyle.root}>
      <h2 className={contactStyle.contactCap}>Get in touch with us.</h2>
      <p className={contactStyle.desc}>
        Have a complaint, or you just need help with any of our services. Just
        fill out the form below, and you will receive a reply soonest.
      </p>
      <Grid container className={contactStyle.content}>
        <Grid item xs={12} lg={5} md={4}>
          <form>
            <div className="form-group">
              <label htmlFor="full name">Full Name</label>
              <Input
                type="text"
                value={input.fullname}
                name="fullname"
                className={`form-control`}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <Input
                type="email"
                name="email"
                value={input.email}
                className={`form-control`}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="full name">Full Name</label>
              <Textarea
                name="message"
                defaultValue={input.message}
                className={`text-control`}
                rows="10"
                onChange={handleChange}
              ></Textarea>
            </div>
            <Button className="btn-md btn-primary" type="submit">
              Submit
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} lg={5} md={4}>
          <div className={contactStyle.address}>
            <div className={contactStyle.lagos}>
              <p>Lagos Nigeria Office</p>
              <p>The Waterside, 5, Admiralty way, Lekki phase 1, Lagos.</p>
              <div className={contactStyle.numbers}>
                <p style={{ color: "red" }}>
                  P: <span>+234 1280 9113</span>
                </p>
                <p style={{ color: "red" }}>
                  E: <span>admin@exaltapp.com</span>
                </p>
              </div>
            </div>
            <div className={contactStyle.lagos}>
              <div className={contactStyle.numbers2}>
                <p style={{ color: "red" }}>
                  P: <span>+234 1280 9113</span>
                </p>
                <p style={{ color: "red" }}>
                  E: <span>admin@exaltapp.com</span>
                </p>
              </div>
              <p>Lagos Nigeria Office</p>
              <p>The Waterside, 5, Admiralty way, Lekki phase 1, Lagos.</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Contact;
