export const GifItem = ({ title, url }) => {
    return (
        <div className="xl:w-1/3 md:w-1/2 p-2">
            <div className="bg-slate-100 p-6 rounded-lg min-h-[25rem] ">
                <img className="h-40 rounded w-full object-cover object-center mb-6 min-h-[15rem]"
                    src={url} alt={title} />
                <h3 className=" tracking-widest text-black text-xl font-normal title-font text-center">
                    {title}
                </h3>
            </div>
        </div>
    );
};
