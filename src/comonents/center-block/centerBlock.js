import './centerBlock.css';

const CenterBlock = () => {
    return(
        <div className='block block--centre'>
            <div className="descr-container">
                <h2 className="title title--block">Biography</h2> 
                <p className="description description--centre">Alma and her husband have 2 kids: a teenager and a 9-year-old. Now they can focus 
                    more on their carreers but their main worry is about their sons education and health.
                    With a busy week days, the time they can really get togther as a family is during the 
                    dinners time and weekends. So their meal is a really special part of their days. She 
                    loves to use avocados in her diet. Interested in gardening.</p>
            </div>
            <div className="needs-block">
                <h2 className="title title--block">Needs</h2>
                <div className="dot-container">
                    <div className="dot"><span></span></div>
                    <p className="description description--centre"> Be ready for holiday family gathering as well as for light dinner during the day.</p>
                </div>
                <div className="dot-container">
                    <div className="dot"><span></span></div>
                    <p className="description description--centre"> Find balance between feeling good about herself, being able to maintain her lifestyle, while contributing with the world.</p>
                </div>
                <div className="dot-container">
                    <div className="dot"><span></span></div>
                    <p className="description description--centre"> Wise choices of the brands and respect to environment and sustainability is fundamental for her.</p>
                </div>
            </div>
            <div className="dscr dscr--mb">
                <h2 className="title title--block">Pain points</h2>
                <p className="description description--centre">Alma need to find flexible solution that can help her to optimize her time while dedicating herself to her 
                    carreer, kids and making sure to maintain a health lifestyle.</p>
            </div>
        </div>
    )
}

export default CenterBlock;