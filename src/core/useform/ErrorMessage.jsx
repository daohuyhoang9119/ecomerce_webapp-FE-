export const ErrorMessage = ({ error }) => {
  if (error) {
    return <p className="text-error">{error}</p>;
  }
  return null;
};
