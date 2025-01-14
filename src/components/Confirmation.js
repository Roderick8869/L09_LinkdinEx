import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const {state} = useLocation();
  return (
    <div className="container">
      <h1>Thank You! {state.name}</h1>
      <p>You're now registered for {state.course}</p>
      {state && (
      <p>We've sent more details to <strong>{state.email}</strong></p>
      )}
    </div>
  );
}
