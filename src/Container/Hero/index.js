import React from "react";
import Grid from "@material-ui/core/Grid";
import heroStyle from "./scss/hero.module.scss";
import Divider from "../../components/Divider";

const Hero = ({ id, ...props }) => {
  return (
    <section id={id} className={heroStyle.root} {...props}>
      <Grid container className={heroStyle.content}>
        <Grid item xs={12} lg={5} md={4}>
          <h1 className={heroStyle.heroCaption}>
            Seamless and stress free shipments.
          </h1>
          <p className={heroStyle.heroDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat nulla
            dictum blandit massa. In vestibulum amet egestas nec tellus sed
            donec faucibus. Nunc diam egestas malesuada.
          </p>
          <div className={heroStyle.btnGrid}>
            <img
              src="/img/Apple.png"
              className="app-store"
              alt="download on the app store"
            />
            <img src="/svgs/QR.svg" className="qr-code" alt="qr code" />
            <img
              src="/img/Andriod.png"
              className="play-store"
              alt="download on the android playStore"
            />
            <img src="/svgs/QR.svg" className="qr-code" alt="qr-code" />
          </div>
        </Grid>
        <Grid item xs={12} lg={5} md={6}>
          <img
            src="/svgs/hero-illust.svg"
            className={heroStyle.heroImg}
            alt="a delivery personnel wearing a red shirt and face cap holding parcels"
          />
        </Grid>
      </Grid>
      <div className={heroStyle.partners}>
        <p>Our Partners</p>
        <div className={heroStyle.partnersGrid}>
          <img
            src="/img/providus.png"
            className="providus"
            alt="providus bank logo"
          />
          <img src="/img/axa.png" className="axa" alt="AXA MANSARD logo" />
          <img
            src="/img/paystack.png"
            className="paystack"
            alt="Paystack logo"
          />
          <img
            src="/img/exalt-ecommerce.png"
            className={heroStyle.exaltEcomm}
            alt="Exalt ecommerce Logo"
          />
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default Hero;
