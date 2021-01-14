import React from "react";
import Grid from "@material-ui/core/Grid";
import contactStyle from "./scss/contact.module.scss";
import Button from "../../components/Buttons";
import Input, { Textarea } from "../../components/Inputs";

const Contact = ({ id, ...props }) => {
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
              <Input type="text" name="fullname" className={`form-control`} />
            </div>
            <div className="form-group">
              <label htmlFor="full name">Full Name</label>
              <Input type="text" name="fullname" className={`form-control`} />
            </div>
            <div className="form-group">
              <label htmlFor="full name">Full Name</label>
              <Textarea
                name="message"
                className={`text-control`}
                rows="10"
              ></Textarea>
            </div>
            <Button className="btn-md btn-primary" type="submit">
              Submit
            </Button>
          </form>
        </Grid>
        {/* <Grid item xs={12} lg={5} md={4}>
          <div className={contactStyle.address}>
            <p className={contactStyle.desc}>Lagos Nigeria Office</p>
            <p className={contactStyle.desc}>
              The Waterside, 5, Admiralty way, Lekki phase 1, Lagos.
            </p>
            <p className={contactStyle.desc}>Lagos Nigeria Office</p>
            <p className={contactStyle.desc}>
              The Waterside, 5, Admiralty way, Lekki phase 1, Lagos.
            </p>
            <p className={contactStyle.desc}>Lagos Nigeria Office</p>
            <p className={contactStyle.desc}>
              The Waterside, 5, Admiralty way, Lekki phase 1, Lagos.
            </p>
            <p className={contactStyle.desc}>Lagos Nigeria Office</p>
            <p className={contactStyle.desc}>
              The Waterside, 5, Admiralty way, Lekki phase 1, Lagos.
            </p>
          </div>
        </Grid> */}
      </Grid>
    </section>
  );
};

export default Contact;
