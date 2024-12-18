import PropTypes from "prop-types";


const Bookmark = ({bookmark}) => {
    const {title} = bookmark;

    return (
        <div className="bg-slate-200 p-4 my-4 rounded-xl">
            <h4 className="text-1xl">{title}</h4>
        </div>
    );
};

Bookmark.prototypes = {
    bookmark: PropTypes.array
}
export default Bookmark;