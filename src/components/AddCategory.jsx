import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault(); // Evita que se recargue la página 
        if (inputValue.trim().length <= 1) return; // Evita que se agregue un valor vacío
        onAddCategory(inputValue.trim()); // Llama a la función onAddCategory de GifExpertApp
        setInputValue(""); // Limpia el input
    };

    return (
        <form onSubmit={onSubmit} className=" flex w-50 items-start">
            <input className="outline-none bg-gray-100 rounded-lg p-2 w-full px-5"
                type="text"
                placeholder="Search gif"
                value={inputValue}
                onChange={onChangeInput}
            />
        </form>

    );
};
