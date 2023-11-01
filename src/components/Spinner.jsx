import "../styles/Spinner.css";

const Spinner = () => {
  return (
    <div className="mt-5 p-5">
      <div className="sk-chase mx-auto">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  );
};

export default Spinner;
