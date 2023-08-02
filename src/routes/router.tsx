import Header from "../components/header";
import HomePage from "../pages/homePage";
import {RouteObject} from 'react-router-dom'
import TaskPage from "../pages/taskPage";
import EditPage from "../pages/editPage";

const routes: RouteObject[] = [
    {
        element: <Header /> ,
        path: '/',
        children: [
            {
                element: <HomePage />,
                index: true
            },
            {
                element: <TaskPage />,
                path: 'taskPage'
            },
            {
                element: <EditPage />,
                path: 'editPage/:Id'
            }
        ]
    }
]


export default routes