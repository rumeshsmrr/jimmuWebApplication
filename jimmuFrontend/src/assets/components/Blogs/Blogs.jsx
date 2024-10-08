import React from 'react';
import Card from '../BlogCard/BlogCard';
import './Blogs.css';

const Blogs = () => {
    const cardsData = [
        {
            imageUrl: 'https://cdn-ilakfbp.nitrocdn.com/zmQWnCBXTeQDdKUMxRGmFnLIxVnmVhSl/assets/images/optimized/rev-512f52f/www.petrellilaw.com/wp-content/uploads/2022/09/divorce-1302600210.jpg',
            title: 'Navigating the World of Luxury Investments',
            date: '10 June 2024',
            excerpt: 'Discover how HNW individuals can strategically invest in luxury assets to build wealth and status.'
        },
        {
            imageUrl: 'https://images.pexels.com/photos/5700176/pexels-photo-5700176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'The Art of Building a Luxury Collection',
            date: '15 June 2024',
            excerpt: 'Learn how to curate a valuable collection of art that appreciates over time.'
        },
        {
            imageUrl: 'https://images.pexels.com/photos/5700176/pexels-photo-5700176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Cryptocurrency: The New Frontier for High Net Worth Investors',
            date: '20 June 2024',
            excerpt: 'Explore how cryptocurrencies are becoming a vital part of HNW investment portfolios.'
        },
        {
            imageUrl: 'https://images.pexels.com/photos/5700176/pexels-photo-5700176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Exclusive Travel Destinations for the Elite',
            date: '25 June 2024',
            excerpt: 'Discover the most exclusive travel experiences that cater to High Net Worth individuals.'
        },
        {
            imageUrl: 'https://xtratheme.com/elementor/app-3/wp-content/uploads/sites/118/2021/09/p10-800x500.jpg',
            title: 'Building Your Personal Brand as a HNW Individual',
            date: '30 June 2024',
            excerpt: 'Strategies for HNW individuals to enhance their personal brand and influence.'
        },
        {
            imageUrl: 'https://xtratheme.com/elementor/app-3/wp-content/uploads/sites/118/2021/09/p10-800x500.jpg',
            title: 'Wealth Management: Strategies for Success',
            date: '05 July 2024',
            excerpt: 'Effective wealth management strategies tailored for High Net Worth individuals.'
        },
    ];
    
  return (
    <div className="blogs-container">
      <h2>Blogs</h2>
      <div className="horizontal-scroller">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <Card
              imageUrl={card.imageUrl}
              title={card.title}
              author={card.author}
              date={card.date}
              excerpt={card.excerpt}
              articleUrl={card.articleUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
