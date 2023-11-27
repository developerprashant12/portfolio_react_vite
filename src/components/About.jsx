import React from "react";
import aboutImg from "../assets/images/prashant.png";
import pdf from "../../pm.pdf";

const About = () => {
  const info = [
    { text: "Years experience", count: "1" },
    { text: "Completed Projects", count: "4" },
    { text: "Companies Work", count: "2" },
  ];

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = pdf;
    downloadLink.download = "pm.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I'm a hardworking and creative professional who loves ReactJs.
                In the last 1 years, I've learned a lot and worked on [HTML,
                CSS, ReactJS , MongoDB, Redux-Toolkit, Firebase, Bootstrap,
                Python or NodeJS], contributing to [4] successful projects. I'm
                really good at [ReactJS], combining technical know-how with
                passion to come up with new ideas. I always try to do my best
                and enjoy working in fast-changing environments that push me to
                keep learning. Outside of work, I like [watching movies, eating
                food, sleeping, walking around and talking people], which help me
                see things from different angles. I'm excited to use my skills
                to make a positive impact in the future.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a>
                <button className="btn-primary" onClick={handleDownload}>
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
