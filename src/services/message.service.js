export const getPublicResource = async () => {
  return {
    data: {
      text: "deep learning for science and engineering",
    },
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
