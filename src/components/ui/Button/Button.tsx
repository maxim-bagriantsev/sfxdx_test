import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

/*  TODO: replace unnecessary gradient, gradientLight and withoutBackground
    with proper props like color and display. Prop 'size' also must be refactored. 
*/
type ButtonProps = {
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: JSX.Element;
  prefixIcon?: boolean;
  color?: 'primary' | 'danger' | 'gradient' | 'gradientDanger' | 'black';
  display?: 'fill' | 'empty' | 'service';
  gradient?: boolean;
  gradientLight?: boolean;
  size?: 's' | 'sm' | 'medium' | 'large';
  withoutBackground?: boolean;
  clicked?: () => void;
  width?: number;
  fullWidth?: boolean;
};

export const Button = ({
  label,
  type,
  disabled,
  icon,
  color,
  display = 'fill',
  gradient,
  gradientLight,
  size = 'medium',
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
        button_danger: color === 'danger',
        button_black: color === 'black',
        button_primary: color === 'primary',
        button_gradient: gradient || color === 'gradient',
        button_gradientDanger: color === 'gradientDanger',
        button_gradientLight: gradientLight,
        //  display settings
        button_inactive: disabled,
        button_withoutBackground: withoutBackground || display === 'empty',
        button_service: display === 'service',
        //  size settings
        button_s: size === 's',
        button_sm: size === 'sm',
        button_medium: size === 'medium',
        button_large: size === 'large',
        //  positioning settings
        button_fullWidth: !width && fullWidth,
      })}
      onClick={clicked}
      disabled={disabled}
      style={{ width }}
    >
      {icon && !prefixIcon && <div className={styles.icon}>{icon}</div>}
      {label && label}
      {icon && prefixIcon && <div className={styles.prefixIcon}>{icon}</div>}
    </button>
  );
};
