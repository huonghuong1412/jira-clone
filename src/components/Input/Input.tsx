import { forwardRef } from 'react';
import classNames from 'classnames';

type InputProps = {
    className?: string,
    value: string | number,
    icon?: any,
    invalid?: boolean,
    filter?: any,
    onChange: any,
}

const Icon = (icon: any) => {
    return (
        <span className='absolute top-[8px] left-[8px] text-[#5e6c84]'>
            {icon.icon}
        </span>
    )
}

const Input = forwardRef(({ icon, className, filter, onChange }: InputProps, ref: any) => {
    const handleChange = (event: any) => {
        if (!filter || filter.test(event.target.value)) {
            onChange(event.target.value, event);
        }
    };
    return (
        <div className={classNames(className, 'relative inline-block')}>
            {icon && <Icon icon={icon} />}
            <input onChange={handleChange} ref={ref} className='h-full w-full py-0 pl-[32px] border-0 pr-[8px] text-[#172b4d] bg-[#f4f5f7] text-[15px] transition-all focus:bg-[#fff] focus:border focus:border-[#4c9aff] focus:shadow-input' />
        </div>
    )
});

export default Input