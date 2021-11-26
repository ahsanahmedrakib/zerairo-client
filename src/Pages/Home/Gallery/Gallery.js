import React from 'react';

const gallery = [
    {
        image: "https://i.ibb.co/ZxVN8gD/g5.jpg"
    },
    {
        image: "https://i.ibb.co/M6hd3Rm/g4.jpg"
    },
    {
        image: "https://i.ibb.co/w6p9MS6/g3.jpg"
    },
    {
        image: "https://i.ibb.co/W0vB112/g1.jpg"
    },
    {
        image: "https://i.ibb.co/fNPHYzq/g2.jpg"
    }
]

const Gallery = () => {
    return (
        <div>
            <div className="row d-flex g-0">
               {gallery.map(photo => <img key={photo.image} className="img-fluid" style={{width: '20%'}} src={photo.image} alt="" />)}
            </div>
        </div>
    );
};

export default Gallery;