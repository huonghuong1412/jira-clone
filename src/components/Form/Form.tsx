import React from 'react';
import classNames from "classnames";
import TextareaAutosize from 'react-textarea-autosize';
import TextEditor from '../TextEditor/TextEditor';

type InputProps = {
    name: string;
    type?: string;
    label?: string;
    placeholder?: string;
    className?: string;
    value: string;
    defaultValue?: string;
    onChange: any;
}

type SelectProps = {
    options: Option[];
    icon?: boolean;
} & InputProps;

type TextareaProps = {
    onKeyDown?: any;
} & InputProps;

type Option = {
    value: string;
    label: string;
}

type FormProps = {
    onSubmit: any,
    children?: JSX.Element | React.ReactNode,
    className?: string;
};

const Input = ({ name, type = 'text', label, className, value, defaultValue, onChange, placeholder }: InputProps) => {
    return (
        <>
            <label className="block tracking-wide text-[#5e6c84] text-[13px] text-xs font-bold mb-2">
                {label}
            </label>
            <div className='relative inline-block w-full'>
                <input
                    className={classNames(className, 'bg-[#f4f5f7] appearance-none border border-[#dfe1e6] rounded w-full py-[6px] px-[8px] text-[#172b4d] focus:outline-none focus:bg-white focus:border-[#4c9aff]')}
                    name={name} type={type} value={value} defaultValue={defaultValue} onChange={onChange} placeholder={placeholder}
                />
            </div>
        </>
    )
}

const Textarea = ({ name, label, className, value, defaultValue, onChange, placeholder }: TextareaProps) => {
    return (
        <>
            <label className="block tracking-wide text-[#5e6c84] text-[13px] text-xs font-bold mb-2">
                {label}
            </label>
            <div className='relative inline-block w-full'>
                <TextareaAutosize
                    className={classNames(className, 'bg-[#f4f5f7] appearance-none border border-[#dfe1e6] rounded w-full py-[6px] px-[8px] text-[#172b4d] focus:outline-none focus:bg-white focus:border-[#4c9aff]')}
                    name={name} value={value} defaultValue={defaultValue} onChange={onChange} placeholder={placeholder}
                />
            </div>
        </>
    )
}

const Select = ({ name, label, className, value, options, onChange, icon }: SelectProps) => {
    return (
        <>
            <label className="block tracking-wide text-[#5e6c84] text-[13px] text-xs font-bold mb-2">
                {label}
            </label>
            <div className="relative">
                <select
                    className={classNames(className, 'block appearance-none w-full bg-[#f4f5f7] border border-[#dfe1e6] text-[#172b4d] py-[6px] px-[8px] rounded focus:outline-none focus:bg-white focus:border-gray-500')} name={name} value={value} onChange={onChange}>
                    {
                        options.map((item: Option, index: number) => {
                            return (
                                <option value={item.value} key={index}>{item.label}</option>
                            )
                        })
                    }
                </select>
                {icon && <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#172b4d]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>}
            </div>
        </>
    )
}

const Editor = ({ label, className, value, defaultValue, onChange }: InputProps) => {
    return (
        <>
            <label className="block tracking-wide text-[#5e6c84] text-[13px] text-xs font-bold mb-2">
                {label}
            </label>
            <div className='relative inline-block w-full'>
                <TextEditor
                    className={classNames(className)}
                    placeholder={label || ''}
                    defaultValue={defaultValue || ''}
                    value={value}
                    onChange={onChange} />
            </div>
        </>
    )
}

const Form = ({ onSubmit, children, className }: FormProps) => {
    return (
        <form className={classNames(className, 'w-full -mx-3 mt-[20px]')} onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Object.assign(Form, {
    Input, Select, Editor, Textarea
});
