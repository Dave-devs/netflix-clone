import { FC } from "react";

interface ErrorProps {
    message?: string;
    onRetry?: () => void;
}

const ErrorComponent: FC<ErrorProps> = ({ message = "Failed to fetch movies.", onRetry }) => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-black text-white text-center">
            <p className="text-lg font-semibold mb-4">{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                >
                    Retry
                </button>
            )}
        </div>
    );
};

export default ErrorComponent;