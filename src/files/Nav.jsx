import {Link } from 'react-router-dom';
export default function Nav() {
  return (
    <>
      <nav>
        <Link to="/" className='Link'><h1 className="gotamu-exe">GOTAMU.EXE</h1></Link>
        <span className='video-case'>Video Case</span>
        <Link to={'/connect'} className='Link'><p className="connect">Connect</p></Link>  
      </nav>
    </>
  );
}