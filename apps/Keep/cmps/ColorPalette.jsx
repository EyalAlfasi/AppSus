

export function ColorPalette({onColorEdit}) {

    return (
        <section className="color-picker">
            <span onClick={() => onColorEdit('yellow')} style={{backgroundColor :'yellow'}}></span>
            <span onClick={() => onColorEdit('blue')} style={{backgroundColor :'blue'}}></span>
            <span onClick={() => onColorEdit('pink')} style={{backgroundColor :'pink'}}></span>
            {/* <span className="blue"></span>
            <span className="pink"></span> */}
        </section>
    )
}