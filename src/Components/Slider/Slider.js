import './Slider.css';
function Slider(){
    const items = [
        {
            name: 'Item 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name: 'Item 2',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            name: 'Item 3',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco labori'
        },
        // Add more slides as needed
    ];
    return(
    <div className="slider">
            <div className='slide'>
                {items.map((item, index) => (
                    <div className='item' key ={index}>
                        <div className='content'>
                            <div className='name'>{item.name}</div>
                            <div className='des'>{item.description}</div>
                            <button>See more</button>
                        </div>
                    </div>
                ))}
            </div>
    </div>
    );
}
export default Slider;