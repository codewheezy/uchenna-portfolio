import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-semibold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-semibold">
              Computer Appications
            </h5>
            {/* <p className="font-semibold">Bangalore University (2015-2018)</p>
            <p className="my-3">
              I currently pursuing B.tech in Computer Science Engineering
              from Academy of Technology
            </p> */}
          </div>
        </div>
        <div>
          {/* <h5 className="my-3 text-2xl font-semibold">Experience</h5>
          <div className="">
          <h5 className="my-2 text-xl font-semibold">Frontend Developer</h5>
            <p className="font-semibold"> - Saudi Arabia</p>
            <p className="my-3">I don't know why I am doing this job</p>
            <h5 className="my-2 text-xl font-semibold">Mobile Developer</h5>
            <p className="font-semibold">Qleanapp Jeddah - Saudi Arabia</p>
            <p className="my-3">I don't know why I am doing this job</p>
            <h5 className="my-2 text-xl font-semibold">Frontend Developer</h5>
            <p className="font-semibold">Codigo World - Bangalore, India</p>
            <p className="my-3"></p>
          </div> */}
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-semibold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-semibold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
