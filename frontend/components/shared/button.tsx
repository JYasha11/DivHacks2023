import { ButtonProps } from '@/utils/props';

const Button: React.FC<ButtonProps> = ({ type, handleClick, children }) => {
  return (
    <button
      type="submit"
      onClick={handleClick}
      className={`text-md px-4 py-2 font-bold rounded-full w-fit cursor-pointer hover:scale-110 ${
        type === 'primary'
          ? 'bg-primary-blue-200 text-white'
          : 'bg-primary-white border border-primary-blue-200 text-primary-black'
      }`}>
      {children}
    </button>
  );
};
export default Button;
