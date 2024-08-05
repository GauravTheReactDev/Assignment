import React from 'react';
import './ListCard.css';
import { IoIosArrowDroprightCircle } from "react-icons/io"

const items = [
    {
        imageSrc: '/images/image1.png',
        text: 'Goals',
    },
    {
        imageSrc: '/images/image2.png',
        text: 'Popular Dishes',
    },
    {
        imageSrc: '/images/image3.png',
        text: 'Menus',
    },
]

const ListCard = () => {
    return (
        <div className="list-card bg-dark text-light">
            {items.map((item, index) => (
                <div key={index} className="list-item">
                    <img src={item.imageSrc} alt="Item" className="list-item-image" />
                    <span className="list-item-text">{item.text}</span>
                    <img src={'/images/arrow1.png'} alt="Item" className="list-item-image" />
                </div>
            ))}
        </div>
    );
};

export default ListCard;
