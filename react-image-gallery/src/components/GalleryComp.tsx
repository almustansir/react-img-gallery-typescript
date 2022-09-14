import * as React from 'react';
import { Images } from '../types';

interface IGalleryCompProps {
    images: Images,
    handleRemoveImg?: (title: string) => void
}

const GalleryComp: React.FunctionComponent<IGalleryCompProps> = ({ images, handleRemoveImg } : IGalleryCompProps) => {
  return(
    <div>
        { images.map(image => (
            <div key={image.id}>
                <h2>{image.title}</h2>
                <img src={image.imgLink} alt={image.imgAlt} />
                <button onClick={(e) => handleRemoveImg?.(image.id)}>Remove</button>
            </div>
        )) }
    </div>
  );
};

export default GalleryComp;
