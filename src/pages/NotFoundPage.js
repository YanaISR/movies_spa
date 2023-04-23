import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className = 'container'>
          <h2>This page does not exit</h2>
          <div>
            {/* <a href='/home' >Home page</a> */}
            <Link to='/home' >Home page</Link>
          </div>
        </div>
    )
}

export { NotFoundPage };