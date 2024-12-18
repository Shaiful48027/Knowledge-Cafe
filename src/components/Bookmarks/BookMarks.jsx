import Bookmark from "../Bookmark/Bookmark";


const BookMarks = ({bookmarks, readingTimes}) => {

    return (
        <div className="md: w-1/3 h-fit bg-slate-400 p-5 rounded-xl mt-5">

            <div>
                <h3>Reading Time : {readingTimes}</h3>
            </div>


            <h2 className="text-3xl">BookMarks : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};



export default BookMarks;