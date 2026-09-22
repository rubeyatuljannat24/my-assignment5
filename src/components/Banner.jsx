import heroImg from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className="inter-font container mx-auto max-w-6xl flex flex-col lg:flex-row justify-between  items-center ">
        <div className="pl-6 pr-4">
        <h2 className="text-5xl font-extrabold text-[#0F172A]">Build Your Ideal <br /> <span className="brand-gradient bg-clip-text text-transparent text-5xl font-extrabold">Development Stack </span></h2>   
         <p className="text-[#475569] py-5 text-xl">Explore frontend, backend, database, and tooling options,<br />
        compare them side by side, and put together the stack that fits your <br />
        next project.</p>
        <div className="flex gap-2 items-center">
    <button className="btn brand-gradient rounded-lg px-4 py-2">Explore Technologies</button>
    <button className="btn text-[#374151] bg-white px-8 py-2 font-medium text-sm rounded-lg transition-colors border border-gray-300 ">Learn more</button>
        </div>
        </div>
        <div>
            <img src={heroImg} alt="" />
        </div>
        </div>
    );
};

export default Banner;