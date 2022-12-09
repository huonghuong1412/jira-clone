import { useState } from 'react';
import Setting from './Setting';
import { toast } from 'react-toastify';

export type ProjectInfo = {
    name: string,
    url: string,
    description: string,
    category: string,
}

type SettingContainerProps = {
    project: any;
}

const SettingContainer = ({ project }: SettingContainerProps) => {
    const [submitLoading, setSubmitLoading] = useState(false);
    const [projectInfo, setProjectInfo] = useState<ProjectInfo>({
        name: project.name,
        url: project.url,
        description: project.description,
        category: project.category,
    })

    const handleChange = (e: any) => {
        const value = e.target?.value;
        const name = e.target?.name;
        if (name && value) {
            setProjectInfo({
                ...projectInfo,
                [name]: value
            })
        } else {
            setProjectInfo({
                ...projectInfo,
                description: e,
            })
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data = { ...projectInfo };
        setSubmitLoading(true);
        toast.success('Changes have been saved successfully!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500,
            style: { fontSize: 12 }
        });
    }

    return <Setting
        submitLoading={submitLoading}
        onSubmit={handleSubmit}
        onChange={handleChange}
        projectInfo={projectInfo}
    />
}

export default SettingContainer