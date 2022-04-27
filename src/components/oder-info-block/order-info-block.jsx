import "./order-info-block.scss";

const OrderInfoBlock = ({orderClass, orderImg, title, titleInfo}) => {
    let orderClassName = "order-info " + orderClass;
    return (
        <div className={orderClassName}>
            <img src={orderImg} alt="" />
            <h2>{title}</h2>
            <p>{titleInfo}</p>
            <button>
                <span>Вернуться назад</span>
                <img src="images/buy-arrow.svg" alt="" />
            </button>
        </div>
    );
}
 
export default OrderInfoBlock;