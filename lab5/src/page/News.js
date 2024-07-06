import React from 'react'

const News = () => {
    const newLists = [
        { id: 1, title: 'Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition', description: '“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.', images: 'imgs/event-1.jpg' },
        { id: 2, title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', images: 'imgs/event-2.jpg' },
        { id: 3, title: 'Burger King is testing a new breakfast sandwich', description: 'This is a win for the flatbread fans.', images: 'imgs/event-3.jpg' },
        { id: 4, title: 'Popeyes permanently adds chicken wings to its menu', description: 'And you can get ’em in five different flavors.', images: 'imgs/event-4.jpg' },
        { id: 5, title: 'Top salmon with a sizzling mix of aromatics and spices', description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', images: 'imgs/event-5.jpg' },
        { id: 6, title: '80 Christmas dinner ideas for the ultimate holiday feast', description: 'Build the perfect Christmas menu with these delicious recipes.', images: 'imgs/event-6.jpg' },
        { id: 7, title: 'How to make the easiest prime rib roast for the holidays', description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', images: 'imgs/event-7.jpg' },
        { id: 8, title: 'Turn leftover turkey into a flavorful Waldorf salad', description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', images: 'imgs/event-8.jpg' },
    ];
    return (
        <div className='row'>
            <h1>News</h1>
            {newLists.map(news => (
                <div className="card col-md-3" key={news.id}>
                    <img src={news.images} style={{width: "100%"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{news.title}</h5>
                        <p className="card-text">{news.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default News
