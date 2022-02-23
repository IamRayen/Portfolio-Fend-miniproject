import React from "react";

const About = () => {
    return (
        <div className="About-container d-flex align-items-center pb-5">
            <div className="about-content container d-flex flex-column flex-wrap">
                <h1 className="display-4">Who Is Rayen?</h1>
                <br />
                <p className="lead ps-3">
                    A very passionate{" "}
                    <span className="text-decoration-underline">
                        JavaScript
                    </span>{" "}
                    web Developer.
                </p>
                <p className="ps-4">
                    I'm a curious guy who has tried many things and stumbled
                    across web development.
                    <br /> It was one of the best things I did in my life.{" "}
                </p>
                <p className="ps-4">
                    Learning to work with a Programming Language like JavaScript
                    was super fun and made me want to continue the journey in
                    the programming field.
                    <br />
                    Next year I will be studying Software Engineering in Germany
                    while using and developing my skills as a web developer.
                </p>
                <br />
                <p className="fs-5">
                    Looking for more?{" "}
                    <span className="fs-6">
                        check my{" "}
                        <a
                            className="linkedIn-link text-decoration-none"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/rayenlabidi-full-stack-javascript-developer"
                        >
                            LinkedIn profile
                            <i className="bi px-1 bi-box-arrow-up-right"></i>
                            .
                        </a>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default About;
