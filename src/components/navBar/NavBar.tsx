import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';


const classFunc = (
  props: { isActive: boolean }
) => props.isActive ? s.activeLink : ''


export const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={classFunc}>Profile</NavLink>
      </div>
      <div className={ `${s.item} ${s.activeLink}` }>
        <NavLink to="/dialogs" className={classFunc}>Messages</NavLink>
      </div>
      <div className={ `${s.item} ${s.activeLink}` }>
        <NavLink to="" className={classFunc}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="a" className={classFunc}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="b" className={classFunc}>Settings</NavLink>
      </div>
    </nav>
  )
}
