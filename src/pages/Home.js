import Header from "../components/Header";
import CardProject from "../components/CardProject";
import netflix from "../assets/img/netflix.png";
import tripAdvisor from "../assets/img/TripAdvisor.png";
import marvel from "../assets/img/Marvel.png";
import remix from "../assets/img/Remix.png";
import vinted from "../assets/img/Vinted.png";
import happyCow from "../assets/img/HappyCow.png";
import Logos from "../components/Logos";
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
      </section>
      <section className="about-me container">
        <div>
          <h2>About Me</h2>
        </div>
        <div>
          <Logos />
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          placeat cumque minus nulla? Quis laboriosam consectetur deserunt
          officia voluptatum maiores vero vitae quod ea veniam. Tempore
          distinctio deleniti tempora accusantium? Quis rem ab soluta suscipit
          quidem. Dolorum aut nihil sed magnam aperiam, illum quisquam, maiores
          voluptatum adipisci necessitatibus accusamus. At?
        </div>
        <div className="about-me-content"></div>
      </section>
      <section className="my-projects">
        <h1>My Projects</h1>
        <div className="projects">
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
