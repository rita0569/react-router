import { useState } from "react";
const imgPathList = [
  "./images/homePageImage1.jpg",
  "./images/homePageImage2.jpg"
];
export const Home = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [imgPath, setImgPath] = useState(imgPathList[0]);
  const onClickImg = () => {
    let index = imgIndex;
    if (index >= imgPathList.length - 1) index = 0;
    else index++;
    console.log(index);
    setImgPath(imgPathList[index]);
    console.log(imgPath);
    setImgIndex(index);
  };
  return (
    <div>
      <h1>Homeです。</h1>
      <h3>下の画像をクリックすると、画像が変化します。</h3>
      <img src={imgPath} alt="homePageImage" onClick={onClickImg}></img>
    </div>
  );
};
