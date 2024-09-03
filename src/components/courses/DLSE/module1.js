import React from "react";
import { Dropdown } from "../../buttons/dropdown";

const courses = [
  {
    courseID: 1,
    title: ["1.2 Primer Python", "1.3 Deep Learning Networks"],
    link: [
      "https://colab.research.google.com/drive/158mKtWkbrdZwxNoot1cta2d0Kr-eOjbt",
      "https://colab.research.google.com/drive/1ZN7hePGouCijeWvwdpFFmPuuOKYEPbh7",
    ],
    desc: [
      "A primer on Python and NumPy, SciPy and Matplotlib",
      "Deep Neural Networks",
    ],
  },
];
console.log(courses[0].title[0]);
// find which courseID fits
// loop through and grab all data correlated with that course

export const Mod1 = () => {
  var index = 0;
  let savedCourse = [];
  courses.map((course) =>
    course.courseID == 1 ? (savedCourse = course) : index++
  );
  console.log(savedCourse);
  return (
    <>const size = savedCourse.title.length;
      console.log(size);
      <h2>Labs</h2>
      <Dropdown title={savedCourse.title[0]}>
        <a
          href={savedCourse.link[0]}
          target="_blank"
          rel="noreferrer"
          className="lab_links"
        >
          {savedCourse.desc[0]}
        </a>
      </Dropdown>
      <Dropdown title="1.3 Deep Learning Networks">
        <a
          href="https://colab.research.google.com/drive/1ZN7hePGouCijeWvwdpFFmPuuOKYEPbh7"
          target="_blank"
          rel="noreferrer"
          className="lab_links"
        >
          Deep Neural Networks
        </a>
      </Dropdown>
      <Dropdown title="1.4 Primer PFT Jax">
        <a
          href="https://colab.research.google.com/drive/1Bwrz13cEgYINzBo8XA8bq_ivx_fbG22d"
          target="_blank"
          rel="noreferrer"
          className="lab_links"
        >
          Pytorch Primer
        </a>
        <a
          href="https://colab.research.google.com/drive/1uZzfCDal6tpBMAzb9rZ3WTn-0VOukQ3S"
          target="_blank"
          rel="noreferrer"
          className="lab_links"
        >
          Tensorflow Primer
        </a>
        <a
          href="https://colab.research.google.com/drive/1MgfKGcUQmnkSaLqi_zepDVp4_HfkwWwl"
          target="_blank"
          rel="noreferrer"
          className="lab_links"
        >
          PyTorch vs TensorFlow
        </a>
        <a
          href="https://colab.research.google.com/drive/1kE8a1awRagvrVEllJr2wVYxip8mL-UHI"
          target="_blank"
          rel="noreferrer"
          className="lab_links"
        >
          JAX Primer
        </a>
        <a
          href="https://colab.research.google.com/drive/1v4pEo3a8OIhKaEok3PW-JQiMHeKpDtmm"
          target="_blank"
          rel="noreferrer"
          className="lab_links"
        >
          Saving and restoring model in TensorFlow
        </a>
      </Dropdown>
      <Dropdown title="1.5 Training and Optimization">
        <a
          href="https://colab.research.google.com/drive/1GEBAljEa1xjyAIRsVsfdL0Wm631s9GFW"
          target="_blank"
          rel="noreferrer"
          className="lab_links"
        >
          Implementation of various learning rate scheduler
        </a>
        <a
          href="https://colab.research.google.com/drive/136qJZob-SbYgHFVeXI_X-0WpC2x9izQg"
          target="_blank"
          rel="noreferrer"
          className="lab_links"
        >
          Implementation of various Optimizers(various_losses_v_iteration)
        </a>
      </Dropdown>
      <Dropdown title="1.6 Neural Network Architecture">
        <a
          href="https://colab.research.google.com/drive/1owl9-lq75c4yjJ1TmoXAWTfZEYguSvOX"
          target="_blank"
          rel="noreferrer"
          className="lab_links"
        >
          Neural Network Architectures
        </a>
      </Dropdown>
      <h2>Homeworks</h2>
      <Dropdown title="1.2 Primer Python">
        <p>Test</p>
      </Dropdown>
      <Dropdown title="1.3 Deep Learning Networks">
        <p>Test</p>
      </Dropdown>
      <Dropdown title="1.4 Primer PFT Jax">
        <p>Test</p>
      </Dropdown>
      <Dropdown title="1.5 Training and Optimization">
        <p>Test</p>
      </Dropdown>
      <Dropdown title="1.6 Neural Network Architecture">
        <p>Test</p>
      </Dropdown>
    </>
  );
};
