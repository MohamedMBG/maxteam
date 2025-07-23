import { Helmet } from "react-helmet-async";

const ProjectPage = () => (
  <>
    <Helmet>
      <title>Project Showcase - MaxTeam Visual</title>
    </Helmet>
    <div className="container default-padding">
      <h1>Project Showcase</h1>
      <p>At <strong>MaxTeam Visual</strong>, we bring stories to life through a wide range of audiovisual projects. Our portfolio includes:</p>
      <ul>
        <li>Corporate videos</li>
        <li>Music videos</li>
        <li>Fashion and cultural photography</li>
        <li>Event shoots</li>
        <li>Short films</li>
        <li>Commercial spots and advertising</li>
        <li>Documentary production</li>
        <li>Motion design and animation</li>
      </ul>
      <p>We collaborate with clients from concept to final delivery, ensuring each project reflects their vision and our creative expertise.</p>
      <h2>See More</h2>
      <ul>
        <li>Instagram: <a href="https://instagram.com/maxteamvisual" target="_blank" rel="noopener noreferrer">@maxteamvisual</a></li>
        <li>YouTube: <a href="https://youtube.com/@maxteamvisual" target="_blank" rel="noopener noreferrer">@maxteamvisual</a></li>
      </ul>
    </div>
  </>
);

export default ProjectPage;