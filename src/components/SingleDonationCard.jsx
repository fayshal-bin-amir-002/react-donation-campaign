import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleDonationCard = ({ card }) => {

    const { id, card_bg, picture, category, title, category_bg, text_button_bg, price } = card;

    return (
        <div className="rounded-lg p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800"
            style={{ backgroundColor: card_bg }}>
            <div className="flex-shrink-0 mb-6 w-[250px] sm:mb-0">
                <img src={picture} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
            </div>
            <div className="flex flex-col space-y-4">
                <div>
                    <Button size='sm' style={{ backgroundColor: category_bg, marginBottom: '12px' }}>{category}</Button>
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <span className="text-sm dark:text-gray-600">{price}</span>
                </div>
                <div>
                    <Link to={`/donation-details/${id}`}>
                        <Button style={{ backgroundColor: text_button_bg }}>View Details</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

SingleDonationCard.propTypes = {
    card: PropTypes.object.isRequired
};

export default SingleDonationCard;