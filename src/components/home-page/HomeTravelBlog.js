import React from "react";
import TravelBlogCard from "./TravelBlogCard";

const blogPosts = [
  {
    title: "24 Best Things to Do in Rome",
    category: "CHOICES TO STAY",
    date: "9/20/2024",
    imageUrl:
      "https://cdn.worldota.net/t/x220/blog/50/70/50706192884466e85a0b37d443ca011902ebdbb3.PNG",
    link: "/blog/things-to-do-in-rome",
  },
  {
    title: "24 Best Things to Do in Rome",
    category: "CHOICES TO STAY",
    date: "9/20/2024",
    imageUrl:
      "	https://cdn.worldota.net/t/x220/blog/fd/d2/fdd26c7e992c673f74bd3194d4959c6f06641997.PNG",
    link: "/blog/things-to-do-in-rome",
  },
  {
    title: "24 Best Things to Do in Rome",
    category: "CHOICES TO STAY",
    date: "9/20/2024",
    imageUrl:
      "	https://cdn.worldota.net/t/x220/blog/fd/d2/fdd26c7e992c673f74bd3194d4959c6f06641997.PNG",
    link: "/blog/things-to-do-in-rome",
  },
];

const HomeTravelBlog = () => {
  return (
    <>
      <div className="container mx-auto pt-0 pb-8">
        <a
          href="#"
          className="de text-2xl font-medium text-start my-8 text-[var(--link)]"
        >
          Travel blog
        </a>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {blogPosts.map((post, index) => (
            <TravelBlogCard key={index} {...post} />
          ))}
        </div>
      </div>
      <hr />
    </>
  );
};

export default HomeTravelBlog;
