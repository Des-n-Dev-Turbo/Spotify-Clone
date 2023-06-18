/* eslint-disable react/prop-types */
import './SidebarOptions.css';

const SidebarOptions = ({ title, Icon }) => {
  return (
    <div className="sidebar-options">
      {Icon && <Icon className="sidebar-options__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOptions;
