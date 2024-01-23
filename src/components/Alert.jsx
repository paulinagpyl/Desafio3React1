const Alert = ({color, error}) => {
  return (
    <>
      <div className={`alert alert-${color}`}> {error}</div>
    </>
  );
};

export default Alert;