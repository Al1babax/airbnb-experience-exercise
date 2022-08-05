import star from "../assets/Star_1.png";


function Card(props) {
    props = props.item;
    let img = "imgs/" + props.coverImg
    let dotSize = props.stats.reviewCount < 10 ? "57" : "65";
    const el = 'px-1 text-gray-500 font-bold absolute -top-1 left-[' + dotSize + 'px]'
    
    return (
        <div className="container mx-auto w-[175px] bg-white mx-2">
            <div className="img relative">
                <div className="status bg-slate-200 w-[61px] h-[20px] rounded-sm z-10 absolute top-2 left-2">
                    <p className='px-2 text-[12px] py-0'>{props.openSpots === 0 ? "Sold out" : "Available"}</p>
                </div>
                <img src={img} className="w-[176px] h-[235px] rounded-xl z-0" alt="" />
            </div>
            <div className="rating container w-[176px]">
                <div className="stars flex relative">
                    <img src={star} className="w-[14px] h-[14px] absolute top-[5px]" alt="" />
                    <span className="px-1 pl-4">{props.stats.rating}</span>
                    <span className="text-gray-500 pr-2">({props.stats.reviewCount})</span>
                    <span className={el}>.</span>
                    <span className='text-gray-500'>{props.location}</span>
                </div>
                <div className="info text-[13px]">
                    <div className="title">
                        <p>{props.title}</p>
                    </div>
                    <div className="price flex">
                        <p className='pr-1 font-bold'>From  $ <span>{props.price}</span></p>
                        <p>/ person</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;