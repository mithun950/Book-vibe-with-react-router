
import PropTypes from 'prop-types'

function Banner() {
  return (
    <div className="hero bg-base-200 h-[600px] p-5 rounded-xl mt-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="/assets/books.jpg"
      className="w-full rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      
      <button className="btn bg-[#23BE0A] text-white font-semibold mt-5">View The List</button>
    </div>
  </div>
</div>
  )
}

Banner.propTypes = {

}

export default Banner

