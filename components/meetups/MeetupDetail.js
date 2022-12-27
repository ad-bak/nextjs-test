import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <address>{props.address}</address>
    </section>
  );
}

export default MeetupDetail;
