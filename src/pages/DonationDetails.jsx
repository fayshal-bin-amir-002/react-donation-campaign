import { useParams } from "react-router-dom";
import useDonationData from "../Hooks/useDonationData";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";

const DonationDetails = () => {

    const { id } = useParams();

    const { data, loading } = useDonationData();
    const [card, setCard] = useState({});



    useEffect(() => {
        if (data) {
            const newCard = data.find((d) => d.id === id);
            setCard(newCard);
        }
    }, [data, id])

    const { picture, title, description, price } = card || {};

    return (
        <div className="max-w-7xl mx-auto my-24">
            <div className="w-full p-4 shadow-md dark:dark:bg-gray-900 dark:dark:text-gray-100">
                <div className="space-y-4">
                    <div className="space-y-2 relative">
                        <img src={picture} alt="" className="block object-cover object-center w-full rounded-md h-[500px] dark:dark:bg-gray-500" />
                        <div className="flex items-center text-xs absolute bottom-0 bg-black bg-opacity-40 w-full h-[100px]">
                            <Button color="red" className="ms-5">Donate {price}</Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold dark:dark:text-violet-400">{title}</h3>
                        <p className="leading-snug dark:dark:text-gray-400">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;