import { FaRegCheckCircle } from "react-icons/fa";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center text-sm text-emerald-500">
      <FaRegCheckCircle className="h-8 w-8" />
      <p className='text-center'>{message}</p>
    </div>
  );
};
