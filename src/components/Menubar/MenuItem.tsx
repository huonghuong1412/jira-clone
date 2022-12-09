import classNames from 'classnames';
import { Link } from 'react-router-dom';

type MenuItemProps = {
    icon?: any;
    title?: string;
    link: string;
    isActive?: boolean;
    isAllow?: boolean;
}

const MenuItem = ({ icon, title, link = '', isActive, isAllow }: MenuItemProps) => {
    if (!isAllow) {
        return (
            <div className='relative flex items-center py-2 px-3 rounded-[3px] cursor-not-allowed select-none'>
                <span className="mr-[15px] text-[20px]">
                    {icon}
                </span>
                <div className="text-[15px]">{title}</div>
            </div>
        )
    }
    return (
        <Link className={classNames('relative flex items-center py-2 px-3 rounded-[3px] cursor-pointer select-none', isActive && 'font-medium text-[#0052cc] bg-[#ebecf0]')} to={link}>
            <span className="mr-[15px] text-[20px]">
                {icon}
            </span>
            <div className="text-[15px]">{title}</div>
        </Link>
    )
}

export default MenuItem