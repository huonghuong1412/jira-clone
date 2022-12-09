import { useState } from 'react';
import { useParams } from "react-router-dom";
import { User } from '../Project/Filter';
import Issue from './Issue';

type IssueProps = {
    getIssueById: any;
    projectName: string;
    users?: User[];
}

const IssueContainer = ({ getIssueById, projectName, users }: IssueProps) => {

    const params = useParams();
    const [issue, setIssue] = useState(getIssueById(params.id))

    const handleChange = (e: any) => {
        const value = e.target?.value;
        const name = e.target?.name;
        if (name && value) {
            setIssue({
                ...issue,
                [name]: value
            })
        } else {
            setIssue({
                ...issue,
                description: e,
            })
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data = { ...issue };
    }

    return (
        <Issue
            submitLoading={false}
            onSubmit={handleSubmit}
            onChange={handleChange}
            issue={issue}
            users={users}
            projectName={projectName}
        />
    )
}

export default IssueContainer