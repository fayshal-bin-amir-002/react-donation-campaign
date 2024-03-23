import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';


const SingleCategoryCard = ({ card }) => {

    const { id, card_bg, picture, category, title, category_bg, text_button_bg } = card;

    return (
        <Link to={`/donation-details/${id}`}>
            <Card className={`mt-6 cursor-pointer`} style={{ backgroundColor: card_bg }}>
                <CardHeader color="blue-gray" className="rounded-b-none m-0 overflow-hidden shadow-none">
                    <img
                        src={picture}
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Button size='sm' style={{ backgroundColor: category_bg }}>{category}</Button>
                    <Typography variant="h5" style={{ color: text_button_bg }} className="my-2">
                        {title}
                    </Typography>
                </CardBody>
            </Card>
        </Link>
    );
};

SingleCategoryCard.propTypes = {
    card: PropTypes.object.isRequired
};

export default SingleCategoryCard;