import PropTypes from 'prop-types';
import SingleCategoryCard from "./SingleCategoryCard";
import CustomSpinner from './CustomSpinner';

const CategoryList = ({ filteredData, loading }) => {

    if(loading) {
        return <CustomSpinner></CustomSpinner>
    }    

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