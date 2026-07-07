"use client";

import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import presentationData from './presentationData.json';
import styles from './presentation.module.css';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function PresentationPage() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNext = () => {
    if (currentSlideIndex < presentationData.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const currentSlide = presentationData[currentSlideIndex];
  
  // Extracting slide content
  const title = currentSlide.texts.length > 0 ? currentSlide.texts[0] : "";
  const bodyTexts = currentSlide.texts.slice(1);
  const images = currentSlide.images || [];
  const tables = currentSlide.tables || [];

  const isThankYouSlide = title.toUpperCase() === "THANK YOU";

  return (
    <div className={`${styles.container} ${inter.variable}`}>
      <div className={styles.presentationBoard}>
        <div className={`${styles.slide} ${isThankYouSlide ? styles.thankYouSlide : ''}`}>
          
          {isThankYouSlide ? (
            <h1 className={styles.thankYouTitle}>{title}</h1>
          ) : (
            <>
              {title && <h1 className={styles.title}>{title}</h1>}
              
              <div className={styles.contentRow}>
                {/* Text Content Column */}
                <div className={styles.textContent}>
                  {bodyTexts.map((text, i) => (
                    <p key={i} style={{ marginBottom: '1rem' }}>{text}</p>
                  ))}
                  
                  {/* Tables rendering */}
                  {tables.map((table, tIndex) => (
                    <div key={tIndex} className={styles.tableContainer}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            {table[0].map((header: string, hIndex: number) => (
                              <th key={hIndex}>{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {table.slice(1).map((row: string[], rIndex: number) => (
                            <tr key={rIndex}>
                              {row.map((cell: string, cIndex: number) => (
                                <td key={cIndex}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>

                {/* Media Content Column (Images) */}
                {images.length > 0 && (
                  <div className={styles.mediaContent}>
                    {images.map((img, i) => (
                      <div key={i} style={{ position: 'relative', width: '100%', height: images.length > 1 ? '250px' : '400px' }}>
                        <Image 
                          src={`/presentation_images/${img}`} 
                          alt={`Slide ${currentSlide.slide_number} Image ${i + 1}`}
                          fill
                          className={styles.image}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <div className={styles.controls}>
        <button 
          className={styles.btn} 
          onClick={handlePrev} 
          disabled={currentSlideIndex === 0}
        >
          <ChevronLeft size={20} /> Previous
        </button>
        <span className={styles.slideIndicator}>
          Slide {currentSlide.slide_number} of {presentationData.length}
        </span>
        <button 
          className={styles.btn} 
          onClick={handleNext} 
          disabled={currentSlideIndex === presentationData.length - 1}
        >
          Next <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
