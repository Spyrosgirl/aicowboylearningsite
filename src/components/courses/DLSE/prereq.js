import React from "react";

export const Prereq = () => {
  return (
    <>
      <h1>
        Welcome to the Deep Learning for Science and Engineering Teaching Kit
        labs, homework and project solutions
      </h1>
      <p>
        The kit and associated content are developed jointly by NVIDIA and Brown
        University. All material is available under the{" "}
        <a
          href="http://creativecommons.org/licenses/by-nc/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Creative Commons Attribution-NonCommercial License
        </a>
        .
      </p>

      <h2>System Requirements and Environment Setup</h2>
      
      <h3>NVIDIA GPUs and Modulus</h3>
      <p>
        Thanks to the development of NVIDIA GPUs and the{" "}
        <a
          href="https://developer.nvidia.com/modulus"
          target="_blank"
          rel="noopener noreferrer"
        >
          NVIDIA Modulus
        </a>{" "}
        open-source framework, Physics-ML modeling and engineering simulation is
        more efficient than ever in terms of time and resource cost. Modern
        NVIDIA GPUs (local or in a cloud environment like Colab, see next
        section) and Modulus are needed to develop and run the Teaching Kit labs
        in Module 5, while everything else can be done through Colab.
      </p>
      <p>
        All the information and requirements about what you and your students
        need to get started with Modulus and GPUs can be found on the{" "}
        <a
          href="https://docs.nvidia.com/deeplearning/modulus/getting-started/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          NVIDIA Modulus Getting Started
        </a>{" "}
        webpages.
      </p>

      <h3>Colab Cloud Environment</h3>
      <p>
        All labs through Module 4 can be run on{" "}
        <a
          href="https://colab.research.google.com/notebooks/intro.ipynb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Colab
        </a>
        . Colab is a free cloud-based platform that allows you to write and
        execute Python code in a web-based environment. It provides access to
        computing resources, including GPUs. No installation is required as
        everything runs in a web browser. Install additional libraries as needed
        (see next section).
      </p>

      <h3>Anaconda</h3>
      <p>
        Anaconda is the suggested Python distribution and can be downloaded{" "}
        <a
          href="https://www.anaconda.com/products/individual"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>

      <h3>Python Libraries: NumPy, SciPy and Matplotlib</h3>
      <ul>
        <li>
          <strong>NumPy</strong>: tools for numerical computations and array
          manipulation
        </li>
        <li>
          <strong>SciPy</strong>: advanced mathematical functions and
          optimization tools
        </li>
        <li>
          <strong>Matplotlib</strong>: data visualizations and plots
        </li>
      </ul>
      <p>
        Together, these libraries provide a comprehensive toolkit for data
        analysis, scientific computing and data visualization for the Teaching
        Kit. You can use Anaconda to install and manage these libraries.
      </p>
      <p>Documentation:</p>
      <ul>
        <li>
          <a
            href="https://numpy.org/doc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NumPy
          </a>
        </li>
        <li>
          <a
            href="https://docs.scipy.org/doc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SciPy
          </a>
        </li>
        <li>
          <a
            href="https://matplotlib.org/stable/contents.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Matplotlib
          </a>
        </li>
      </ul>

      <h3>TensorFlow, PyTorch, and JAX</h3>
      <p>
        TensorFlow, PyTorch, and JAX are the libraries and deep learning
        frameworks used in the Teaching Kit.
      </p>
      <ul>
        <li>
          <strong>TensorFlow</strong>: widely used for building and training
          deep neural networks, offers high-level APIs for quick development and
          low-level control
        </li>
        <li>
          <strong>PyTorch</strong>: known for its dynamic computation graph,
          making it flexible for the development of deep learning models
        </li>
        <li>
          <strong>JAX</strong>: library for numerical computing and automatic
          differentiation providing good performance and compatibility with
          NumPy
        </li>
      </ul>
      <p>You can use Anaconda to install and manage these libraries.</p>
      <p>Documentation:</p>
      <ul>
        <li>
          <a
            href="https://www.tensorflow.org/guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            TensorFlow
          </a>
        </li>
        <li>
          <a
            href="https://pytorch.org/docs/stable/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            PyTorch
          </a>
        </li>
        <li>
          <a
            href="https://jax.readthedocs.io/en/latest/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            JAX
          </a>
        </li>
      </ul>

      <h2>Labs</h2>
      <p>
        The labs are designed as hands-on programming exercises and
        demonstrations for students tied to the lecture slides. The{" "}
        <code>Labs</code> folder found in each module directory here in the
        repository contains the interactive labs (Jupyter notebooks in the{" "}
        <code>.ipynb</code> format) and associated files and data sets. Each of
        the Jupyter notebooks begins with a description of the lab, objectives
        and self-guided instructions. Jupyter Notebooks are open-source web
        applications that allow creation and sharing of documents that contain
        live code, equations, visualizations and explanatory text. They provide
        a unique way for students to interact with and develop their lab
        solutions for the Deep Learning for Science and Engineering Teaching
        Kit. More information, links to communities and documentation about
        Jupyter notebooks can be found at{" "}
        <a
          href="https://jupyter.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          jupyter.org
        </a>
        .
      </p>

      <h2>Homework Solutions</h2>
      <p>
        The homework solutions are provided here as source files in the{" "}
        <code>Homework/solutions</code> directory of Module 1. Homework and
        associated solutions are currently only available for Module 1.
      </p>

      <h2>Course Projects Solutions</h2>
      <p>
        Complete course project sample solutions are provided as source files
        here in the <code>Course Projects</code> directory.
      </p>

      <h2>Cloning and Accessing the Repo Content</h2>
      <p>
        To clone the labs solutions on your machine and, for example, access
        Module 2:
      </p>
      <pre>
        <code>
          git clone git@bitbucket.org:nvidia-dli/deep-learning-for-science-
          and-engineering-teaching-kit-labs.git cd Module 2 - Neural
          Differential Equations
        </code>
      </pre>

      <h2>NVIDIA DLI Online Courses and Certificate Opportunities</h2>
      <p>
        The NVIDIA Deep Learning Institute (DLI) Teaching Kit includes access to
        free online DLI courses –
        <strong>a value of up to $90 per person per course</strong>
        .DLI training reinforces deep learning concepts presented in the
        Teaching Kits and teaches students how to apply those concepts to
        end-to-end projects. Through built-in assessments, students can earn
        certifications that prove subject matter competencyand can be leveraged
        for professional career growth. Each course presents a self-paced
        learning environment with access to a GPU-accelerated workstation in the
        cloud. All your students need is a web browser and Internet connection
        to get started.
        <strong>
          Although these courses are designed to be taken online, you are free
          to administer them to your students in a live setting as well.
        </strong>
      </p>

      <p>
        The primary recommended DLI course for students learning through the
        Deep Learning for Science and Engineering Teaching Kit is{" "}
        <a
          href="https://courses.nvidia.com/courses/course-v1:DLI+S-OV-04+V1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Introduction to Physics-Informed Machine Learning with Modulus
        </a>
        .
      </p>

      <p>
        The Teaching Kits{" "}
        <a
          href="https://developer.nvidia.com/teaching-kits/science-and-engineering-syllabus"
          target="_blank"
          rel="noopener noreferrer"
        >
          online syllabus
        </a>{" "}
        suggests where students can integrate this and other relevant online DLI
        courses in relation to the core Teaching Kit content.
      </p>

      <p>
        <em>
          To enable these or any other courses for your students, please send an
          email to <a href="mailto:NVDLI@nvidia.com">NVDLI@nvidia.com</a> with
          the subject line “S&E Teaching Kit DLI Online Course Access”. You will
          then receive information about how to give free access to your
          students.
        </em>
      </p>

      <p>
        Detailed descriptions of all available DLI courses can be found at{" "}
        <a
          href="https://www.nvidia.com/dli"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.nvidia.com/dli
        </a>
        .
      </p>

      <h2>About the NVIDIA Deep Learning Institute (DLI)</h2>
      <p>
        The NVIDIA Deep Learning Institute (DLI) offers hands-on training for
        developers, data scientists, and researchers looking to solve
        challenging problems with deep learning and accelerated computing.
        Through built-in assessments, students can earn certifications that
        prove subject matter competency and can be leveraged for professional
        career growth.
      </p>

      <h3>Become a DLI Certified Instructor</h3>
      <p>
        Join the University Ambassador Program to teach formal, instructor-led
        DLI courses at your university to students, faculty, and researchers at
        no cost. Educators can learn more and apply at{" "}
        <a
          href="https://www.nvidia.com/en-us/training/educator-programs/university-ambassador-program/"
          target="_blank"
          rel="noopener noreferrer"
        >
          University Ambassador Program
        </a>
        .
      </p>

      <h3>Attend Instructor-led Training</h3>
      <p>
        In addition to online, self-paced courses, DLI offers all fundamentals
        and industry-specific courses as in-person workshops led by
        DLI-certified instructors. View upcoming workshops near you at{" "}
        <a
          href="https://www.nvidia.com/dli"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.nvidia.com/dli
        </a>
        .
      </p>
    </>
  );
};
