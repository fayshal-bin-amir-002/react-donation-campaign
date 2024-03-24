import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const saveToLocalStorage = (data) => {
    const savedData = getLocalData();
    const isExist = savedData.find((item) => item.id === data.id);
    if(!isExist) {
        savedData.push(data);
        localStorage.setItem('donation', JSON.stringify(savedData));
        toast.success("Donate successfully");
    }
    else {
        toast.error("Already exist");
    }
}

export const getLocalData = () => {
    const data = JSON.parse(localStorage.getItem('donation')) || [];
    return data;
}