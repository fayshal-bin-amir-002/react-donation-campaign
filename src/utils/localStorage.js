export const saveToLocalStorage = (data) => {
    const savedData = getLocalData();
    const isExist = savedData.find((item) => item.id === data.id);
    if(!isExist) {
        savedData.push(data);
        localStorage.setItem('donation', JSON.stringify(savedData));
    }
    else {
        alert('Already data exists');
    }
}

export const getLocalData = () => {
    const data = JSON.parse(localStorage.getItem('donation')) || [];
    return data;
}