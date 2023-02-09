import React, { useEffect, useState } from "react";
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Products() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      console.log(data);
      setPost(data?.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-y-8 gap-x-6 my-24  ">
      {post.map((image, i) => {
        return (
          <div key={i} className= "py-12 px-8 shadow-lg rounded-2xl border-1 ">
            <LazyLoadImage className="h-40 w-auto "
              alt={image.alt}
              effect= "blur"
              src={image.image}
               />
               <p className="font-semibold mt-2">{image.title}</p>
               <p className="font-semibold text-gray-500 mt-2">Price: {image.price}$</p>
               
          </div>
        );
      })}
    </div>
  );
}





export default Products;