import imgs from "../util/imgList.json";

export const randomImage = () => imgs[Math.floor(Math.random() * imgs.length)];
