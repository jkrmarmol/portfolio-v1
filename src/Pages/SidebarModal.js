import { NavLink } from 'react-router-dom';
function SidebarModal() {
  return (
    <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <div></div>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div>
          <NavLink to='/'>
            <span>H</span>ome
          </NavLink>
        </div>
        <div>
          <NavLink to='/services'>
            <span>S</span>ervice
          </NavLink>
        </div>
        <div>
          <NavLink to='/skills'>
            <span>S</span>kills
          </NavLink>
        </div>
        <div>
          <a href='https://m.me/jkrmarmol' target='_blank' rel="noreferrer">
            <span>C</span>ontact
          </a>
        </div>
      </div>
    </div>
  );
}

export default SidebarModal;