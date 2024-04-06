import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"]);
    const onAddCategory = (category) => {
        setCategories([category, ...categories]);
    };
    return (
        <>
            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategory onAddCategory={onAddCategory} />

            {/* listado de gif */}
            <ol>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>

            {/* gif item */}
        </>
    );
};
