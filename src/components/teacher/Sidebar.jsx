import React from "react";
import { teacherSideBarItems } from "../../util/sidebar";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <ul className="menu gap-3 p-3 w-full grow">
      {/* List item */}
      {teacherSideBarItems.map((item) => {
        return (
          <li key={item.name} className="" onClick={() => navigate(item.path)}>
            <button
              className={`is-drawer-close:tooltip is-drawer-close:tooltip-right ${
                pathname === item.path && "bg-primary"
              }`}
              data-tip={item.name}
            >
              <div className="text-lg">{item.icon}</div>
              <span className="is-drawer-close:hidden text-lg">
                {item.name}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
