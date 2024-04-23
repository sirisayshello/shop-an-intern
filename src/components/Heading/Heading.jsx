export const Heading = ({ size, children }) => {
  if (size === "h2") {
    return <h2>{children}</h2>;
  }
  if (size === "h3") {
    return <h3 className="font-medium">{children}</h3>;
  }
  if (size === "h4") {
    return <h4 className="text-sm font-medium">{children}</h4>;
  }
  if (size === "h5") {
    return <h5 className="text-sm">{children}</h5>;
  }
  if (size === "h6") {
    return <h6>{children}</h6>;
  }
  return <h1 className="text-3xl font-semibold">{children}</h1>;
};
