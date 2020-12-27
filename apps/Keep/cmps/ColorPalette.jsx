

export function ColorPalette({onColorEdit}) {

    return (
        <section className="color-picker">
            <span onClick={() => onColorEdit('#fb7756')} style={{backgroundColor :'#fb7756'}}></span>
            <span onClick={() => onColorEdit('#e74645')} style={{backgroundColor :'#e74645'}}></span>
            <span onClick={() => onColorEdit('#b03c70')} style={{backgroundColor :'#b03c70'}}></span>
            <span onClick={() => onColorEdit('#fb569f')} style={{backgroundColor :'#fb569f'}}></span>
            <span onClick={() => onColorEdit('#e6e6e6')} style={{backgroundColor :'#e6e6e6'}}></span>
            <span onClick={() => onColorEdit('#59b2a2')} style={{backgroundColor :'#59b2a2'}}></span>
            <span onClick={() => onColorEdit('#61b359')} style={{backgroundColor :'#61b359'}}></span>
            <span onClick={() => onColorEdit('#598eb3')} style={{backgroundColor :'#598eb3'}}></span>
            {/* <span className="blue"></span>
            <span className="pink"></span> */}
        </section>
    )
}