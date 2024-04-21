export const Bag = ({ visibility, large }) => {
  const w = large ? 15 * 1.5 : 15;
  const h = large ? 20 * 1.5 : 20;
  return (
    <svg
      className={visibility}
      width={w}
      height={h}
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.916 5.88232C10.9709 5.60075 11 5.30582 11 5C11 2.68915 9.3365 1 7.5 1C5.6635 1 4 2.68915 4 5C4 5.30582 4.02913 5.60075 4.08395 5.88232H3.06984C3.02395 5.59591 3 5.30106 3 5C3 2.23858 5.01472 0 7.5 0C9.98528 0 12 2.23858 12 5C12 5.30106 11.9761 5.59591 11.9302 5.88232H10.916ZM7.51539 9.99997H7.48461C7.48974 9.99999 7.49487 10 7.5 10C7.50513 10 7.51026 9.99999 7.51539 9.99997Z"
        fill="black"
      />
      <rect x="0.5" y="5.5" width="14" height="14" stroke="black" />
      <line x1="11.5" y1="5" x2="11.5" y2="9" stroke="black" />
      <line x1="3.5" y1="5" x2="3.5" y2="9" stroke="black" />
    </svg>
  );
};
