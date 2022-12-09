import { useMemo } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import Button from '../../components/Button/Button';
import { SpinnerIcon } from '../../components/Icon/Spinner';
import Form from '../../components/Form/Form';
import { IssuePriority, IssuePriorityCopy, IssueStatus, IssueStatusCopy } from '../../utils/issues';
import { User } from '../Project/Filter';
import moment from 'moment';
import TimeIssue from './TimeIssue';
import Comment from './Comment/Comment';

type IssueProps = {
    submitLoading: boolean;
    onSubmit: any;
    onChange: any;
    issue: any;
    projectName: string;
    users?: User[];
}

const Issue = ({ submitLoading, onSubmit, onChange, projectName, issue, users = [] }: IssueProps) => {

    const statusOptions = useMemo(() => Object.values(IssueStatus).map((item) => {
        return {
            value: item,
            label: IssueStatusCopy[item]
        }
    }), [])

    const userOptions = useMemo(() => users.map((item) => {
        return {
            value: item.id,
            label: item.name
        }
    }), [])

    const priorityOptions = useMemo(() => Object.values(IssuePriority).map((item) => {
        return {
            value: item,
            label: IssuePriorityCopy[item]
        }
    }), [])

    return (
        <div className='flex justify-center'>
            <div className='w-full'>
                <Breadcrumbs items={['Projects', projectName, 'Issues', issue.id]} />
                <div className='w-full'>
                    <Form onSubmit={onSubmit} className='flex py-0 w-full'>
                        <div className='w-[65%] pr-[50px]'>
                            <div className='w-full px-0 mb-6'>
                                <Form.Textarea
                                    value={issue.title}
                                    onChange={onChange}
                                    name='title'
                                    // className='resize-none bg-transparent overflow-y-hidden font-bold text-[18px] border-0 focus:border'
                                    className='resize-none bg-transparent overflow-y-hidden font-bold text-[18px]'
                                />
                            </div>
                            <div className='w-full px-0 mb-6'>
                                <Form.Editor
                                    value={issue.description}
                                    defaultValue={issue.description}
                                    onChange={onChange}
                                    label='Description'
                                    name='description'
                                />
                            </div>
                        </div>
                        <div className='w-[35%] pt-[5px]'>
                            <div className='w-full mb-6'>
                                <Form.Select
                                    value={issue.status}
                                    onChange={onChange}
                                    name='status'
                                    label='STATUS'
                                    options={statusOptions}
                                />
                            </div>
                            <div className='w-full mb-6'>
                                <Form.Select
                                    value={issue.reporterId}
                                    onChange={onChange}
                                    name='reporterId'
                                    label='REPORTER'
                                    icon={false}
                                    options={userOptions}
                                />
                            </div>
                            <div className='w-full mb-6'>
                                <Form.Select
                                    value={issue.reporterId}
                                    onChange={onChange}
                                    name='reporterId'
                                    label='ASSIGNEES'
                                    icon={false}
                                    options={userOptions}
                                />
                            </div>
                            <div className='w-full mb-6'>
                                <Form.Select
                                    value={issue.priority}
                                    onChange={onChange}
                                    name='priority'
                                    label='PRIORITY'
                                    icon={false}
                                    options={priorityOptions}
                                />
                            </div>
                            <div className='w-full mb-6'>
                                <Form.Input
                                    value={issue.estimate}
                                    onChange={onChange}
                                    label='ORIGINAL ESTIMATE (HOURS)'
                                    name='estimate'
                                    type='number'
                                />
                            </div>
                            <div className='w-full mb-6'>
                                <TimeIssue createdAt={issue.createdAt} updatedAt={issue.updatedAt} />
                            </div>
                        </div>
                    </Form>
                    <div className="w-full -mx-3">
                        {
                            !submitLoading ?
                                <Button type='submit' title='Save Changes' onClick={onSubmit} /> :
                                <Button title='Loading...' icon={<SpinnerIcon />} type="button" disabled />
                        }
                    </div>
                    <div className="w-full -mx-3">
                        <Comment comments={issue.comments} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Issue;