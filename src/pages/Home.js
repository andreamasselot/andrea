import Header from "../components/Header";
import CardProject from "../components/CardProject";
import netflix from "../assets/img/netflix.png";
import tripAdvisor from "../assets/img/TripAdvisor.png";
import marvel from "../assets/img/Marvel.png";
import remix from "../assets/img/Remix.png";
import vinted from "../assets/img/Vinted.png";
import happyCow from "../assets/img/HappyCow.png";
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
        <div className="projects">
          {" "}
          <CardProject
            image={netflix}
            title="Netflix"
            description="DESCRIPTION DESCRIOPRFEHJEGHKRGJREJ"
          />
          <CardProject
            image={remix}
            title="Remix"
            description="DESCRIPTION DESCRIOPRFEHJEGHKRGJREJ"
          />
          <CardProject
            image={tripAdvisor}
            title="Trip Advisor"
            description="DESCRIPTION DESCRIOPRFEHJEGHKRGJREJ"
          />
          <CardProject
            image={marvel}
            title="Marvel"
            description="DESCRIPTION DESCRIOPRFEHJEGHKRGJREJ"
          />
          <CardProject
            image={vinted}
            title="Vinted"
            description="DESCRIPTION DESCRIOPRFEHJEGHKRGJREJ"
          />
          <CardProject
            image={happyCow}
            title="Happy Cow"
            description="DESCRIPTION DESCRIOPRFEHJEGHKRGJREJ"
          />
        </div>
      </section>
    </>
  );
};
export default Home;
