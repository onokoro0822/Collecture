'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';


const UploadBox = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // 画面リサイズ時にスクリーンサイズをチェックする
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 640);
    };
  
    window.addEventListener('resize', handleResize);
  
    // クリーンアップ時にリスナーを解除
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  // ボックスがクリックされたときにファイル選択をトリガー
  const handleBoxClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // ファイルが選択されたときに画像を読み込む
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result) {
          setSelectedImage(reader.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {selectedImage ? (
        <Image
          src={selectedImage}
          alt="アップロードされた画像"
          className="rounded-md shadow-md"
          style={{
            width: isSmallScreen ? '150px' : `calc(100% / 2 + 50px)`,
            height:"150px",
            objectFit: 'cover',
          }}
        />
      ) : (
        <div
          className="bg-blue-500 text-white flex items-center justify-center rounded-md shadow-md cursor-pointer"
          style={{
            width: isSmallScreen ? '150px' : "120px",
            height:isSmallScreen ? '150px' : "120px"
          }}
          onClick={handleBoxClick}
        >
          未取得
        </div>
      )}
      {/* 隠されたファイル入力フィールド */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default UploadBox;
