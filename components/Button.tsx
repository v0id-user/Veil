interface ButtonProps {
  variant?: 'default' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  children,
  variant = 'default',
  onClick,
  disabled = false,
  className,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full border border-black border-solid px-4 py-2 transition-shadow duration-200';

  const variantStyles = {
    default: 'bg-[#DC0E11] text-black hover:bg-[#DC0E11]/80 hover:shadow-[0_3px_0px_#000]',
    secondary: 'bg-white text-black hover:bg-gray-200 hover:shadow-[0_3px_0px_#000]',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed hover:shadow-none' : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className || ''}`;

  return (
    <button className={combinedClassName.trim()} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
