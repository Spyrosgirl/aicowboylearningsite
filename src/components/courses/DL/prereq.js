import React from "react";

export const Prereq = () => {
  return (
    <>
      <title>Deep Learning Teaching Kit Lab/solution Repository</title>

      <h1>Deep Learning Teaching Kit Lab/solution Repository</h1>
      <p>
        Welcome to the Deep Learning Teaching Kit Lab/solution repository.
        The kit and associated labs are produced jointly by NVIDIA and New
        York University (NYU). All material is available under the 
        <a href="http://creativecommons.org/licenses/by-nc/4.0/">
          Creative Commons Attribution-NonCommercial License
        </a>
        .
      </p>
      <p>
        The labs are designed to be open-ended, multidisciplinary, one-
        to three-week programming and written assignments for students.
        Each lab contains a description, sample code, sample solutions and
        suggestions on how instructors can evaluate and have students
        submit solutions.
      </p>
      <p>
          <em>
            Note that we are currently in the 2nd release of this Teaching Kit.
            If you have never pulled any labs from this repo and/or are new to the
            DLI Teaching Kit, please pull from the "Rel2" branch. The new 2nd release
            labs are 2B, 3, and 4B. Labs 2 and 4 have two different versions
            (“A” and “B”) because they contain some overlapping concepts but use
            different problem/data sets. Labs 2B and 4B utilize the PyTorch frameworks.
            Lab 3 covers Generative Adversarial Networks. Labs 2A and 4A are the same as
            1st release Labs 2 and 4. Please pull the 2nd release branch to a new location
            locally if you have pulled from the previous release.
          </em>
      </p>

      <h2>System Requirements</h2>

      <h4>NVIDIA CUDA/GPUs</h4>
      <p>
        Thanks to the rapid development of NVIDIA GPUs, training deep neural networks is
        more efficient than ever in terms of both time and resource cost. Training neural
        networks on 
        <a href="https://developer.nvidia.com/cuda-gpus">
          NVIDIA CUDA-enabled GPUs
        </a> 
        is a practical necessity for the Teaching Kit labs, including both convolutional
        networks (Lab1 and Lab2) and recurrent networks (Lab4).
      </p>
    
      <h4>Environment setup</h4>
      <p>
          <em>
            Note these steps have only been tested on GPU equipped nodes.
          </em>
      </p>
      <ol>
        <li>If using AWS or another cloud resource, create a computing instance.</li>
        <li>Launch a terminal</li>
        <li>Download and install CUDA Toolkit:
            <pre>
              wget http://us.download.nvidia.com/tesla/375.51/nvidia-driver-local-repoubuntu1604_375.51-1_amd64.deb
              sudo dpkg -i nvidia-driver-local-repo-ubuntu1604_375.51-1_amd64.deb
              sudo apt-get update
              sudo apt-get -y install cuda-drivers
            </pre>
        </li>
        <li>Reboot the node</li>
        <li>Install Anaconda, see: 
            <a href="https://docs.continuum.io/anaconda/install">
              https://docs.continuum.io/anaconda/install
            </a>
            <pre>
              wget https://repo.continuum.io/archive/Anaconda2-4.3.1-Linux-x86_64.sh
              bash ~/Downloads/Anaconda2-4.3.1-Linux-x86_64.sh
            </pre>
        </li>
        <li>Install PyTorch and/or Torch as per instructions/links below</li>
      </ol>

      <h4>PyTorch and Torch computing frameworks</h4>
      <p>
        The Deep Learning Teaching Kit labs and example solutions are based
        on the 
        <a href="http://pytorch.org/">PyTorch</a>
        and
        <a href="http://torch.ch">Torch</a>
        computing frameworks. Please refer to
        <a href="http://torch.ch/docs/getting-started.html">Getting started with Torch</a>
        for instruction on Torch installation, examples and documentation.
      </p>
      <p>
        For Windows users, please refer to 
        <a href="https://github.com/torch/torch7/wiki/Windows#using-a-virtual-machine">
          Running Torch on Windows
        </a>
        . At the time of writing this, PyTorch does not run on Windows, but there's
        an ongoing thread <a href="https://github.com/pytorch/pytorch/issues/494">here</a>
        .
      </p>

      <h4>cuDNN</h4>
      <p>
        The NVIDIA CUDA Deep Neural Network library (cuDNN) is a GPU-accelerated library
        of primitives for deep neural networks. cuDNN provides highly tuned implementations
        for standard routines such as forward and backward convolution, pooling, normalization,
        and activation layers.
      </p>
      <p>
        PyTorch integrates cuDNN automatically. To install cuDNN and use cuDNN with Torch, please
        follow the README on the 
        <a href="https://github.com/soumith/cudnn.torch">cuDNN Torch bindings</a>
        project.
      </p>

      <h2>About the Labs/solutions</h2>

      <h4>Recommended prerequisite Deep Learning Teaching Kit lectures for each lab</h4>
      <ul>
        <li>
          Lab1: Module 1 - Introduction to Machine Learning through Module 2 -
          Introduction to Deep Learning
        </li>
        <li>Lab2: Module 1 through Module 3 - Convolutional Neural Networks</li>
        <li>Lab3: Module 1 through Module 5 - Optimization Techniques</li>
        <li>Lab4: Module 1 through Module 6 - Learning with Memory</li>
      </ul>

      <h4>Lab documents</h4>
      <p>
        <code>documents</code> in each lab directory contains the same lab description
        and sample solution write-up <code>.pdf</code> documents as in the Deep Learning
        Teaching Kit <code>.zip</code> package.
      </p>

      <h4>Baseline sample code</h4>
      <p>
        <code>sample_code</code> in each lab directory contains the baseline training model
        solution (as well as instructions to run) described in the lab descriptions. These
        baseline models render a baseline score for the given data set that students are suggested
        to outperform. The <code>sample_code</code> is designed to be given to students
        when the lab is assigned.
      </p>

      <h4>Lab solutions</h4>
      <p>
        <code>solution_code</code> in each lab directory contains an example implementation
        of approaches that improve the model performance. These solutions were developed by
        real students who took the Deep Learning curriculum course at NYU. Some solutions may
        require additional, undocumented instructions to properly execute.
      </p>
      <p>
        Unlike the <code>sample_code</code>, some solution samples are not designed to run
        "out-of-box", but should still provide useful examples of solutions using a variety
        of techniques for both instructors and students to learn from. However, the software
        structure remains the same as <code>sample_code</code> and uses the same execution
        script in the <code>sample_code</code> <code>Readme</code>s to run.
      </p>
      <p>
        Note that for each lab, the sample solution code corresponds to only the 1st
        "lab<n>_<labName>_solution1.pdf" solution write-up. These solution write-ups are
        found in both the Teaching Kit <code>.zip</code> package and the <code>documents</code>
        folder in each lab directory in this repository.
      </p>

      <h4>Cloning and accessing the labs/solutions</h4>
      <p>To clone the Labs/solutions on your machine and, for example, access Lab1:</p>
      <pre>
      git clone git@bitbucket.org:junbo_jake_zhao/deeplearningkit.git
      cd Lab1
      </pre>

      <h4>In-class competition</h4>
      <p>
        Some programming labs include optimizing a neural network training model and
        suggest students submit solutions to Kaggle using
        <a href="https://www.kaggle.com/c/about/inclass">Kaggle InClass</a>
        to compare inference accuracy against each other and against the baseline model
        score from the <code>sample_code</code>. Such a competition can encourage students
        to study the latest public research papers and technical reports to improve their model
        accuracy on an open-ended problem. Grading model accuracy could simply be based on whether
        they outperform the baseline, or perhaps based on class rank.
      </p>
      <p>
        Please read the Kaggle InClass 
        <a href="https://www.kaggle.com/c/about/inclass/faqs">FAQ</a>
        for more information on how to set up your course using Kaggle.
        Using Kaggle is <strong>not</strong> a requirement to make use of the labs.
        For example, here is one way to evaluate lab solutions without Kaggle:
      </p>
      <ul>
        <li>
          Instructor creates (but does not release) a testing data set with the
          corresponding groundtruth prediction label file
        </li>
        <li>
          Students/teams develop models and compare model inference accuracy on
          a validation subset from a given training set (i.e. MNIST)
        </li>
        <li>
          Students/teams create a <code>result.lua</code> file that takes in
          their model file and the data set, and returns a model prediction
          in <code>.csv</code> format (see details in lab documents)
        </li>
        <li>
          Students/teams submit both their most accurate model
          and <code>result.lua</code> scripts
        </li>
        <li>
          Instructor executes the <code>result.lua</code> for each
          student/team's submitted model on the unreleased testing data set
        </li>
        <li>
          Compare the model prediction and groundtruth label on the testing
          set, and obtain the accuracy
        </li>
        <li>
          Use the testing accuracy to evaluate/compare students'/teams'
          model performance
        </li>
      </ul>

      <h2>NVIDIA DLI Online Courses and Certification</h2>
      <p>
        The Deep Learning Teaching Kit includes links to free online Deep Learning
        Institute (DLI) courses– 
        <strong>
          a value of up to $90 per person per course
        </strong>. DLI training reinforces deep learning concepts presented in the 
        Teaching Kits and teaches students how to apply those concepts to end-to-end
        projects. Through built-in assessments, students can earn certifications that
        prove subject matter competency and can be leveraged for professional career
        growth. Each course presents a self-paced learning environment with access to
        a GPU-accelerated workstation in the cloud. All your students need is a web browser
        and Internet connection to get started. 
        <strong>
          Although these courses are designed to be taken online, you are free to administer
          them to your students in a live setting as well.
        </strong>
      </p>
    
      <p>
        The recommended DLI course (with certification) for students learning through the Deep
        Learning Teaching Kit is 
        <strong>
          <a href="https://courses.nvidia.com/courses/course-v1:DLI+C-FX-01+V2/about">
            Getting Started with Deep Learning
          </a>
        </strong>
        .
      </p>

      <p>
        <code>Syllabus.pdf</code> suggests students take this full-day course upon near-completion
        of your university semester course. It also suggests shorter courses that can be used as
        labs throughout your university course.
      </p>

      <p>
        <em>
          To enable these or any other courses for your students, please send an email to 
          <a href="mailto:NVDLI@nvidia.com">NVDLI@nvidia.com</a> with subject line “DLI 
          Teaching Kit Online Course Access”. You will then receive information about how
          to give free access to your students.
        </em>
      </p>

      <p>
        Detailed descriptions of all available DLI courses can be found at 
        <a href="https://www.nvidia.com/dli">www.nvidia.com/dli</a>.
      </p>

      <h2>About the NVIDIA Deep Learning Institute (DLI)</h2>
      <p>
        The NVIDIA Deep Learning Institute (DLI) offers hands-on training for developers,
        data scientists, and researchers looking to solve challenging problems with deep learning
        and accelerated computing. Through built-in assessments, students can earn certifications
        that prove subject matter competency and can be leveraged for professional career growth.
      </p>

      <h4>Become a DLI Certified Instructor</h4>
      <p>
        Join the University Ambassador Program to teach DLI courses at your university to students,
        faculty, and researchers at no cost. Educators can learn more and apply
        <a href="https://www.nvidia.com/en-us/training/educator-programs/university-ambassador-program/">
          here
        </a>
        .
      </p>

      <h4>Attend Instructor-led Training</h4>
      <p>
        In addition to online, self-paced courses, DLI offers all fundamentals and industry-specific courses
        as in-person workshops led by DLI-certified instructors. View upcoming workshops near you at
        <a href="https://www.nvidia.com/dli">www.nvidia.com/dli</a>.
      </p>
    </>
  );
};
