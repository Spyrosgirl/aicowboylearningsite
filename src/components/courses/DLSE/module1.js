import React from "react";
import { Dropdown } from "../../buttons/dropdown";

export const Mod1 = () => {
  return (
    <>
      <h2>Labs</h2>
      <Dropdown title="1.2 Primer Python">
        <a
          href="https://colab.research.google.com/drive/158mKtWkbrdZwxNoot1cta2d0Kr-eOjbt"
          target="_blank"
          rel="noreferrer"
        >
          Lab 1.2
        </a>
      </Dropdown>
      <Dropdown title="1.3 Deep Learning Networks">
         <p>test</p>
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
