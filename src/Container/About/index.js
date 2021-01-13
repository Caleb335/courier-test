import React from "react";
import Grid from "@material-ui/core/Grid";
import aboutStyle from "./scss/about.module.scss";
import Divider from "../../components/Divider";

const About = ({ id }) => {
  return (
    <section id={id} className={aboutStyle.root}>
      <Grid container className={aboutStyle.aboutContent}>
        <Grid item xs={12} lg={6}>
          <h2 className={aboutStyle.aboutCaption}>
            Exalt courier is all about quality service.
          </h2>
          <p className={aboutStyle.aboutDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
            interdum pellentesque in eu turpis in. Nisl condimentum ac dignissim
            et fermentum sem facilisi. Egestas cursus mauris quam purus
            ullamcorper non condimentum sed orci. Erat neque, netus quis gravida
            porta suspendisse nunc commodo eu. A, sodales pharetra ultrices
            nulla a, sed feugiat. Nulla pharetra dapibus vulputate non massa
            venenatis arcu. Nisi, risus risus euismod mattis quis vitae a. Sem
            elementum consectetur quam enim dignissim arcu, dolor. Sapien
            integer id volutpat pharetra a.
          </p>
        </Grid>
        <Grid container className={aboutStyle.delivery}>
          <Grid item xs={12} lg={6} className={aboutStyle.scooter}>
            <img
              src="/svgs/about-Illust.svg"
              className={aboutStyle.aboutImg}
              alt="a delivery personnel riding a red scooter"
            />
          </Grid>
          <Grid item xs={12} lg={6} className={aboutStyle.delInfo}>
            <h2 className={aboutStyle.aboutCaption}>
              We match your parcel size to the right delivery personnel.
            </h2>
            <p className={aboutStyle.abtDelivery}>
              Regardless of your parcel size or quantity. We have the right
              personnel that ensures your parcel(s) gets delivered on time and
              is always in top-notch condition. We do so by scrutinizing all of
              our delivery agents to ensure that they are fit for every role and
              the parcel size category they are assigned to.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </section>
  );
};

export default About;
