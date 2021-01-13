import React from "react";
import mobileStyle from "../MobileApp/scss/mob.module.scss";
import Grid from "@material-ui/core/Grid";
import Divider from "../../components/Divider";
import Button from "../../components/Buttons";

const Agents = ({ id }) => {
  return (
    <section id={id} className={mobileStyle.agentRoot}>
      <h2 className={mobileStyle.agentCap}>
        Join the Exalt network of agents and earn good income.{" "}
      </h2>
      <Grid container className={mobileStyle.content}>
        <Grid item xs={12} lg={4} md={6} className={mobileStyle.mobApp}>
          <img
            src="/svgs/agent-Illust.svg"
            className={mobileStyle.mobImg}
            alt="a delivery personnel wearing a red shirt and face cap holding parcels"
          />
        </Grid>
        <Grid item xs={12} lg={5} md={4} className={mobileStyle.commission}>
          <h2 className={mobileStyle.agentCap}>
            Become an agent today and start receiving commissions.
          </h2>
          <p className={mobileStyle.heroDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat nulla
            dictum blandit massa. In vestibulum amet egestas nec tellus sed
            donec faucibus. Nunc diam egestas malesuada In vestibulum amet
            egestas nec tellus sed donec faucibus. Nunc diam egestas malesuada.
          </p>
          <Button className="btn-primary btn-md">Become an agent</Button>
        </Grid>
      </Grid>
      <Divider />
    </section>
  );
};

export default Agents;
