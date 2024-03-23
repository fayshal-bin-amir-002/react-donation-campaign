import { useEffect, useState } from "react";
import { getLocalData } from "../utils/localStorage";
import SingleDonationCard from "../components/SingleDonationCard";

const Donation = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const data = getLocalData();
        setCards(data);
    },[]);

    return (
        <div className="max-w-7xl mx-auto my-12 grid grid-cols-2 gap-6">
            {
                cards.map((card) => <SingleDonationCard key={card.id} card={card}></SingleDonationCard>)
            }
        </div>
    );
};

export default Donation;