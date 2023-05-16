import React from "react";
import styles from "../styles/privacy.module.css"; // Import the CSS module

const PrivacyPolicy = () => {
  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <h1>Privacy Policy</h1>
      <div className={styles.section}>
        <h2>About the Service</h2>
        <p>
          <strong>
            MyMessages (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;our&rdquo;) operates the MyMessages mobile application (the
            &ldquo;Service&rdquo;).
          </strong>
        </p>
        <p>
          This page informs you of our policies regarding the collection, use,
          and disclosure of personal data when you use our Service and the
          choices you have associated with that data.
        </p>
        <p>
          By using the Service, you agree to the collection and use of
          information in accordance with this policy. Unless otherwise defined
          in this Privacy Policy, terms used in this Privacy Policy have the
          same meanings as in our Terms and Conditions.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Information Collection and Use</h2>
        <p>
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </p>

        <div className={styles.subsection}>
          <h3>Types of Data Collected</h3>
          <p>
            <strong>Personal Data</strong>
          </p>
          <p>
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you (&ldquo;Personal Data&rdquo;). Personally identifiable
            information may include, but is not limited to:
          </p>
          <ul>
            <li>
              <strong>Phone information:</strong> (we require this to use the
              READ_PHONE_STATE permission in the Android system).
            </li>
          </ul>
        </div>

        <div className={styles.subsection}>
          <h3>Use of Data</h3>
          <p>MyMessages uses the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>
              To allow you to participate in interactive features of our Service
              when you choose to do so
            </li>
            <li>To provide customer care and support</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Age Limitation</h2>
        <p>
          <strong>
            Our Service is not intended for use by individuals under the age of
            18. We do not knowingly collect personally identifiable information
            from individuals under 18. If we become aware that we have collected
            Personal Data from children without verification of parental
            consent, we take steps to remove that information from our servers.
          </strong>
        </p>
      </div>

      <div className={styles.section}>
        <h2>Security of Data</h2>
        <p>
          The security of your data is important to us, but remember that no
          method of transmission over the Internet, or method of electronic
          storage is 100% secure. While we strive to use commercially acceptable
          means to protect your Personal Data, we cannot guarantee its absolute
          security.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong> orelsmail@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
