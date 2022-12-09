import { Suspense, lazy } from 'react'
import Menubar from './components/Menubar/Menubar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import project from './assets/data/project.json';
import IssueContainer from './views/Issue/IssueContainer';

const SettingContainer = lazy(() => import('./views/Setting/SettingContainer'));
const ProjectContainer = lazy(() => import('./views/Project/ProjectContainer'));


function App() {
    const getIssueById = (id: string) => {
        return project.issues.find((issue: any) => issue.id === id);
    }
    return (
        <div className='relative pt-[25px] pr-[32px] pb-[50px] pl-[334px]'>
            <Sidebar />
            <Menubar projectName={project.name} />
            <ToastContainer />
            <Suspense fallback={<h1>Loading...</h1>}>
                <main>
                    <Routes>
                        <Route path="/" element={<Navigate to="/project/board" replace />} />
                        <Route path='project'>
                            <Route path='board' element={<ProjectContainer project={project} />}>
                                <Route path='issues/:issueId' index element={<h1>Issue Id</h1>} />
                            </Route>
                            <Route path='settings' element={<SettingContainer project={project} />} />
                            <Route path='issue/:id' element={<IssueContainer projectName={project.name} users={project.users} getIssueById={getIssueById} />} />
                        </Route>
                    </Routes>
                </main>
            </Suspense>
        </div>
    )
}

export default App;
