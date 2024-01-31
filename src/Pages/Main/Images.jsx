import React, { useState, useRef } from 'react';

const ImageSlideshow = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef(null);

  const images = [
    '/gallery/1.jpg',
    '/gallery/2.jpg',
    '/gallery/3.jpg',
    '/gallery/1.jpg',
    '/gallery/2.jpg',
    '/gallery/3.jpg',
    '/gallery/1.jpg',
    '/gallery/2.jpg',
    '/gallery/3.jpg',
    '/gallery/1.jpg',
    '/gallery/2.jpg',
    '/gallery/3.jpg',
    '/gallery/1.jpg',
    '/gallery/2.jpg'
  ];

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setModalOpen(false);
  };

  const focusModal = () => {
    modalRef.current && modalRef.current.querySelector('.modal-content').focus();
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
    focusModal();
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
    focusModal();
  };

  return (
    <div>
      <div className="images-container">
        {images.map((imageSrc, index) => (
          <img
            key={index}
            src={imageSrc}
            alt=""
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {modalOpen && (
        <div className="modal-popup" ref={modalRef} tabIndex="-1">
          <span className="close" onClick={closeModal}>&times;</span>
          <span className="next" onClick={goToPrevious}>&lt;</span>
          <div className="modal-content">
            <img id="modalImage" src={selectedImage} alt="" />
          </div>
          <span className="next" onClick={goToNext}>&gt;</span>
        </div>
      )}
    </div>
  );
};

export default ImageSlideshow;
