import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import BoardTitle from '../../components/Title/BoardTitle'
import Board from './Board'
import Filter from './Filter'

type ProjectProps = {
    project: any;
}

const ProjectContainer = ({ project }: ProjectProps) => {
    return (
        <>
            <Breadcrumbs items={['Projects', project.name, 'Kanban Board']} />
            <BoardTitle title='Kanban board' />
            <Filter users={project.users} />
            <Board data={project} users={project.users} />
        </>
    )
}

export default ProjectContainer