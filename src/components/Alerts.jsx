function Alert() {



  return (
    <>
      <div className="alert alert-danger d-flex align-items-center" role="alert">
        <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Danger:">
          <use href="#exclamation-triangle-fill" />
        </svg>
        <div>An example danger alert with an icon</div>{" "}
      </div>
    </>
  );
}

export default Alert;
