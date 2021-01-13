import React from "react";
import coopStyle from "../MobileApp/scss/mob.module.scss";
import Grid from "@material-ui/core/Grid";
import Divider from "../../components/Divider";
import Button from "../../components/Buttons";

const Cooperation = ({ id, ...props }) => {
  return (
    <section id={id} className={coopStyle.coopRoot}>
      <h2 className={coopStyle.agentCap}>
        Need quality shipment for your cooperation? Look no further.{" "}
      </h2>
      <Grid container className={coopStyle.content}>
        <Grid item xs={12} lg={5} md={4} className={coopStyle.org}>
          <h2 className={coopStyle.agentCap}>
            We help you manage all your organization's shipments.{" "}
          </h2>
          <p className={coopStyle.heroDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat nulla
            dictum blandit massa. In vestibulum amet egestas nec tellus sed
            donec faucibus. Nunc diam egestas malesuada In vestibulum amet
            egestas nec tellus sed donec faucibus. Nunc diam egestas malesuada.
          </p>
          <Button className="btn-primary btn-md">
            Rgister your organization
          </Button>
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <img
            src="/svgs/coop-illust.svg"
            className={coopStyle.mobImg}
            id={coopStyle.cooperate}
            alt="a delivery personnel wearing a red shirt and face cap holding parcels"
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default Cooperation;
