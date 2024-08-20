import React from "react";

const policy = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <p className="bg-black text-white text-xl rounded-lg py-60   w-11/12 h-3/4">
        Privacy Policy for FoodHub FoodHub respects your privacy and is
        committed to protecting your personal information. This Privacy Policy
        outlines how we collect, use, and protect your data when you use our
        service. Information We Collect Location Data: We collect your device's
        location to provide you with nearby restaurants. This data is used
        temporarily to deliver relevant results and is not stored permanently.
        Device Information: We may collect general information about your
        device, such as the type of device, operating system, and device
        identifier. This information helps us improve our service. How We Use
        Your Information Location-Based Services: We use your location data to
        display restaurants in your vicinity. Service Improvement: We may use
        device information to enhance the user experience and troubleshoot
        issues. Data Sharing We do not share your personal information with any
        third parties for marketing or other purposes. Data Security We
        implement reasonable security measures to protect your data from
        unauthorized access, disclosure, or alteration. Your Rights You have the
        right to know what data we collect about you and to request its
        deletion. Please contact us at{" "}
        <a href=" foohubofficial@gmail.com " className="text-blue-400">
          foohubofficial@gmail.com
        </a>{" "}
        for any concerns. Changes to This Policy We may update this Privacy
        Policy. We will notify you of any significant changes. By using FoodHub,
        you consent to this Privacy Policy.
      </p>
    </div>
  );
};

export default policy;
