import Header from "../components/Header";
const Home = () => {
  return (
    <>
      <Header />
      <section>
        <div className="page-title">
          <h1>Andréa Masselot</h1>
        </div>
        <div className="presentation">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            quidem rerum odio! Paragrapher de présentation. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Quis, itaque, doloribus,
            distinctio tempora a iusto id porro nihil quo ullam explicabo
            sapiente voluptatum officiis deserunt! Rem fugit unde ea facilis?
          </p>
        </div>

        <div className="container"></div>
      </section>
      <section className="my-projects">
        <h1>My Projects</h1>
      </section>
    </>
  );
};
export default Home;
