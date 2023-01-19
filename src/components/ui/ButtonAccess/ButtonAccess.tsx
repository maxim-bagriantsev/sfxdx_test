import classNames from 'classnames/bind';
import styles from './ButtonAccess.module.scss';

const cx = classNames.bind(styles);

/*  TODO: replace unnecessary gradient, gradientLight and withoutBackground
    with proper props like color and display. Prop 'size' also must be refactored. 
*/
type ButtonProps = {
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: JSX.Element;
  prefixIcon?: JSX.Element;
  color?: 'primary';
  display?: 'fill' | 'empty' | 'service';
  gradient?: boolean;
  gradientLight?: boolean;
  size?: 's' | 'sm' | 'large';
  withoutBackground?: boolean;
  clicked?: () => void;
  width?: number;
  fullWidth?: boolean;
};

export const ButtonAccess = ({
  label,
  type,
  disabled,
  icon,
  color,
  display = 'fill',
  size = 'sm',
  withoutBackground,
  clicked,
  width,
  fullWidth,
  prefixIcon,
}: ButtonProps) => {
  return (
    <button
      type={type ?? 'button'}
      className={cx('button', {
        //  colors settings
        button_primary: color === 'primary',
        //  display settings
        button_inactive: disabled,
        button_withoutBackground: withoutBackground || display === 'empty',
        button_service: display === 'service',
        //  size settings
        button_s: size === 's',
        button_sm: size === 'sm',
        button_large: size === 'large',
        //  positioning settings
        button_fullWidth: !width && fullWidth,
      })}
      onClick={clicked}
      disabled={disabled}
      style={{ width }}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
        {label && <div className={styles.label}>{label}</div>}
      {prefixIcon && <div className={styles.prefixIcon}>{prefixIcon}</div>}
    </button>
  );
};
