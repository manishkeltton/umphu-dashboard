import Head from "next/head";
import React from "react";

const TermCondition = () => {
  return (
    <>
      <Head>
        <title>Terms &amp; Conditions</title>
      </Head>
      <div className="lg:py-4 text-[#000000]/[.6] md:py-3 max-sm:py-2 lg:px-[4rem] md:px-[3rem] max-sm:px-[1rem]">
        <strong>Terms &amp; Conditions for Zysom Company</strong>
        <div className="my-[20px]">
          <strong>Effective Date : </strong>
          <span>{"2nd Feb 2025"}</span>
        </div>
        <p>
          By downloading, installing, or using Zysom Company, you agree to be
          bound by these Terms & Conditions. If you do not agree, please do not
          use the app.
        </p>
        <br />
        <strong>1. Eligibility</strong>
        <div className="ml-[18px]">No age limit to use this app.</div>
        <br />
        <p>
          <strong>2. User Conduct</strong>
        </p>
        <div className="ml-[18px]">
          <p>You agree not to:</p>
          <ul className="list-disc">
            <li>Use cheats, exploits, or hacks.</li>
            <li>Harass, threaten, or abuse other players.</li>
            <li>Violate any applicable laws or regulations.</li>
            <li>Use bots or automated scripts to manipulate game results.</li>
          </ul>
          <div>
            If you are voilating any of above things, Your account may be
            suspended and also loss exciting rewards.
          </div>
        </div>
        <br />
        <p>
          <strong>3. User Registration</strong>
        </p>
        <div className="ml-[18px]">
          <ol className="list-[upper-roman] ml-[15px]">
            <li>
              If you wish to become a registered User, you will need to create
              an account (‘Account’) on our Platform. Each User is only
              permitted to open one Account. Company reserves the right to
              terminate or suspend any duplicate accounts.
            </li>
            <li>
              In order to apply for an Account, Company may require you to
              register by completing a form and providing certain details
              (listed below), in accordance with the instructions on the
              Platform:
            </li>
          </ol>
          <ul className="list-disc ml-[12px]">
            <li>Full Name</li>
            <li>E-mail address</li>
            <li>Mobile Number</li>
            <li>Country Name</li>
          </ul>
          <div>
            You can also register or log in through your Google or personal
            e-mail address.
          </div>
        </div>
        <br />
        <strong>4. Account Suspension</strong>
        <p className="ml-[18px]">
          We reserve the right to suspend or terminate your account for
          violating these Terms & Conditions or engaging in fraudulent activity.
        </p>
        <p></p>
        <br />
        <strong>5. Security</strong>
        <p className="ml-[18px]">
          We are not liable for any loss, damages or expenses of any kind
          incurred or suffered by you arising from or in connection with any
          failure, delay or interruption, interception, interference, in
          transmitting passwords/OTPs due to any failure of the mobile service
          network or any other circumstance beyond our reasonable control.
        </p>
        <br />
        <strong>6. Updates & Changes</strong>
        <p className="ml-[18px]">
          We may modify or discontinue any aspect of the App at any time.
          Continued use after an update implies acceptance of changes.
        </p>
        <br />
        <strong>7. Contact Us</strong>
        <div className="ml-[18px]">
          If you have any questions about these Terms, please contact us at:
        </div>
        <div className="ml-[18px]">contact@zysom.com</div>
        <div className="ml-[18px]">Patna, Bihar, 800025</div>
      </div>
    </>
  );
};

export default TermCondition;
