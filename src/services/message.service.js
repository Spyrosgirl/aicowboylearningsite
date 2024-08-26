export const getPublicResource = async () => {
  return {
      text: "This is going to be a course.",
  };
};

export const getProtectedResource = async () => {
  return {
    data: {
      text: "This is a protected message.",
    },
  };
};

export const getAdminResource = async () => {
  return {
    data: {
      text: "This is an admin message.",
    },
  };
};
