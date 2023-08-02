import { Link, Outlet } from "react-router-dom"
import './header.css'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { toggleTheme } from "../store/slices/todo.slice"
const Header = () => {
    const darkMode = useSelector((state: RootState) => state.todo.darkMode)
    const dispatch = useDispatch()
    const colors = {
        whiteMode:{
            backgroundColor: 'white'
        },
        darkMode: {
            backgroundColor: 'rgb(33, 33, 33)'
        }
    }
    const onChange = () => {
        dispatch(toggleTheme())
    }
    return(
        <div className="container" style={darkMode ? colors.darkMode : colors.whiteMode}>
            <header className="header">
                <div className="links">
                    <Link to={'/'}>home page</Link>
                    <Link to={'/taskPage'}>task page</Link>
                </div>

                <input type="checkbox" checked={darkMode} onChange={onChange} />
            </header>
        
            <div className="content" style={darkMode ? colors.whiteMode : colors.whiteMode}>
                 <Outlet />
            </div>
        </div>
    )
}

export default Header