import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export const links = [
  {
    id: 1,
    text: "主页",
    url: "/",
  },
  {
    id: 2,
    text: "关于",
    url: "/about",
  },
  {
    id: 3,
    text: "产品",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "筑星全屋设计",
    text: "筑星全屋设计 | 专业服务，为您打造理想的家。",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "筑星对公业务",
    text: "筑星对公业务 | 专业设计，批量采购。",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "厨房设计服务",
    text: "筑星厨房 | 专业设计，打造梦想厨房。",
  },
];



export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`

