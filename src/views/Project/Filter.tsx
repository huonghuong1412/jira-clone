import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button';
import { SearchIcon } from '../../components/Icon/Search'
import Input from '../../components/Input/Input'

export type User = {
    id: string;
    createdAt?: string,
    updatedAt: string,
    name: string,
    email: string,
    avatarUrl: string,
    projectId?: number
}

type FilterProps = {
    users: User[];
}

const Filter = ({ users }: FilterProps) => {
    return (
        <div className='flex items-center mt-[24px]'>
            <Input className='mr-[18px] w-[160px] h-[32px]' value={''} icon={<SearchIcon />} onChange={undefined} />
            <div className='flex flex-row-reverse my-0 mr-1 ml-3'>
                {
                    users.map((user: User) => (
                        <div key={user.id} className='inline-flex ml-[-2px] rounded-full transition-all cursor-pointer'>
                            <Avatar avatarUrl={user.avatarUrl} name={user.name} size={32} />
                        </div>
                    ))
                }
            </div>
            <div className='flex mr-1 ml-3'>
                <Button title='Only My Issues' className='h-[32px] whitespace-nowrap rounded-[3px] text-[15px] bg-white text-[#42526e] font-semibold' />
                <Button title='Recently Updated' className='h-[32px] whitespace-nowrap rounded-[3px] text-[15px] bg-white text-[#42526e] font-semibold' />
                <Button title='Clear all' className='h-[32px] leading-[32px] ml-[15px] pl-[12px] border-l bg-white border-l-[#dfe1e6] text-[15px] font-semibold text-[#42526e]'/>
            </div>
        </div>
    )
}

export default Filter