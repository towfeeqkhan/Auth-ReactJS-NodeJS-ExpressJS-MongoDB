import { useNavigate } from "react-router";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
          *{
            font-family: "Poppins", sans-serif;
          }`}
      </style>

      <section className="flex flex-col items-center bg-linear-to-b from-black to-[#1A0033] text-white">
        <div className="flex flex-wrap items-center justify-center p-1.5 mt-32 rounded-full border border-indigo-900 text-xs">
          <div className="flex items-center">
            <img
              className="size-7 rounded-full border border-indigo-900"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
              alt="userImage1"
            />
            <img
              className="size-7 rounded-full border border-indigo-900 -translate-x-2"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
              alt="userImage2"
            />
            <img
              className="size-7 rounded-full border border-indigo-900 -translate-x-4"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
              alt="userImage3"
            />
          </div>
          <p className="-translate-x-2 text-xs text-slate-200">
            Join community of 1m+ founders{" "}
          </p>
        </div>

        <h2 className="text-4xl md:text-7xl/20 text-center max-w-4xl mt-2 text-slate-50 bg-clip-text leading-tight px-4">
          Your ideas, turned into AI agents in minutes
        </h2>
        <p className="text-slate-50 text-sm md:text-base/7 text-center max-w-[650px] mt-3 px-4">
          Deploy your agent and let it run. It executes tasks autonomously,
          reports results, and continues working in the background.
        </p>

        <div className="flex gap-3 mt-6">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-slate-50 text-xs md:text-base px-6 py-3 rounded-lg transition cursor-pointer"
          >
            <span>Get started</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.166 10h11.667m0 0L9.999 4.167M15.833 10l-5.834 5.834"
                stroke="#fff"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <button className="flex items-center gap-2 text-slate-50 text-xs md:text-base px-8 py-3 rounded-lg transition cursor-pointer">
            <span>Try 7 days free trial</span>
            <div className="relative flex size-3.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
              <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
            </div>
          </button>
        </div>

        <img
          className="max-h-64 md:max-h-80 object-cover object-top mt-12 w-full max-w-4xl px-4"
          src={
            "https://assets.prebuiltui.com/images/components/hero-section/hero-meeting-image.png"
          }
          alt=""
        />
      </section>
    </>
  );
};

export default Homepage;
