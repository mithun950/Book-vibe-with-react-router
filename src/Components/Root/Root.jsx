
import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div className='w-11/12 mx-auto'>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </div>
  )
}

Root.propTypes = {

}

export default Root

