import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { AnimatedText } from "../components/AnimatedComponents";
import "./Pages.css";

const Privacy = () => (
  <Container>
    <Row>
      <AnimatedText>
        <h1 className="page-heading">Privacy policy</h1>
      </AnimatedText>
      <div className="page-text-container">
        <AnimatedText delay={150}>
          <div className="page-section">
            <p>
              With this Privacy Policy, we would like to give you an overview of
              the processing of your personal data within the scope of the
              installation and usage of the "Loyalties" mobile application
              (hereinafter referred to as the "App").
            </p>
          </div>
        </AnimatedText>

        <div className="page-section">
          <p className="page-section-heading">1. Information Collection</p>
          <p>
            The App does not collect personal information upon download. Upon
            installation, the device is issued a set of keys used for
            authentication purposes. These keys are stored securely on the
            device.
          </p>
          <p>
            Personal information, such as email, is collected if a user chooses
            to sign up for an account either manually or through Apple / Google
            authentication.
          </p>
        </div>

        <div className="page-section">
          <p className="page-section-heading">2. Consent</p>
          <p>
            By downloading and using the App, users explicitly consent to the
            collection, processing, and storage of their personal data for the
            specified purposes outlined in this Privacy Policy.
          </p>
        </div>

        <div className="page-section">
          <p className="page-section-heading">3. Use of Information</p>
          <p>
            The App is designed for loyalty cards and offers, requiring an
            association with a device or user. Offers may be personalized based
            on user activity, including visited shops and associated loyalty
            cards.
          </p>
          <p>
            If you use the App, we collect and save usage data, including
            information about the cards used, time of usage, and location of
            usage.
          </p>
        </div>

        <div className="page-section">
          <p className="page-section-heading">
            4. Information Storage and Security
          </p>
          <p>
            Personal information collected by the App is stored securely in a
            cloud database. All data transmission between the App and the server
            is encrypted to protect against unauthorized access.
          </p>
        </div>

        <div className="page-section">
          <p className="page-section-heading">5. Information Sharing</p>
          <p>No personal information is shared with third parties.</p>
        </div>

        <div className="page-section">
          <p className="page-section-heading">
            6. Cookies and Tracking Technologies
          </p>
          <p>
            Our website uses cookies and similar tracking technologies to
            analyze website traffic, understand user behavior, and improve your
            experience. We use Google Analytics to collect and analyze usage
            data, which helps us understand how visitors interact with our
            website.
          </p>
          <p>
            You have the right to accept or reject cookies when you first visit
            our website. You can change your cookie preferences at any time by
            clearing your browser cookies and revisiting our website. Please
            note that rejecting cookies may affect your experience on our
            website.
          </p>
          <p>
            For more information about how Google uses data when you use our
            website, please visit{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google's Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="page-section">
          <p className="page-section-heading">7. User Control</p>
          <p>
            Users can add or remove loyalty cards through the App. Deleting the
            App from the device results in certain data being removed.
          </p>
          <p>
            If a user account with email exists, a request for deletion may be
            sent to contact@loyalties.io. We will promptly respond to such
            requests in accordance with applicable laws and regulations.
          </p>
        </div>

        <div className="page-section">
          <p className="page-section-heading">8. Data Retention Policy</p>
          <p>
            We retain personal data only for as long as necessary to fulfill the
            purposes outlined in this Privacy Policy or as required by law. The
            specific retention period for each category of personal data is
            determined based on the purpose of its collection and legal
            requirements. Generally, personal data is retained for the duration
            of the user's account and for a reasonable period thereafter to
            comply with legal obligations, resolve disputes, and enforce our
            agreements.
          </p>
        </div>

        <div className="page-section">
          <p className="page-section-heading">9. Changes to Privacy Policy</p>
          <p>
            Any changes to the Privacy Policy will be communicated within the
            App. Users will be required to review and accept the updated policy
            before continuing to use the App.
          </p>
        </div>

        <div className="page-section">
          <p className="page-section-heading">10. Contact Us</p>
          <p>
            If you have any questions or concerns about our Privacy Policy or
            wish to exercise your data subject rights, please contact us at
            contact@loyalties.io.
          </p>
        </div>
      </div>
    </Row>
  </Container>
);

export default Privacy;
