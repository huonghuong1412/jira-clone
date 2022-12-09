import classNames from 'classnames';

type ButtonProps = {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  onClick?: any;
  icon?: any;
}

const Button = ({ className = '', title, icon, type = 'button', disabled = false, onClick }: ButtonProps) => {
  return (
    <button
      className={classNames(className, 'inline-flex items-center justify-center h-[32px] align-middle py-0 px-[12px] whitespace-nowrap rounded-[3px] transition-all appearance-none cursor-pointer text-[15px] text-white bg-[#0052cc]')}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && icon}
      <div className="pl-0">{title}</div>
    </button>
  )
}

export default Button