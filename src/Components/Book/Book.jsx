import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Book({ book }) {
  const { bookName, author, image, review,tags,category,bookId } = book;
  return (
        <div className="card  w-96 shadow-xl mt-5 p-6 mx-auto">
        <figure className="bg-blue-200 p-7 rounded-2xl">
            <img
            className="h-[170px]  object-cover"
            src={image}
           
            />
        </figure>
        <div className="card-body">
         <div className="flex gap-3">
         {
            tags.map((tag) =><button key={tag.id} className="btn btn-xs bg-green-100 text-green-500">{tag}</button> )
         }
         </div>
            <h2 className="card-title">
             {bookName}
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>By: {author}</p>

            <div className="border-t-2 border-dashed mt-2 mb-2"></div>

            <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">{category}</div>
            

            <div className="rating">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    
                    </div>

                    


            </div>
            
            <Link to={`books/${bookId}`} className="text-center"><button className="btn bg-green-500 text-white font-bold mt-3">Explore More</button></Link>
        </div>
        </div>
  );
}

Book.propTypes = {};

export default Book;
