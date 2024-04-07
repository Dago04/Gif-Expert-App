import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, onDeleteCategory }) => {
    const { images, isLoading } = useFetchGifs(category);

    const handleDeleteCategory = () => {
        onDeleteCategory(category);
    };


    return (
        <>
            <div className="flex items-center">
                <h2 className="text-2xl font-medium mb-3 mt-3  p-2">{category}</h2>
                <a className="cursor-pointer" onClick={handleDeleteCategory}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="red"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </a>
            </div>

            {isLoading && <h2>Loading...</h2>}
            <div className="flex flex-wrap">
                {images.map((image) => (
                    <GifItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};
