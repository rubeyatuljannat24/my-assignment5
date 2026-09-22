import { use, useState } from "react";

import TechnologyCard from "./TechnologyCard";
import { toast } from "react-toastify";

async function getTechnologies() {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
}

const technologiesPromise = getTechnologies();

export default function ExploreTechnologies() {
  const technologies = use(technologiesPromise);
  // Event Handler

  const [count, setCount] = useState([]);

  function addToStack(technology) {
    const alreadyAdded = count.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack`);
      return;
    }
    setCount([...count, technology]);

    toast.success(`${technology.name} added to stack`);
  }

  function removeFromStack(id) {
    const updatedStack = count.filter((item) => item.id !== id);
    setCount(updatedStack);

    toast.info("Technology removed from stack");
  }

  function removeAll() {
    setCount([]);
    toast.info("All technologies removed from stack");
  }

  return (

    <div className="inter-font max-w-7xl mx-auto px-4 py-16 ">

      <h2 className="text-3xl font-extrabold ">
        Explore the <span className="brand-gradient bg-clip-text text-transparent text-3xl font-extrabold">Technologies</span>
      </h2>

      <p className="pt-4 pb-10 text-[#64748B] ">
        Pick one technology per category to build your ideal stack.
      </p>
      {/* 12 Technologies Card */}
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[85%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAddToStack={addToStack}
              isAdded={count.some((item) => item.id === technology.id)}
            ></TechnologyCard>
          ))}
        </div>
        {/* Your Stack section */}
        <div className="w-full lg:w-[15%] pl-6">
          <div className="border border-gray-300 rounded-2xl p-5">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg">Your Stack</h2>
              <span className="  bg-gray-200 rounded-full px-2 py-1 text-sm">
                {count.length}
              </span>
            </div>
            <div>
              {count.length === 0 && (
                <p className="text-gray-400 text-sm text-center py-8">
                  No technologies selected yet
                </p>
              )}
              {count.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center gap-3 border-b border-gray-200 py-3"
                >
                  <img src={technology.icon} alt="" className="w-7 h-7" />

                  <div className="flex-1">
                    <p className="font-semibold text-sm">{technology.name}</p>
                    <p className="text-gray-500 text-xs">
                      {technology.category}
                    </p>
                  </div>

                  <button onClick={() => removeFromStack(technology.id)}>
                    ×
                  </button>
                </div>
              ))}
            </div>
           <button
              onClick={removeAll}
              className="w-full mt-4 border-red-300 text-red-600 py-2 rounded-lg hover:bg-red-200">
              Remove All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}