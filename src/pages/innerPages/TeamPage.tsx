import { Helmet } from "react-helmet-async";

const TeamPage = () => (
  <>
    <Helmet>
      <title>Our Team - MaxTeam Visual</title>
    </Helmet>
    <div className="container default-padding">
      <h1>Our Team</h1>
      <p><strong>MaxTeam Visual</strong> was founded by <strong>Mohamed Kodiji</strong>, a passionate audiovisual producer. The team is composed of creative professionals specializing in photography, videography, motion design, and post-production. Together, they bring a wealth of experience to every project, from corporate videos to music and fashion shoots.</p>
      <p>Our team is dedicated to delivering high-quality visual content, working closely with clients from concept to final delivery. We pride ourselves on our creativity, technical expertise, and commitment to client satisfaction.</p>
      <h2>Contact Us</h2>
      <ul>
        <li>Phone: <a href="tel:+212638553480">+212 638‑553480</a></li>
        <li>Email: <a href="mailto:kodiji.mohammed@gmail.com">kodiji.mohammed@gmail.com</a></li>
      </ul>
    </div>
  </>
);

export default TeamPage;