import Avatar from "../../../components/Avatar/Avatar"
import Form from '../../../components/Form/Form';
import user from '../../../assets/data/user.json';
import Button from "../../../components/Button/Button";

const CommentForm = () => {
    return (
        <div className='mt-[25px] text-[15px] flex items-start w-[65%] pr-[20px] text-[#42526e] font-semibold'>
            <Avatar avatarUrl={user.avatarUrl} name={user.name} size={32} />
            <div className="pl-[16px] w-full">
                <div className='w-full px-3 mb-6'>
                    <Form onSubmit={undefined} className='mt-0'>
                        <Form.Textarea
                            value={''}
                            onChange={undefined}
                            placeholder='Add a comment'
                            name='content'
                            type='text'
                            className='resize-none bg-transparent overflow-y-hidden min-h-[44px]'
                        />
                    </Form>
                    <div className="w-full -mx-3">
                        <Button type='submit' title='Save' className="text-[13px]"/>
                        <Button type='button' title='Cancel' className="bg-transparent text-[#42526e] text-[13px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentForm