import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import Button from '../../components/Button/Button';
import BoardTitle from '../../components/Title/BoardTitle'
import { ProjectCategory, ProjectCategoryCopy } from '../../utils/project'
import { SpinnerIcon } from '../../components/Icon/Spinner';
import Form from '../../components/Form/Form';
import { ProjectInfo } from './SettingContainer';

type SettingProps = {
    submitLoading: boolean;
    onSubmit: any;
    onChange: any;
    projectInfo: ProjectInfo;
}

const options = Object.values(ProjectCategory).map((item) => {
    return {
        value: item,
        label: ProjectCategoryCopy[item]
    }
})

const Setting = ({ submitLoading, onSubmit, onChange, projectInfo }: SettingProps) => {
    return (
        <div className='flex justify-center'>
            <div className='max-w-[640px] w-full'>
                <Breadcrumbs items={['Projects', projectInfo.name, 'Project Details']} />
                <BoardTitle title='Project Details' />
                <Form onSubmit={onSubmit}>
                    <div className='w-full px-3 mb-6'>
                        <Form.Input
                            value={projectInfo.name}
                            onChange={onChange}
                            label='Name'
                            name='name'
                            type='text'
                        />
                    </div>
                    <div className='w-full px-3 mb-6'>
                        <Form.Input
                            value={projectInfo.url}
                            onChange={onChange}
                            label='URL'
                            name='url'
                            type='text'
                        />
                    </div>
                    <div className='w-full px-3 mb-6'>
                        <Form.Editor
                            value={projectInfo.description}
                            defaultValue={projectInfo.description}
                            onChange={onChange}
                            label='Description'
                            name='description'
                        />
                    </div>
                    <div className='w-full px-3 mb-6'>
                        <Form.Select
                            value={projectInfo.category}
                            onChange={onChange}
                            name='category'
                            icon={true}
                            label='Project Category'
                            options={options}
                        />
                    </div>
                    <div className="w-full px-3 mb-6">
                        {
                            !submitLoading ?
                                <Button type='submit' className='mt-[10px]' title='Save Changes' onClick={onSubmit} /> :
                                <Button title='Loading...' className='mt-[10px]' icon={<SpinnerIcon />} type="button" disabled />
                        }
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Setting