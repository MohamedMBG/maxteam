import { Helmet } from "react-helmet-async";

const ContactUsPage = () => (
  <>
    <Helmet>
      <title>Contact Us - MaxTeam Visual</title>
    </Helmet>
    <div className="container default-padding">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to MaxTeam Visual for your next audiovisual project.</p>
      <ul>
        <li>Phone: <a href="tel:+212638553480">+212 638‑553480</a></li>
        <li>Email: <a href="mailto:kodiji.mohammed@gmail.com">kodiji.mohammed@gmail.com</a></li>
        <li>Website: <a href="https://www.maxteamvisual.com" target="_blank" rel="noopener noreferrer">www.maxteamvisual.com</a></li>
        <li>Location: Oriental region, Morocco (Nador & Oujda)</li>
      </ul>
      <h2>Follow Us</h2>
      <ul>
        <li>Instagram: <a href="https://instagram.com/maxteamvisual" target="_blank" rel="noopener noreferrer">@maxteamvisual</a></li>
        <li>YouTube: <a href="https://youtube.com/@maxteamvisual" target="_blank" rel="noopener noreferrer">@maxteamvisual</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/company/maxteam-production" target="_blank" rel="noopener noreferrer">MaxTeam Production</a></li>
      </ul>
    </div>
  </>
);

export default ContactUsPage;