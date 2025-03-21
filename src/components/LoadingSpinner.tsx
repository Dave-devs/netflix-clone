import { FC } from "react";

const LoadingSpinner: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;