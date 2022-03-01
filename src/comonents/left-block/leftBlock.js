import './leftBlock.css';

const LeftBlock = (props) => {
    const {name, surname, occupation, location, age, family, experience, experienceLevel} = props.data;

    const elemLine = experience.map((item, index) => {
        const width = experienceLevel[index];
        return (
            <div className="block__line">
                <div className="subtitle">{item}</div>
                <div className="line line--long" style={{width: width}}></div>
            </div>
        )
    })


    return(
        <div className='block block--left'>
            <h1 className="title title--name">{name} {surname}</h1>
            <div className="block-info">
                <div className="block-card">
                    <div className="card">
                        <img src={require('../assets/Group.png')} alt=""/>
                        <div className="subtitle">Occupation</div>
                        <div className="description description--info">{occupation}</div>
                    </div>
                    <div className="card">
                        <img src={require('../assets/person.png')} alt="" />
                        <div className="subtitle">Location</div>
                        <div className="description description--info">{location}</div>
                    </div>
                    <div className="card">
                        <img src={require('../assets/person.png')} alt=""/>
                        <div className="subtitle">Age</div>
                        <div className="description description--info">{age}</div>
                    </div>
                    <div className="card">
                        <img src={require('../assets/home.png')} alt=""/>
                        <div className="subtitle">Family</div>
                        <div className="description description--info">{family}</div>
                    </div>
                </div>
                <h2 className="title title--block">Tech</h2>
                {elemLine}
            </div>
        </div>
    )
}

export default LeftBlock;