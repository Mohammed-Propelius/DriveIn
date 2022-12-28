export const transformPhoneNumber = (num) => {
    const phoneNumber = num?.replace("+1", "");
    return `(${phoneNumber?.slice(0, 3)}) ${phoneNumber?.slice(
      3,
      6
    )}-${phoneNumber?.slice(6, 10)}`;
  };