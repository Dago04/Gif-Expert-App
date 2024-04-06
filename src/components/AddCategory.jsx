import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState("");
    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault(); // Evita que se recargue la página 
        if (inputValue.trim().length <= 1) return; // Evita que se agregue un valor vacío
        onAddCategory(inputValue); // Llama a la función onAddCategory de GifExpertApp
        setInputValue(""); // Limpia el input
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search gift"
                value={inputValue}
                onChange={onChangeInput}
            />
        </form>
    );
};
