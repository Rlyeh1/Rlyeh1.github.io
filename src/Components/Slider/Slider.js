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
        {
            name: 'Item 4',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco labori'
        },
        // Add more slides as needed
    ];
    return(
        <div className="container">

        <div className= "slide">

            
            <div className="item" style={{ backgroundImage: `url(https://i.ibb.co/qCkd9jS/img1.jpg)`}}>
                <div class="content">
                    <div class="name">Switzerland</div>
                    <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: `url(https://i.ibb.co/jrRb11q/img2.jpg)`}}>
                <div className="content">
                    <div className="name">Finland</div>
                    <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: `url(https://i.ibb.co/NSwVv8D/img3.jpg)`}}>
                <div className="content">
                    <div className="name">Iceland</div>
                    <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: `url(https://i.ibb.co/Bq4Q0M8/img4.jpg)`}}>
                <div className="content">
                    <div className="name">Australia</div>
                    <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: `url(https://i.ibb.co/jTQfmTq/img5.jpg)`}}>
                <div className="content">
                    <div className="name">Netherland</div>
                    <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: `url(https://i.ibb.co/RNkk6L0/img6.jpg)`}}>
                <div className="content">
                    <div className="name">Ireland</div>
                    <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>

        </div>

        <div className="button">
            <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
            <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
        </div>

    </div>
    );
}
export default Slider;