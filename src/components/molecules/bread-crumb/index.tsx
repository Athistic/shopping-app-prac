import { useLocation, NavLink } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>

        {pathnames.map((path, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const title = path;
          return (
            <div key={index}>
              <span>/</span>
              {last ? <span>{title}</span> : <NavLink to={to}>{title}</NavLink>}
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
