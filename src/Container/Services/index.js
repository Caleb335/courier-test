import React from "react";
import serviceStyle from "./scss/services.module.scss";
import Grid from "@material-ui/core/Grid";
import Divider from "../../components/Divider";

const Services = ({ id, ...props }) => {
  return (
    <section id={id} className={serviceStyle.root} {...props}>
      <Grid container>
        <Grid item xs={12}>
          <h2 className={serviceStyle.serviceCaption}>
            Top of the line expertise in logistics solutuions and services.
          </h2>
          <p className={serviceStyle.desc}>
            We offer top-notch logistics services to individuals and businesses
            at large.
          </p>
        </Grid>
        <Grid container className={serviceStyle.icons}>
          <Grid item xs={12} lg={4} md={6}>
            <img src="/svgs/Tracking.svg" alt="tracking services" />
            <h2 className={serviceStyle.iconTitle}>Tracking</h2>
            <p className={serviceStyle.desc}>
              We offer top-notch logistics services to individuals and
              businesses at large.
            </p>
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <img src="/svgs/Support.svg" alt="tracking services" />
            <h2 className={serviceStyle.iconTitle}>Support</h2>
            <p className={serviceStyle.desc}>
              We offer top-notch logistics services to individuals and
              businesses at large.
            </p>
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <img src="/svgs/Delivery.svg" alt="tracking services" />
            <h2 className={serviceStyle.iconTitle}>Timely Delivery</h2>
            <p className={serviceStyle.desc}>
              We offer top-notch logistics services to individuals and
              businesses at large.
            </p>
          </Grid>
          <Grid item xs={12} lg={4} md={6} className={serviceStyle.mt}>
            <img src="/svgs/Quality.svg" alt="tracking services" />
            <h2 className={serviceStyle.iconTitle}>Quality Assurance</h2>
            <p className={serviceStyle.desc}>
              We offer top-notch logistics services to individuals and
              businesses at large.
            </p>
          </Grid>
          <Grid item xs={12} lg={4} md={6} className={serviceStyle.mt}>
            <img src="/svgs/Rider.svg" alt="rider services" />
            <h2 className={serviceStyle.iconTitle}>Quality Drivers</h2>
            <p className={serviceStyle.desc}>
              We offer top-notch logistics services to individuals and
              businesses at large.
            </p>
          </Grid>
          <Grid item xs={12} lg={4} md={6} className={serviceStyle.mt}>
            <img src="/svgs/Tracking.svg" alt="tracking services" />
            <h2 className={serviceStyle.iconTitle}>Tracking</h2>
            <p className={serviceStyle.desc}>
              We offer top-notch logistics services to individuals and
              businesses at large.
            </p>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
    </section>
  );
};

export default Services;
