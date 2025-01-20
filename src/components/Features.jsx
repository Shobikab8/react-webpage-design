import React from "react";

const Features = () => {
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <div>
        <p className="red-text">Features</p>
      </div>
      <h1 className="h3 fw-bold text-body-emphasis">
        Analytics that feels like it’s from the future
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="text-muted my-3">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

        <div className="feature col">
          <div className="feature-icon">
          <i className="fa-regular fa-comments icon" style={{padding: "11px 9px"}}></i>
          </div>
          <h5>Share team inboxes</h5>
          <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
        </div>

        <div className="feature col">
          <div className="feature-icon">
          <i className="bi bi-lightning-charge icon"></i>
          </div>
          <h5>Deliver instant answers</h5>
          <p>
            An all-in-one customer service platform that helps you balance
            everything your customers need to be happy.
          </p>
        </div>

        <div className="feature col">
          <div className="feature-icon">
            <i className="bi bi-graph-up-arrow icon"></i>
          </div>
          <h5>Manage your team with reports</h5>
          <p>
            Measure what matters with Untitled’s easy-to-use reports. You can
            filter, export, and drilldown on the data in a couple clicks.
          </p>
        </div>

        <div className="feature col">
          <div className="feature-icon">
          <i className="bi bi-emoji-smile icon"></i>
            
          </div>
          <h5>Connect with customers</h5>
          <p>
            Solve a problem or close a sale in real-time with chat. If no one is
            available, customers are seamlessly routed to email without
            confusion.
          </p>
        </div>

        <div className="feature col">
          <div className="feature-icon">
            <i className="bi bi-command icon"></i>
          </div>
          <h5>Connect the tools you already use</h5>
          <p>
            Explore 100+ integrations that make your day-to-day workflow more
            efficient and familiar. Plus, our extensive developer tools.
          </p>
        </div>

        <div className="feature col">
          <div className="feature-icon">
            <i className="bi bi-chat-heart icon"></i>
          </div>
          <h5>Our people make the difference</h5>
          <p>
            We’re an extension of your customer service team, and all of our
            resources are free. Chat to our friendly team 24/7 when you need
            help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
