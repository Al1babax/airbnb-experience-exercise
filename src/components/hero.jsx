import image from "../assets/HbbmEoj.jpeg";

function Hero() {
    return (
        <div className="container bg-white w-[550px] pb-14 mx-auto">
            <div className="images pt-[26px] w-[395px] mx-auto">
                <img src={image} alt="" />
            </div>
            <div className="title pt-[32px] font-bold text-[36px] px-[36px]">
                <h1>Online Experiences</h1>
            </div>
            <div className="content text-[17px] pt-[16px] pl-[36px] pr-[194px] leading-4">
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}

export default Hero;