import { forwardRef } from 'react';
import { type ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = 'default', disabled = false, type = 'button', className, href, ...props },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-full border border-black border-solid px-4 py-2 transition-shadow duration-200';

    const variantStyles = {
      default: 'bg-[#DC0E11] text-black hover:bg-[#DC0E11]/80 hover:shadow-[0_3px_0px_#000]',
      secondary: 'bg-white text-black hover:bg-gray-200 hover:shadow-[0_3px_0px_#000]',
    };

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed hover:shadow-none' : '';

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className || ''}`;

    if (href) {
      return (
        <Link href={href} className={combinedClassName.trim()}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClassName.trim()}
        disabled={disabled}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
