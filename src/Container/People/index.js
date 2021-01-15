import React from "react";
import peopleStyle from "../MobileApp/scss/mob.module.scss";
import Grid from "@material-ui/core/Grid";
import Button from "../../components/Buttons";

const Testimonies = ({ id, ...props }) => {
  return (
    <section id={id} className={peopleStyle.coopRoot} {...props}>
      <h2 className={peopleStyle.agentCap}>What customers are saying</h2>
      <Grid container className={peopleStyle.content}>
        <Grid item xs={12} lg={3} md={4}>
          <img src="/img/user-1.png" alt="person 1" />
          <p className={peopleStyle.desc}>
            Exalt logistics has been the bes thing that has happened to my
            business. I'm so glad I found them.
          </p>
          <p className="font-weight-bold">
            James Adamu
            <span className={peopleStyle.desc}> - Business Owner</span>
          </p>
        </Grid>
        <Grid item xs={12} lg={3} md={4}>
          <img src="/img/user-2.png" alt="person 2" />
          <p className={peopleStyle.desc}>
            Exalt logistics has been the bes thing that has happened to my
            business. I'm so glad I found them.
          </p>
          <p className="font-weight-bold">
            James Adamu
            <span className={peopleStyle.desc}> - Business Owner</span>
          </p>
        </Grid>
        <Grid item xs={12} lg={3} md={4}>
          <img src="/img/user-3.png" alt="person 3" />
          <p className={peopleStyle.desc}>
            Exalt logistics has been the bes thing that has happened to my
            business. I'm so glad I found them.
          </p>
          <p className="font-weight-bold">
            James Adamu
            <span className={peopleStyle.desc}> - Business Owner</span>
          </p>
        </Grid>
      </Grid>
    </section>
  );
};

export const Personnel = () => {
  return (
    <section className={peopleStyle.personnel}>
      <Grid container className={peopleStyle.container}>
        <Grid item xs={6} lg={5} md={5} className={peopleStyle.info}>
          <img
            src="/img/agent.png"
            alt="delivery personnel on white shirt and cap"
          />
        </Grid>
        <Grid item xs={12} lg={5} md={5} className={peopleStyle.info}>
          <h2 className={peopleStyle.agentCap}>
            Intrested in becoming a delivery personnel?
          </h2>
          <Button className={`btn btn-outline-light`}>Register Now</Button>
        </Grid>
      </Grid>
    </section>
  );
};

export default Testimonies;
