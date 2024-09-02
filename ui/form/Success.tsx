import react from "react";

export const Success: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-dvh">
      <h2 className="font-gunterz">Form Submitted Successfully!</h2>
      <p>
        We will reach out to you shortly. You may now exit the form if you'd
        like.
      </p>
    </div>
  );
};
