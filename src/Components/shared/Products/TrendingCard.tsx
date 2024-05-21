import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
import { Electronics} from "@/types";
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const TrendingCard = ({trending}:{trending:Electronics}) => {
  
  const words = `Trending Products`;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <TextGenerateEffect words={words} className="px-3 bg-[#f1f1f1]" />
      <figure>
        <Image
          src={trending.image}
          width={1000}
          height={1000}
          alt="trending image"
          className="rounded-xl h-64"
        />
      </figure>
      <div className="card-body">

        <h2 className="card-title">
          {trending.title}
        </h2>
        <p className="text-gray-500">
          {trending.description}
          <Link href={`/electronics/${trending._id}`} className="text-accent">
            Details
          </Link>
        </p>
        <div className="flex justify-between items-center mt-5">
          
            <span>{trending.brand}</span>
          </div>

          <div className="flex items-center">
            <AiFillLike className="text-accent text-xl" /> {trending.ratings}{" "}
            Likes
          </div>
        </div>
      </div>

  );
};

export default TrendingCard;
