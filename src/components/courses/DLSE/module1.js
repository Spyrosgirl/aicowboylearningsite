import React from "react";
import { Dropdown } from "../../buttons/dropdown";

const courses = [
  {
    courseID: 1,
    title: [
      "1.2 Primer Python",
      "1.3 Deep Learning Networks",
      "1.4 Primer PFT Jax",
    ],
    link: [
      [
        "https://colab.research.google.com/drive/158mKtWkbrdZwxNoot1cta2d0Kr-eOjbt",
      ],
      [
        "https://colab.research.google.com/drive/1ZN7hePGouCijeWvwdpFFmPuuOKYEPbh7",
      ],
      [
        "https://colab.research.google.com/drive/1Bwrz13cEgYINzBo8XA8bq_ivx_fbG22d",
        "https://colab.research.google.com/drive/1uZzfCDal6tpBMAzb9rZ3WTn-0VOukQ3S",
        "https://colab.research.google.com/drive/1MgfKGcUQmnkSaLqi_zepDVp4_HfkwWwl",
        "https://colab.research.google.com/drive/1kE8a1awRagvrVEllJr2wVYxip8mL-UHI",
        "https://colab.research.google.com/drive/1v4pEo3a8OIhKaEok3PW-JQiMHeKpDtmm",
      ],
    ],
    desc: [
      ["A primer on Python and NumPy, SciPy and Matplotlib"],
      ["Deep Neural Networks"],
      [
        "Pytorch Primer",
        "Tensorflow Primer",
        "PyTorch vs TensorFlow",
        "JAX Primer",
        "Saving and restoring model in TensorFlow",
      ],
    ],
  },
];

export const Mod1 = () => {
  const savedCourse = courses.find((course) => course.courseID === 1);
  return (
    <>
      <h2>Labs</h2>
      {savedCourse &&
        savedCourse.title.map((_, idx) => (
          <Dropdown key={idx} title={savedCourse.title[idx]}>
            {savedCourse.link[idx].map((_, idx2) => (
              <a
                href={savedCourse.link[idx][idx2]}
                target="_blank"
                rel="noreferrer"
                className="lab_links"
                key={idx2}
              >
                {savedCourse.desc[idx][idx2]}
              </a>
            ))}
          </Dropdown>
        ))}
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
