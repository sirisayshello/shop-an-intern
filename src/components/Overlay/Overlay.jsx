export const Overlay = ({ closeMenus, fadeOut }) => {
  const fadeOutClass = fadeOut ? "animate-fade-out" : "";
  return (
    <div
      onClick={closeMenus}
      className={`w-screen h-screen fixed bg-black bg-opacity-60 z-20 animate-fade ${fadeOutClass}`}
    ></div>
  );
};
