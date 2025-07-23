import { Helmet } from "react-helmet-async";

const AboutUsPage = () => (
  <>
    <Helmet>
      <title>About Us - MaxTeam Visual</title>
    </Helmet>
    <div className="container default-padding">
      <h1>About MaxTeam Visual</h1>
      <p><strong>MaxTeam Visual</strong> (stylized as <strong>MAXTEAM VISUALS</strong>) is a Moroccan audiovisual production company based in the Oriental region, particularly in Nador and Oujda. Founded by Mohamed Kodiji, the company specializes in professional photo and video production, offering services that span from concept development to final delivery.</p>
      <h2>Services</h2>
      <ul>
        <li>Visual content creation (photo and video)</li>
        <li>Film and documentary production</li>
        <li>Commercial spots and advertising</li>
        <li>Motion design and animation</li>
        <li>Event coverage and editing</li>
        <li>Color grading and post-production</li>
      </ul>
      <h2>Projects</h2>
      <ul>
        <li>Corporate videos</li>
        <li>Music videos</li>
        <li>Fashion and cultural photography</li>
        <li>Event shoots</li>
        <li>Short films</li>
      </ul>
      <h2>Online Presence</h2>
      <ul>
        <li>Instagram: <a href="https://instagram.com/maxteamvisual" target="_blank" rel="noopener noreferrer">@maxteamvisual</a> – showcases their work and behind-the-scenes content.</li>
        <li>YouTube: <a href="https://youtube.com/@maxteamvisual" target="_blank" rel="noopener noreferrer">@maxteamvisual</a> – features music videos, event coverage (e.g. WCGC Morocco Final), and cinematic productions.</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/company/maxteam-production" target="_blank" rel="noopener noreferrer">MaxTeam Production</a></li>
      </ul>
      <h2>Location</h2>
      <p>Based in the Oriental region of Morocco (Nador & Oujda). Available for projects throughout the country.</p>
      <h2>Contact Information</h2>
      <ul>
        <li>Phone: <a href="tel:+212638553480">+212 638‑553480</a></li>
        <li>Email: <a href="mailto:kodiji.mohammed@gmail.com">kodiji.mohammed@gmail.com</a></li>
        <li>Website: <a href="https://www.maxteamvisual.com" target="_blank" rel="noopener noreferrer">www.maxteamvisual.com</a></li>
      </ul>
    </div>
  </>
);

export default AboutUsPage;