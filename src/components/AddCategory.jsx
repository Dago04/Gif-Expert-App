import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState("");
    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        onAddCategory(inputValue);

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
