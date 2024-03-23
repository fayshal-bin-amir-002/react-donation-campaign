import PropTypes from 'prop-types';
import SingleCategoryCard from "./SingleCategoryCard";

const CategoryList = ({filteredData}) => {

    

    return (
        <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto mb-24">
            {
                filteredData.map((d) => <SingleCategoryCard key={d.id} card={d}></SingleCategoryCard>)
            }
        </div>
    );
};


CategoryList.propTypes = {
    filteredData: PropTypes.array.isRequired
};

export default CategoryList;