import Head from "next/head";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div className="lg:py-4 text-[#000000]/[.6] md:py-3 max-sm:py-2 lg:px-[4rem] md:px-[3rem] max-sm:px-[1rem]">
        <strong>Privacy Policy for Zysom Company</strong>
        <div className="my-[20px]">
          <strong>Effective Date : </strong>
          <span>{"2nd Feb 2025"}</span>
        </div>
        <p>
          Welcome to Zysom Ludo App ("we," "our," or "us"). This Privacy Policy
          explains how we collect, use, and protect your personal information
          when you use our mobile application ("App"). By using our App, you
          agree to the practices described in this policy.
        </p>
        <br />
        <strong>1. Information Collection and Use</strong>
        <p className="ml-[18px]">
          We may collect the following types of information:
        </p>
        <ul className="list-disc ml-[18px]">
          <li>
            <span className="font-semibold">Personal Information: </span>{" "}
            <span>
              If you create an account, we may collect your name, email address,
              and other details you provide.
            </span>
          </li>
          <li>
            <span className="font-semibold">Game Data: </span>
            <span>
              Information related to your gameplay, scores, rankings, and
              achievements.
            </span>
          </li>
          <li>
            <span className="font-semibold">Usage Data: </span>
            <span>
              How you interact with our App, including session duration,
              features used, and game performance.
            </span>
          </li>
        </ul>
        <p></p>
        <br />
        <p>
          <strong>2. How We Use Your Information</strong>
        </p>
        <div className="ml-[18px]">
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc">
            <li>Enhance and personalize your gaming experience.</li>
            <li>Improve our services, features, and performance.</li>
            <li>Prevent fraud and ensure a fair gaming environment.</li>
            <li>Send important updates, and service-related notifications.</li>
          </ul>
        </div>
        <br />
        <strong>3. Sharing Your Information</strong>
        <p className="ml-[18px]">
          We do not share your personal information to any other.
        </p>
        <p></p>
        <br />
        {/* <strong>5.Your Rights and Choices</strong>
        <ul className="list-disc">
          <li>
            <div>Access and Correction:</div>
            <div>
              You can request access to or correction of your personal
              information by contacting us.
            </div>
          </li>
          <li>
            <div>Delete Your Account:</div>
            <div>
              You can request to delete your account and associated data by
              contacting us at contact@zysom.com.
            </div>
          </li>
        </ul>
        <br /> */}
        <strong>4. Data Security</strong>
        <div className="ml-[18px]">
          We implement industry-standard security measures to protect your
          information from unauthorized access, alteration, or destruction.
        </div>
        <br />
        <strong>5. Children’s Privacy</strong>
        <div className="ml-[18px]">
          While our Products and Services may be played and/or visited by
          children, we do not knowingly collect or process any Personal
          Information from children under the age of 13 and hereby specifically
          prohibit any user under the age of 13 from providing us with any
          Personal Information. If you are a parent of a child under 13 years of
          age and you believe your child has provided us with Personal
          Information, please uninstall application from children's system.
        </div>
        <br />
        <strong>6. Changes to This Policy</strong>
        <p className="ml-[18px]">
          This Privacy Policy may be updated from time to time for any reason.
          We will notify you of any changes by posting the updated policy on
          this page and updating the "Effective Date". You are advised to
          consult this Privacy Policy regularly for any changes, as continued
          use is deemed approval of all changes.
        </p>
        <br />

        <strong>7. Contact Us</strong>
        <div className="ml-[18px]">
          If you have any questions about these Privacy Policy, please contact
          us at:
        </div>
        <div className="ml-[18px]">contact@zysom.com</div>
        <div className="ml-[18px]">Patna, Bihar, 800025</div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
