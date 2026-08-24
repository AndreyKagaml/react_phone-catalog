import { cn } from '@/shared/utils';

import { Button } from './Button';
import styles from './CircleButton.module.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CircleButton = ({
  children,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <Button className={cn(styles.button, className)} {...props}>
      {children}
    </Button>
  );
};
