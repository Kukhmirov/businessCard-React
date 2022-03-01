import './rightBlock.css';

const RightBlock = (props) => {
    const {foto} = props.data;
    return(
        <div className='block block--right'>
            <div className="foto-box">
                <img src={foto ? foto : require("../assets/pngegg.png")} alt="" />
            </div>
            <div className="description description--foto">&ldquo;It is very important for me to have fresh, tasty products at hand.&raquo;</div>
        </div>
    )
};

export default RightBlock;