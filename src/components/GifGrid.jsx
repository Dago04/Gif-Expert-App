import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h2 className="text-2xl font-medium mb-3 mt-3  p-2">{category}</h2>
            {isLoading && <h2>Loading...</h2>}
            <div className="flex flex-wrap">
                {
                    images.map((image) => (
                        <GifItem key={image.id} {...image} />
                    ))
                }
            </div>


        </>
    );
};
