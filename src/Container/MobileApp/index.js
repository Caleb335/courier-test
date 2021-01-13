import React from "react";
import mobileStyle from "./scss/mob.module.scss";
import Grid from "@material-ui/core/Grid";
import Divider from "../../components/Divider";

const MobileApp = ({ id, ...props }) => {
  return (
    <section id={id} className={mobileStyle.root} {...props}>
      <h2 className={mobileStyle.mobCaption}>
        A mobile app tailored to all your shipment needs.
      </h2>
      <Grid container className={mobileStyle.content}>
        <Grid item xs={12} lg={5} md={4} className={mobileStyle.mobApp}>
          <h2 className={mobileStyle.mobCaption}>
            Stress free shipments, all from your mobile device.
          </h2>
          <p className={mobileStyle.heroDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat nulla
            dictum blandit massa. In vestibulum amet egestas nec tellus sed
            donec faucibus. Nunc diam egestas malesuada In vestibulum amet
            egestas nec tellus sed donec faucibus. Nunc diam egestas malesuada.
          </p>
          <div className={mobileStyle.btnGrid}>
            <img
              src="/img/Apple.png"
              className="app-store"
              alt="download on the app store"
            />
            <img
              src="/img/Andriod.png"
              className="play-store"
              alt="download on the android playStore"
            />
          </div>
        </Grid>
        <Grid item xs={12} lg={5} md={6}>
          <img
            src="/svgs/mobile-app.svg"
            className={mobileStyle.mobImg}
            alt="a delivery personnel wearing a red shirt and face cap holding parcels"
          />
        </Grid>
      </Grid>
      <Divider />
    </section>
  );
};

export default MobileApp;
