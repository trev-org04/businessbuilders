import "../App.css";
import styles from "../assets/styles/Home.module.css";
import Logo from "../assets/Business Builders Logo.png";
import Rohan from "../assets/rsuggala.JPEG";
import Trevor from "../assets/tgerald.JPEG";
import Andrew from "../assets/ashaheen.JPEG";
import Jen from "../assets/jhazlett.jpg";
import Pratham from "../assets/pkancherla.JPEG";
import Ava from "../assets/ava.JPEG";
import Aryan from "../assets/abommena.JPEG";
import Andrea from "../assets/andrea.JPEG";
import Alex from "../assets/amcnichols.jpg";
import LinkedIn from "../assets/images/linkedin.svg"
import { Link } from "react-router-dom";

function Leadership() {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.header}>
        <Link to="/">
          <img
            src={Logo}
            className={styles.headerLogo}
            alt="Business Builders Logo"
          ></img>
        </Link>
        <div className={styles.headerLinkContainer}>
          <Link className={styles.headerLink} to="/">
            Home
          </Link>
          <Link className={styles.headerLink} to="/aboutus">
            About Us
          </Link>
          <Link className={styles.headerLink} to="/leadership">
            Leadership
          </Link>
          <Link className={styles.headerLink} to="/appform">
            Join Us
          </Link>
          <Link className={styles.headerLink} to="/payment">
            Payment
          </Link>
        </div>
        <a className={styles.headerIconLink} href="/">
          <span class={`material-symbols-rounded ${styles.headerIcon}`}>
            hub
          </span>
        </a>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div></div>
        <div className={styles.landingSubcontainer}>
          <span className={styles.landingYear}>2024-25</span>
          <span className={styles.landingTitle}>
            Meet the Team
            <br />
          </span>
        </div>
        <span className={`material-symbols-rounded ${styles.landingIcon}`}>
          arrow_downward_alt
        </span>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <span className={styles.missionTitle}>Our Leadership</span>
          <div className={styles.missionItemsContainer}>
            <div className={styles.missionItemContainer}>
              <img
                src={Rohan}
                alt="Profile"
                style={{ borderRadius: "50%", width: "270px", height: "270px" }}
              />
              <span className={styles.profileName}>
                Rohan Suggala
                <br />
              </span>
              <span className={styles.missionItemDescription}>President</span>
            </div>
            <div className={styles.missionItemContainer}>
              <img
                src={Trevor}
                alt="Profile"
                style={{ borderRadius: "50%", width: "270px", height: "270px" }}
              />
              <span className={styles.profileName}>
                Trevor Gerald
                <br />
              </span>
              <span className={styles.missionItemDescription}>
                Vice President
              </span>
            </div>
            <div className={styles.missionItemContainer}>
              <img
                src={Pratham}
                alt="Profile"
                style={{ borderRadius: "50%", width: "270px", height: "270px" }}
              />
              <span className={styles.profileName}>
                Pratham Kancherla
                <br />
              </span>
              <span className={styles.missionItemDescription}>
                Vice President of Technology
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <span className={styles.missionTitle}>Our Leadership</span>
          <div className={styles.missionItemsContainer}>
            <div className={styles.missionItemContainer}>
              <img
                src={Andrew}
                alt="Profile"
                style={{ borderRadius: "50%", width: "270px", height: "270px" }}
              />
              <span className={styles.profileName}>
                Andrew Shaheen
                <br />
              </span>
              <span className={styles.missionItemDescription}>
                Vice President of Finance
              </span>
            </div>
            <div className={styles.missionItemContainer}>
              <img
                src={Ava}
                alt="Profile"
                style={{ borderRadius: "50%", width: "270px", height: "270px" }}
              />
              <span className={styles.profileName}>
                Ava Kolesnikov
                <br />
              </span>
              <span className={styles.missionItemDescription}>
                Vice President of Socials
              </span>
            </div>
            <div className={styles.missionItemContainer}>
              <img
                src={Jen}
                alt="Profile"
                style={{ borderRadius: "50%", width: "270px", height: "270px" }}
              />
              <span className={styles.profileName}>
                Jen Hazlett
                <br />
              </span>
              <span className={styles.missionItemDescription}>
                Vice President of Membership
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <span className={styles.missionTitle}>Our Leadership</span>
          <span className={styles.sectionTitle}>Social</span>
          <div className={styles.missionItemsContainer}>
            <div className={styles.missionItemContainer}>
              <img
                src={Aryan}
                alt="Profile"
                style={{ borderRadius: "50%", width: "270px", height: "270px" }}
              />
              <span className={styles.profileName}>
                Aryan Bommena
                <br />
              </span>
              <span className={styles.missionItemDescription}>
                Vice President of Strategy
              </span>
            </div>
            <div className={styles.missionItemContainer}>
              <img
                src={Alex}
                alt="Profile"
                style={{ borderRadius: "50%", width: "270px", height: "270px" }}
              />
              <span className={styles.profileName}>
                Alex McNichols
                <br />
              </span>
              <span className={styles.missionItemDescription}>
                Vice President of Community
              </span>
            </div>
            <div className={styles.missionItemContainer}>
              <img
                src={Andrea}
                alt="Profile"
                style={{ borderRadius: "50%", width: "270px", height: "270px" }}
              />
              <span className={styles.profileName}>
                Andrea Berkebile
                <br />
              </span>
              <span className={styles.missionItemDescription}>
                Vice President of Marketing
              </span>
              <img
                src={Rohan}
                className={styles.leadershipHeadshot}
                alt="Rohan Suggala - President"
              ></img>
              <span className={styles.leadershipName}>
                Henry Guerrera
                <br />
              </span>
              <div className={styles.leadershipInfoContain}>
                <span className={styles.leadershipTitle}>President</span>
                <a
                  href="https://www.linkedin.com/in/rohansuggala/"
                  style={{
                    margin: 0,
                    padding: 0,
                    width: "20px",
                    height: "20px",
                  }}
                >
                  <img
                    src={LinkedIn}
                    className={styles.leadershipIcon}
                    alt="LinkedIn"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <span className={styles.sectionTitle}>Events</span>
          <div className={styles.missionItemsContainer}>
            <div className={styles.missionItemContainer}>
              <img
                src={Rohan}
                className={styles.leadershipHeadshot}
                alt="Rohan Suggala - President"
              ></img>
              <span className={styles.leadershipName}>
                Alex McNichols
                <br />
              </span>
              <div className={styles.leadershipInfoContain}>
                <span className={styles.leadershipTitle}>President</span>
                <a
                  href="https://www.linkedin.com/in/rohansuggala/"
                  style={{
                    margin: 0,
                    padding: 0,
                    width: "20px",
                    height: "20px",
                  }}
                >
                  <img
                    src={LinkedIn}
                    className={styles.leadershipIcon}
                    alt="LinkedIn"
                  ></img>
                </a>
              </div>
            </div>
            <div className={styles.missionItemContainer}>
              <img
                src={Rohan}
                className={styles.leadershipHeadshot}
                alt="Rohan Suggala - President"
              ></img>
              <span className={styles.leadershipName}>
                Aryan Bommena
                <br />
              </span>
              <div className={styles.leadershipInfoContain}>
                <span className={styles.leadershipTitle}>President</span>
                <a
                  href="https://www.linkedin.com/in/rohansuggala/"
                  style={{
                    margin: 0,
                    padding: 0,
                    width: "20px",
                    height: "20px",
                  }}
                >
                  <img
                    src={LinkedIn}
                    className={styles.leadershipIcon}
                    alt="LinkedIn"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
