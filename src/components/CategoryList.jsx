import useDonationData from "../Hooks/useDonationData";
import SingleCategoryCard from "./SingleCategoryCard";

const CategoryList = () => {

    const {data, loading} = useDonationData();

    return (
        <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto mb-24">
            {
                data.map((d) => <SingleCategoryCard key={d.id} card={d}></SingleCategoryCard>)
            }
        </div>
    );
};

export default CategoryList;