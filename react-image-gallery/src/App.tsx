import { useState } from 'react';
import './App.css';
import AddImgFormComp from './components/AddImgFormComp';
import FooterComp from './components/FooterComp';
import GalleryComp from './components/GalleryComp';
import HeaderComp from './components/HeaderComp';
import { Image, Images } from './types';

function App() {
  const [images, setImages] = useState<Images>([
    {
      id: '001',
      title: 'beach',
      imgAlt: "beach view art",
      imgLink: 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000',
    }
  ])

  const handleRemoveImg = (imgId: string) => {
    setImages(current => current.filter(image => {
      return image.id !== imgId
    }))
  }

  const handleAddImg = (newImg: Image) => {
    setImages(prevImages => [
      ...prevImages,
      {
        id: newImg.id,
        title: newImg.title,
        imgAlt: newImg.imgAlt,
        imgLink: newImg.imgLink
      }
    ])
  }

  return (
    <div className="App">
      <HeaderComp />
      <AddImgFormComp handleAddImg={handleAddImg} />
      <GalleryComp images={images} handleRemoveImg={handleRemoveImg} />
      <FooterComp />
    </div>
  );
}

export default App;
