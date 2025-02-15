import { InputHTMLAttributes } from 'react';
import CheckFatFill from '@/public/check_fat_fill.svg';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  children?: React.ReactNode;
}

export default function Checkbox({ name, className, children, ...props }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative inline-flex">
        <input
          type="checkbox"
          name={name}
          className={`peer appearance-none w-4 h-4 border border-black rounded checked:bg-[#DC0E11] focus:ring-0 transition-colors ${className}`}
          {...props}
        />
        <CheckFatFill className="absolute w-3 h-3 text-black left-[2px] top-[2px] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
      </div>
      {children && <label className="text-black cursor-pointer">{children}</label>}
    </div>
  );
}
