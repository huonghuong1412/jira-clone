import { BoardIcon } from '../Icon/Board';
import { ComponentIcon } from '../Icon/Component';
import { InsightIcon } from '../Icon/Insight';
import { PageIcon } from '../Icon/Page';
import { ProjectImageIcon } from '../Icon/Project';
import { IssueIcon } from '../Icon/Issue';
import { SettingIcon } from '../Icon/Setting';
import MenuItem from './MenuItem';
import { ReleaseIcon } from '../Icon/Releases';
import { useLocation } from 'react-router-dom';

type MenubarProps = {
  projectName: string
}

const Menubar = ({ projectName }: MenubarProps) => {
  const locations = useLocation();
  const pathname = locations.pathname;

  const isActive = (url: string) => {
    return pathname.includes(url);
  }

  return (
    <div className='fixed z-25 top-0 left-16 h-screen w-[230px] py-0 pl-4 pr-6 bg-[#F4F5F7] boder-r border-r-[#dfe1e6]' >
      <div className="flex py-6 px-1">
        <span>
          <ProjectImageIcon />
        </span>
        <div className='py-0 pl-[10px] pr-0'>
          <div className='text-[15px] font-medium text-[#42526e]'>{projectName}</div>
          <div className='text-[13px] font-normal text-[#5e6c84]'>Software project</div>
        </div>
      </div>
      <MenuItem icon={<BoardIcon />} title='Kanban Board' link='/project/board' isActive={isActive('/project/board')} isAllow />
      <MenuItem icon={<SettingIcon />} title='Project Settings' link='/project/settings' isActive={isActive('/project/settings')} isAllow />

      <div className='mt-[17px] pt-[18px] border-t border-t-[#c1c7d0]'></div>

      <MenuItem icon={<ReleaseIcon />} title='Releases' link='' isAllow={false} />
      <MenuItem icon={<IssueIcon />} title='Issues and filters' link='' isAllow={false} />
      <MenuItem icon={<PageIcon />} title='Pages' link='' isAllow={false} />
      <MenuItem icon={<InsightIcon />} title='Reports' link='' isAllow={false} />
      <MenuItem icon={<ComponentIcon />} title='Components' link='' isAllow={false} />
    </div>
  );
};

export default Menubar;
