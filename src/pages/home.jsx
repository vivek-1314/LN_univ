import React from 'react'

const Home = () => {
  return (
    <div className='relative h-screen w-full pt-2 flex flex-col'>

      <div className="absolute w-170 h-170 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,254,250,0.42)_0%,rgba(255,239,120,0.3192)_100%)] rounded-full left-1/2 top-[26rem] -z-10 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="header px-10 flex justify-between items-end">
        <img className='w-[125px] h-[42px] ' src="./logos/lnct_logo.png" alt="" />
        <img className='w-[90px] h-[65px] relative -left-3' src="./logos/lnuniv_logo.png" alt="" />
        <img className='w-[125px] h-[50px]' src="./logos/jnct_logo.png" alt="" />
      </div>

      <div className="w-full py-5 mt-4 mb-10 flex flex-col justify-between gap-4  items-center">
        <div className="flex justify-center items-center">
            <h1 className="bg-gradient-to-b from-[#FFD319] via-[#FF2975] to-[#8C1EFF] bg-clip-text text-transparent font-inter leading-none font-extrabold text-[3.4rem] text-center">
                LN Universe
            </h1>
        </div>
        <h3 className="font-inter font-bold text-[3rem] leading-none text-center">Timeline of Events</h3>
        <span className='font-inter font-semibold text-[24px] leading-none text-center
'>Experience some of the best moments of your life.</span>
      </div>

      <div className="min-h-[38rem] mt-10 relative w-full">

      <button className="absolute -top-4 left-1/2 transform -translate-x-1/2  bg-[#0F1C3E] font-inter font-semibold text-white px-8 rounded-3xl text-md weigt py-2 flex justify-center items-center ">
        Explore Events
      </button>

    <svg
      width="620"
      height="590"
      viewBox="0 0 620 590"
      className="w-[35rem] h-[34rem] absolute bottom-4 left-1/2 transform -translate-x-1/2"
    >
        <defs>
        <clipPath id="clip-shape1">
      <path
        d="M0 589.862L216.589 63.1569C250.906 -20.2939 369.094 -20.2939 403.411 63.1569L620 589.862H0Z"
        fill="#CBCBCB"
        fillOpacity="0.74"
      />
      </clipPath>
      </defs>

      <image
        href="./images/img31.png" 
        className='w-full h-full '
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#clip-shape1)"
      />
    </svg>

    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 540 460"
    className="w-[32rem] h-[27rem] absolute top-0 left-1 "
  >
    <defs>
     <clipPath id="clip-shape2">
    <path
      d="M0.567009 460L0.566744 0.0662149L497.58 0.0661846C525.463 0.0661778 536.4 37.639 513.721 55.5152L0.567009 460Z"
      fill="white"
    />
    </clipPath>
    </defs>

    <image
      href="./images/img13.jpg" 
      className='h-full w-full'
      preserveAspectRatio="xMidYMid slice"
      clipPath="url(#clip-shape2)"
    />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="601"
      height="594"
      viewBox="0 0 600 610"
      className="w-[34rem] h-[35rem] absolute bottom-1 left-2"
    >
         <defs>
         <clipPath id="clip-shape3">
      <path
        d="M598.141 41.8426C610.127 13.2938 576.264 -12.4943 551.93 6.65125L0.5 440.5V593.548H366.5L598.141 41.8426Z"
        fill="#CBCBCB"
        fillOpacity="0.74"
      />
       </clipPath>
       </defs>

      <image
        href="./images/img2.jpg" 
        className='w-full h-full'
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#clip-shape3)"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="526"
      height="460"
      viewBox="0 0 526 460"
      className="w-[32rem] h-[27rem] absolute top-0 right-0"
    >
         <defs>
         <clipPath id="clip-shape4">
      <path
        d="M525.433 460L525.433 0.0662149L28.42 0.0661846C0.537388 0.0661778 -10.4001 37.639 12.2787 55.5152L525.433 460Z"
        fill="#CBCBCB"
        fillOpacity="0.74"
      />
       </clipPath>
       </defs>

      <image
        href="./images/img5.png" 
        className='w-full h-full'
         clipPath="url(#clip-shape4)"
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="601"
      height="594"
      viewBox="0 0 601 594"
      className="w-[34rem] h-[35rem] absolute bottom-3 right-2"
    >
          <defs>
          <clipPath id="clip-shape5">
      <path
        d="M2.85929 41.8426C-9.12729 13.2938 24.7358 -12.4943 49.0701 6.65125L600.5 440.5V593.548H234.5L2.85929 41.8426Z"
        fill="#CBCBCB"
        fillOpacity="0.74"
      />
      </clipPath>
       </defs>

      <image
        href="./images/img4.jpg" 
        className='w-full h-full'
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#clip-shape5)"
      />
    </svg>


    </div>
    </div>
  )
}

export default Home
