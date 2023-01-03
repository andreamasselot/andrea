const CardProject = (props) => {
  return (
    <>
      <div className="card-container">
        <img src={props.image} alt="screenshot" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </>
  );
};
export default CardProject;
