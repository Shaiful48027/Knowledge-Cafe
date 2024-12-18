import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleBmark}) => {
    
    const {title, cover_image, reading_time,author, author_image, hashtags, post_date} = blog;
    
    return (
        <div className='mb-16'>
            <img className='w-full' src={cover_image} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center my-4'>
                    <img  className='w-14' src={author_image} alt="" />
                    <div>
                        <h4>{author}</h4>
                        <h4>{post_date}</h4>
                    </div>
                </div>

                <div >
                    <span>{reading_time} read</span>
                    <button  className='ml-2'><FaBookmark /></button>
                </div>
            </div>
            <h3 className='text-4xl font-bold'>{title}</h3>
            <h4 className='py-3'>{hashtags}</h4>

            <button onClick={() => handleBmark(blog, reading_time)}>Mark as Read</button>
        </div>
    );
};

 
Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleBmark: PropTypes.func
}

export default Blog;