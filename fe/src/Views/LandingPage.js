import React from "react";

const LandingPage = () => {
    return (
        <div className="LandingPage container-fluid">
            <section className="Headers  row d-flex flex-wrap">
                <div className=" firstCol col-12 col-md-7 d-flex flex-column justify-content-center">
                    <h1 className=" display-2 ps-5">Hello,</h1>
                    <br />
                    <p className=" display-5 ps-4">
                        My name is <strong>Rayen</strong>.
                    </p>
                    <p className=" display-6 ps-4">
                        I'm a Full Stack <strong>JavaScript</strong> web{" "}
                        <strong>Developer</strong>.
                    </p>
                    <br />
                    <p className=" lead" style={{ fontSize: "2rem" }}>
                        Get in touch{" "}
                        <i
                            className="bi bi-arrow-right "
                            style={{ fontSize: "1.5rem" }}
                        ></i>{" "}
                        <a
                            className="emaillink"
                            href="mailto:RayenLabidi@protonmail.com"
                            style={{ fontSize: "2rem" }}
                        >
                            RayenLabidi@protonmail.com{" "}
                            <i
                                class="bi bi-box-arrow-up-right"
                                style={{ fontSize: "1.2rem" }}
                            ></i>
                        </a>
                    </p>
                </div>
                <div className="secondCol  col-12 col-md-5">
                    <div className="landingBtns row p-5  lead d-flex flex-wrap justify-content-center align-content-center">
                        <button type="button">Background</button>
                        <button type="button">Skills</button>
                        <button type="button">Projects</button>
                        <button type="button">Contact</button>
                    </div>
                </div>
                <div className="thirdCol col-12  d-flex flex-column justify-content-center">
                        <a href="#" className="aboutme display-6 text-center">
                            More About Me
                        </a>
                    <i
                        className="bi bi-arrow-down  text-center"
                        style={{ fontSize: "2.5rem" }}
                    ></i>
                </div>
            </section>
            <section></section>
            <section></section>
        </div>
    );
};

export default LandingPage;
