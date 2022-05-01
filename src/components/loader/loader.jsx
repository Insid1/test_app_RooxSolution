import './loader.css';

function Loader() {
  return (
    <div className="loader">
      <span>Loading...</span>
      <div className="lds-dual-ring" />
    </div>
  );
}

export default Loader;
