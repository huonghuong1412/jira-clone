import { Link } from 'react-router-dom';
import { LogoIcon } from '../Icon/Logo';

function Sidebar() {
    return (
        <aside className='fixed z-50 top-0 left-0 overflow-x-hidden h-screen w-[64px] bg-[#0747A6] transition-all hover:w-[200px] hover:shadow-sidebar'>
            <Link to='/' className='block relative left-0 mx-0 mt-[20px] mb-[10px] transition-all'>
                <span className='inline-block ml-2 p-[10px] cursor-pointer select-none'>
                    <LogoIcon />
                </span>
            </Link>
        </aside>
    );
}

export default Sidebar;
