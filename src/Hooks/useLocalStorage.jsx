import { useEffect, useState } from "react";
import { getLocalData } from "../utils/localStorage";

const useLocalStorage = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const data = getLocalData();
        setCards(data);
    }, []);

    return {cards};
};

export default useLocalStorage;