import React from "react";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

const Blog = () => {
  const posts = [
    {
      image: "/assets/blog1.png",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: {
        image: "/assets/author1.png",
        name: "Olivia Rhye",
      },
    },
    {
      image: "/assets/blog2.png",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: {
        image: "/assets/author2.png",
        name: "Phoenix Baker",
      },
    },
    {
      image: "/assets/blog3.png",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: {
        image: "/assets/author3.png",
        name: "Lana Steiner",
      },
    },
  ];

  return (
    <div className="container py-5">
      <div className="d-flex align-items-center mb-4">
        <div className="text-start">
          <p className="red-text mb-0">Our blog</p>
          <h2 className="h3">Latest blog posts</h2>
          <p className="text-muted">
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <div className="ms-auto d-none d-md-inline">
            <a href="#" className="btn btn-red text-end">
            View all posts <ArrowRightIcon width={16} height={16} />
            </a>
        </div>
        
      </div>

      <div className="row g-4 text-start">
        {posts.map((post, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={post.image}
                className="card-img-top"
                alt={post.title}
              />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text text-muted">{post.description}</p>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="rounded-circle me-2"
                    width="32"
                    height="32"
                  />
                  <span className="text-muted">{post.author.name}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex d-md-none justify-content-center mt-4">
        <a href="#" className="btn btn-red d-flex align-items-center gap-2 w-100 justify-content-center">
          View all posts <ArrowRightIcon width={16} height={16} />
        </a>
      </div>
    </div>
  );
};

export default Blog;
