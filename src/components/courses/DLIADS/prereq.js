import React from "react";

export const Prereq = () => {
  return (
    <>
      <title>DLI Accelerated Data Science Teaching Kit Lab Solutions Repository</title>

      <h1>DLI Accelerated Data Science Teaching Kit Lab Solutions Repository</h1>
      <p>
        Welcome to the DLI Accelerated Data Science Teaching Kit
        lab solutions repository. The kit and associated labs/solutions
        are developed jointly by NVIDIA, Georgia Institute of Technology,
        and Prairie View A&M University. All material is available under the
        <a href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>
        .
      </p>
      
      <h2>System Requirements and Environment Setup</h2>
      
      <h4>NVIDIA CUDA/GPUs and RAPIDS</h4>
      
      <p>
          Thanks to the development of NVIDIA GPUs and the 
          <a href="https://rapids.ai/">RAPIDS</a>
          framework, accelerated data science is more efficient 
          than ever in terms of both time and resource cost.
          <a href="https://developer.nvidia.com/cuda-gpus">NVIDIA CUDA-enabled GPUs</a>
          and RAPIDS are the most one needs to develop and run all the Teaching Kit labs.
      </p>
            
      <p>
          All the information and requirements about what you need to get started with
          RAPIDS and GPUs can be found on the 
          <a href="https://rapids.ai/start.html">Getting Started with RAPIDS</a> 
          webpage.
      </p>
            
      <p>
          Instructions on setting up your AWS or other cloud environment are linked below.
      </p>
            
      <h4>AWS and Other Cloud Environment Setup</h4>
            
      <ul>
        <li><a href="https://rapids.ai/cloud.html#aws">Amazon Web Services (AWS)</a></li>
        <li><a href="https://rapids.ai/cloud.html#azure">Microsoft Azure</a></li>
        <li><a href="https://rapids.ai/cloud.html#googlecloud">Google Cloud</a></li>
      </ul>
            
      <h4>Using Personal Computer or a GPU Server</h4>
            
      <ol>
        <li>
            <strong>Prerequisites.</strong>
            As RAPIDS is GPU-accelerated, your computer or server must have a compatible
            NVIDIA GPU and software (<a href="https://rapids.ai/start.html">see detail</a>).
        </li>
        <li>
            <strong>Install Docker</strong>
            on your computer or server. Linux: 
            <a href="https://docs.docker.com/engine/install/ubuntu/">Ubuntu</a>
            , 
            <a href="https://docs.docker.com/engine/install/centos/">CentOs</a>
            ,
            <a href="https://docs.docker.com/engine/install/fedora/">Fedora</a>
            ;
            <a href="https://docs.docker.com/docker-for-mac/install/">Mac</a>
            ;
            <a href="https://docs.docker.com/docker-for-windows/install/">Windows</a>
            . We recommend Linux. Skip this step if Docker has been installed.
        </li>
        <li>
            <strong>Pull RAPIDS AI Docker image</strong>
            using the following command (takes time to run). The Docker image needs
            to be compatible with your computer or server’s CUDA version 
            (<a href="https://hub.docker.com/r/rapidsai/rapidsai/">see detail</a>).
        </li>
        <pre>
            <code>docker pull rapidsai/rapidsai:cuda11.0-runtime-ubuntu18.04</code>
        </pre>
        <li>
            <strong>Run Docker container.</strong>
            Pick three <strong>available</strong> ports (e.g., 8000, 8001, 8002) and an 
            <strong>absolute</strong> directory (e.g., <code>/folder</code>) of your choosing. 
            Then run the following command.
        </li>
        <pre>
            <code>
              docker run --gpus all --rm -it -p 8000:8888 -p 8001:8787 -p 8002:8786 -v
              /folder:/app rapidsai/rapidsai:cuda11.0-runtime-ubuntu18.04
            </code>
        </pre>
        <p>
            The above command launches a JupyterLab server, exposed via port 8000 
            (visit <a href="http://localhost:8000">http://localhost:8000</a> to access).
            Port 8001 exposes a Dask scheduler; and port 8002 exposes a Dask diagnostic
            web server. Your command will not run if any of the ports are being used.
        </p>
        <li>
            <strong>Connect your computer to the GPU server.</strong> 
            If RAPIDS AI Docker is running on a remote server, run the following command,
            which forwards port 7777 on your local computer to port 8000 of the JupyterLab 
            server on the remote server.
        </li>
        <pre>
            <code>ssh -N -f -L localhost:7777:localhost:8000 &lt;your_username@gpu_server&gt;</code>
        </pre>
        <p>
            Now visit <a href="http://localhost:7777">http://localhost:7777</a> in a browser,
            and you are connected to remote JupyterLab server.
        </p>
      </ol>

      <h2>Lab Instructional Documents</h2>
      <p>
          The <code>instructions</code> folder found in each module's lab folder in the 
          Teaching Kit <code>.zip</code> file contains the lab instructional documents for
          students in either <code>.pdf</code> format, or <code>.ipynb</code> (Jupyter notebook)
          for more exploratory labs. Each of these documents usually begins with a description of
          the lab, objectives, prerequisites and detailed instructions. Some instruction documents
          also contain example point allocation for each section of the lab to provide an example grading 
          rubric and an idea of how much relative time students can be expected to spend on each section.
      </p>

      <h2>Lab Solutions</h2>
      <p>
          The <code>solutions</code> folder found in each module's lab folder here in the repository
          contains at least one example implementation of approaches to solving the lab provided as
          <code>.html</code>, <code>.py</code> (Python) and <code>.ipynb</code> (Jupyter notebook) files.
          Some associated data sets are also found in the <code>solutions</code> folder.
      </p>

      <h2>Cloning and Accessing the Lab Solutions</h2>
      <p>
          To clone the lab solutions on your machine and, for example, access Module 2 solutions:
      </p>
      <pre>
        <code>
          git clone git@bitbucket.org:nvidia-dli/data-science-teaching-kit-labs.git
          cd Module 2 - Data Collection
        </code>
      </pre>

      <h2>Jupyter Notebooks</h2>
      <p>
          Jupyter Notebooks are open-source web applications that allow creation
          and sharing of documents that contain live code, equations, visualizations
          and explanatory text. They provide a unique way for students to interact with
          developing their lab solutions for the Accelerated Data Science Teaching Kit.
          More information, links to communities and documentation about Jupyter notebooks
          can be found at <a href="https://jupyter.org/">jupyter.org</a>.
      </p>

      <h2>NVIDIA DLI Online Courses and Certificate Opportunities</h2>
      
      <p>
          The NVIDIA Deep Learning Institute (DLI) Teaching Kit includes links to free online
          DLI courses – <strong>a value of up to $90 per person per course</strong>.
          DLI training reinforces deep learning concepts presented in the Teaching Kits
          and teaches students how to apply those concepts to end-to-end projects.
          Through built-in assessments, students can earn certifications that prove
          subject matter competency and can be leveraged for professional career growth.
          Each course presents a self-paced learning environment with access to a GPU-accelerated
          workstation in the cloud. All your students need is a web browser and Internet connection
          to get started. <strong>Although these courses are designed to be taken online, you are free
          to administer them to your students in a live setting as well.</strong>
      </p>
      <p>
          The recommended DLI course (with certification) for students learning through the Accelerated
          Data Science Teaching Kit is
          <a href="https://courses.nvidia.com/courses/course-v1:DLI+S-DS-01+V1/about">
            Accelerating End-to-End Data Science Workflows
          </a>
          .
      </p>
      <p>
          The Teaching Kit's 
          <a href="https://developer.nvidia.com/data-science-teaching-kit-syllabus">online syllabus</a>
          suggests students take sections of this course during specific modules or upon near-completion
          of your university semester course. It also suggests where other online DLI courses can be used
          as labs throughout your university course.
      </p>
      <p>
          <em>
            To enable these or any other courses for your students, please send an email to NVDLI@nvidia.com
            with subject line “Data Science Teaching Kit Online Course Access”. You will then receive information
            about how to give free access to your students.
          </em>
      </p>
      <p>
          Detailed descriptions of all available DLI courses can be found at 
          <a href="https://www.nvidia.com/dli">www.nvidia.com/dli</a>
          .
      </p>

      <h2>About the NVIDIA Deep Learning Institute (DLI)</h2>
      
      <p>
          The NVIDIA Deep Learning Institute (DLI) offers hands-on training for developers, data scientists,
          and researchers looking to solve challenging problems with deep learning and accelerated computing.
          Through built-in assessments, students can earn certifications that prove subject matter competency
          and can be leveraged for professional career growth.
      </p>

      <h4>Become a DLI Certified Instructor</h4>
      <p>
          Join the University Ambassador Program to teach DLI courses at your university to students, faculty,
          and researchers at no cost. Educators can learn more and apply 
          <a href="https://www.nvidia.com/en-us/training/educator-programs/university-ambassador-program/">here</a>
          .
      </p>

      <h4>Attend Instructor-led Training</h4>
      <p>
          In addition to online, self-paced courses, DLI offers all fundamentals and industry-specific courses
          as in-person workshops led by DLI-certified instructors. View upcoming workshops near you at
          <a href="https://www.nvidia.com/dli">www.nvidia.com/dli</a>
          .
      </p>

    </>
  );
};
