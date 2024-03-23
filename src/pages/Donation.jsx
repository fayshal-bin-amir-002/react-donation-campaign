import { Button } from "@material-tailwind/react";
import useLocalStorage from "../Hooks/useLocalStorage";
import SingleDonationCard from "../components/SingleDonationCard";
import { useState } from "react";

const Donation = () => {

    const { cards } = useLocalStorage();
    const [size, setSize] = useState(4);
    const [show, setShow] = useState(false);

    const handleAllCardShow = () => {
        if (!show) {
            setSize(cards.length);
            setShow(true);
        }
        else {
            setSize(4);
            setShow(false);
        }
    }

    if(cards.length === 0) {
        return <p className="text-center text-4xl mt-24 text-red-500">No data found</p>
    }

    return (
        <div className="max-w-7xl mx-auto my-12">
            <div className="grid grid-cols-2 gap-6 mb-12">
                {
                    cards.slice(0, size).map((card) => <SingleDonationCard key={card.id} card={card}></SingleDonationCard>)
                }
            </div>
            {
                (cards.length > 4) && <div className="text-center">
                    <Button color="green" onClick={handleAllCardShow}>{!show ? 'Show All' : 'Show Less'}</Button>
                </div>
            }
        </div>
    );
};

export default Donation;