export const GifItem = ({ title, url }) => {
    return (
        <div className="xl:w-1/3 md:w-1/2 p-2 ">
            <div className="bg-slate-100 p-6 rounded-lg min-h-[25rem] shadow-md hover:shadow-lg transition duration-300 ">
                <img
                    className="h-40 rounded w-full object-cover object-center mb-6 min-h-[15rem]"
                    src={url}
                    alt={title}
                />
                <div className="flex justify-between">
                    <h3 className=" tracking-widest text-black text-xl font-normal title-font text-center">
                        {title}
                    </h3>
                    <a className="cursor-pointer" href={url} target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="purple"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-link"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 15l6 -6" />
                            <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                            <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                        </svg>
                    </a>
                </div>

            </div>
        </div>
    );
};
