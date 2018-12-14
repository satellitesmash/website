import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    // CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: require('../assets/picture1.jpg'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../assets/picture2.jpg'),
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: require('../assets/picture3.jpg'),
        altText: 'Slide 3',
        caption: 'Slide 3'
    },
    {
        src: require('../assets/picture4.jpg'),
        altText: 'Slide 4',
        caption: 'Slide 4'
    },
    {
        src: require('../assets/picture5.jpg'),
        altText: 'Slide 5',
        caption: 'Slide 5'
    },
    {
        src: require('../assets/picture6.jpg'),
        altText: 'Slide 6',
        caption: 'Slide 6'
    },
    {
        src: require('../assets/picture7.jpg'),
        altText: 'Slide 7',
        caption: 'Slide 7'
    }
];

class CarouselPictures extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} width="100%"/>
                    {/* <CarouselCaption captionHeader={item.caption} /> */}
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}

export default CarouselPictures;