import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
const Hero = () => {
  return (
    <div className="px-4 pt-5 mb-5 text-center border-bottom">
        <div className="d-flex flex-column align-items-center mb-4">
        <a href="#"><div className="d-flex gap-3 red-text red-outline p-1">
            <p className="red-bg red-outline mb-0 px-3">New feature</p>
            <p className="mb-0 d-flex align-items-center px-2">Check out the team dashboard <ArrowRightIcon width={10} height={10}/></p>
        </div></a>
        </div>
      <h1 className="display-6 fw-bold text-body-emphasis">
        Beautiful analytics to grow smarter
      </h1>
      <div className="col-sm-6 mx-auto">
        <p className="text-muted mt-3 mb-4">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button
            type="button"
            className="btn btn-outline-dark btn-lg btn-demo d-flex flex-row justify-content-center"
            fdprocessedid="s51m1t"
          >
            <div>
              <PlayCircleIcon width={25} height={25} style={{paddingRight: "5px"}}/> Demo
            </div>
          </button>
          <button
            type="button"
            className="btn btn-lg px-4 btn-red signup"
            fdprocessedid="8qn2gh"
          >
            Sign up
          </button>
        </div>
      </div>
      <div className="overflow-hidden" style={{ maxHeight: "80vh" }}>
        <div className="container px-5">
          <img
            src="/assets/image 1.png"
            className="img-fluid border rounded-3 mb-4"
            alt="Example image"
            width="2000px"
            height="560px"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
