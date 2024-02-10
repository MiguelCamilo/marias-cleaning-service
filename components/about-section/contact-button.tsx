'use client';

import Link from 'next/link';
import { IconType } from 'react-icons';

import { Button } from '@/components/ui/button';

interface ContactUsButtonProps {
  icon?: IconType;
  onClick?: () => void;
  iconClassName?: string;
  className: string;
  label: string;
  disabled?: boolean;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined;
}

export const ContactUsButton = ({
  onClick,
  className,
  label,
  disabled,
  variant,
  icon: ContactUsButtonIcon,
  iconClassName,
}: ContactUsButtonProps) => {
  return (
    <div className="w-full">
      <Button
        variant={variant || 'link'}
        className={className}
        size={'sm'}
        asChild
        disabled={disabled}
        onClick={onClick}
      >
        <div className="flex">
          {label}
          {ContactUsButtonIcon && (
            <ContactUsButtonIcon className={iconClassName} />
          )}
        </div>
      </Button>
    </div>
  );
};
