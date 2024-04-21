export const CloseButton = ({ onClick, large }) => {
  const w = large ? 15 * 2 : 15;
  const h = large ? 15 * 2 : 15;
  return (
    <svg
      onClick={onClick}
      width={w}
      height={h}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 30L30 2"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M30 30L2 2"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};
