export default function TechnologyCard({ technology, onAddToStack, isAdded }) {
  return (
    <div className="border border-gray-300 rounded-2xl p-5">
      <div className="flex justify-between">
        <img src={technology.icon} alt="" className="w-6 h-6" />
        <span
          className={` px-3 py-1 rounded-4xl ${
            technology.badge === "Popular"
              ? "bg-blue-200 text-blue-500"
              : technology.badge === "Essential"
                ? "bg-orange-400 text-orange-500"
                : technology.badge === "Reliable"
                  ? "bg-green-200 text-green-500"
                  : technology.badge === "Fast"
                    ? "bg-violet-200 text-violet-500 "
                    : technology.badge === "Minimal"
                      ? "bg-gray-300 text-gray-500 "
                      : technology.badge === "Top SQL"
                        ? "bg-pink-300 text-pink-500"
                        : technology.badge === "Containers"
                          ? "bg-amber-300 text-amber-500"
                          : technology.badge === "Modern"
                            ? "bg-lime-200 text-lime-500"
                            : technology.badge === "Versatile"
                              ? "bg-red-200 text-red-500"
                              : "bg-gray-200 text-gray-500"
          }`}
        >
          {technology.badge}
        </span>
      </div>

      <h2 className="pt-4 pb-3 font-extrabold text-xl ">{technology.name}</h2>
      <p className="jakarta-font pb-4 text-gray-400 text-sm border-b border-gray-300 leading-6">
        {technology.description}
      </p>

      <div className="flex flex-wrap justify-between items-center gap-2 mt-2">
        <span className="bg-gray-100 rounded-full pl-2 pr-2 jakarta-font text-gray-600 ">
          {technology.category}
        </span>
        <span className="text-gray-600">{technology.difficulty}</span>
        <span className="text-gray-600 text-sm">
          <span className="text-yellow-500">★</span> {technology.rating}
        </span>
      </div>

      <button
        className="bg-black text-white w-full p-3 rounded-lg my-5 hover:bg-gray-700"
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
      >
        {isAdded ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
