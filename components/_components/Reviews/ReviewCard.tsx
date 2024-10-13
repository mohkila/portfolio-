import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  review: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  };
};

const ReviewCard = ({ review }: Props) => {
  const { name, review: clientReview, rating, profession, image } = review;
  return (
    <div className="roundeed-md overflow-hidden bg-blue-800   m-4">
      <div className="p-6  ">
        <Image src="/images/q.png" alt={name} width={50} height={50} />
        <p className="text-white text-opacity-75"> {clientReview}</p>
        <Image
          src="/images/q.png"
          alt={name}
          width={50}
          height={50}
          className="ml-auto"
        />
      </div>
      <div
        className="px-6 py-3 mb-3 w-fit mx-auto
           flex items-center space-x-3 bg-blue-700 text-white 
           font-bold rounded-full
      "
      >
        <span>{rating}/5</span>
        <FaStar className="text-yellow-400" />
      </div>
      <div className="bg-gray-800">
        <div className="p-6  flex   space-x-6 items-center  ">
          <div>
            <Image
              src={image}
              alt={name}
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold">{name}</h1>
            <p className="text-base">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
