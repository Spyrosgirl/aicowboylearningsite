export const Courses = () => {
  return (
    [
      {
        courseID: 1,
        title: "deep learning for science and engineering",
        link: "../components/courses/DLSE/prereq",
        desc: "This is a long description to test how the CSS reacts. This is temporary and should be removed at a later date. Do not leave this there. This is not a real description.",
        price: "$2.00",
        owned: true,
      },
      {
        courseID: 2,
        title: "nvidia dli data science",
        link: "https://drive.google.com/drive/folders/1bIQISTier9NlpXNSHlgm10TxCs8msA9n?usp=drive_link",
        desc: "Course Two Desc",
        price: "$5.00",
        owned: false,
      },
      {
        courseID: 3,
        title: "nvidia dli deep",
        link: "https://drive.google.com/drive/folders/1dgGK5ABHKBH9foCXDjnHW5dnICmCmYsM?usp=drive_link",
        desc: "Course Three Desc",
        price: "$3.00",
        owned: false,
      },
      {
        courseID: 4,
        title: "nvidia dli deep 2",
        link: "https://drive.google.com/drive/folders/1dgGK5ABHKBH9foCXDjnHW5dnICmCmYsM?usp=drive_link",
        desc: "This is another long description just in case. I like testing things. I like to be thorough.",
        price: "$4.00",
        owned: true,
      },
      {
        courseID: 5,
        title: "nvidia dli deep 3",
        link: "https://drive.google.com/drive/folders/1dgGK5ABHKBH9foCXDjnHW5dnICmCmYsM?usp=drive_link",
        desc: "This is another description",
        price: "$4.00",
        owned: false,
      },
    ],
  );
};
