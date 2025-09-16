import logo from './jordan React.jpeg';
import './Blog.css';
import React from 'react';
const Blog = () => {
  // Static blog details
  const title = " Welcome to React.JS Library";
  const author = <i>"JORDAN WALKE"</i>
  const description = "React.js is a powerful and widely-used JavaScript library developed by Facebook, designed specifically for building fast, interactive, and dynamic user interfaces for web applications by allowing developers to create reusable UI components and efficiently manage the application's state and rendering process.";

  const image = "https://via.placeholder.com/150";

  // Inline styles
  const containerStyle = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#ffcc00fc',
    maxWidth: '500px',
    margin: '10px auto',
    fontFamily: 'Arial, sans-serif'
  };

  const titleStyle = {
    fontSize: '15px',
    fontWeight: 'Medium',
    color: '#010f0fff',
    marginBottom: '10px'
  };

  const authorStyle = {
    fontSize: '16px',
    fontStyle: 'italic',
    color: '#8d9192ff',
    marginBottom: '15px'
  };

  const descriptionStyle = {
    fontSize: '16px',
    color: '#0e3b45ff',
    lineHeight: '1.6'
  };

  return (
    <div style={containerStyle} className="blog-container">
      <h1 style={titleStyle}>{title}</h1>
      <p style={authorStyle}>By {author}</p>
      <img src={logo} alt="Blog" className="blog-image" />
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
}

export default Blog;