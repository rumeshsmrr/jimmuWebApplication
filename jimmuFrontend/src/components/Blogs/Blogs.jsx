import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons
import Card from '../BlogCard/BlogCard';
import './Blogs.css';
import img1 from '../../assets/images/imag1.png';
import img2 from '../../assets/images/imag2.jpg';
import img3 from '../../assets/images/img3.jpg';
const Blogs = () => {
  const cardsData =[
    {
        imageUrl: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Navigating High Net Worth Divorces: Key Considerations',
        date: '10 June 2024',
        content: 'Divorce can be particularly complex for High Net Worth (HNW) individuals due to the intricacies of asset division, financial management, and potential reputational impacts. This article outlines the critical factors to consider, including the importance of obtaining legal advice early. Engaging experienced legal counsel ensures that your interests are protected from the outset. \n\nPrenuptial agreements play a significant role in protecting assets, especially for those with considerable wealth. Understanding how these agreements are enforced in your jurisdiction can save you from lengthy disputes. Additionally, we discuss strategies for preserving wealth, such as separating personal and business assets. Lastly, we emphasize the significance of maintaining privacy throughout the divorce process to shield your reputation and personal life from unnecessary scrutiny.'
    },
    {
        imageUrl: `${img2}`,
        title: 'Understanding Asset Valuation in HNW Divorces',
        date: '15 June 2024',
        content: 'Determining the value of assets in a divorce can be a challenging process, especially for HNW individuals who may have complex portfolios that include multiple properties, investments, and businesses. This guide provides insights into how assets are appraised and the role of forensic accountants in uncovering hidden or undervalued assets. \n\nLearn about the importance of accurately assessing both tangible and intangible assets, from real estate and investments to intellectual property and business interests. Understanding market trends and enlisting professionals who specialize in high net worth divorces can help ensure a fair distribution of assets. This knowledge not only aids in negotiations but also helps you make informed decisions about your financial future post-divorce.'
    },
    {
        imageUrl: `${img3}`,
        title: 'Protecting Your Wealth: Legal Strategies for HNW Divorce',
        date: '20 June 2024',
        content: 'In the event of a divorce, HNW individuals need to implement robust legal strategies to protect their wealth effectively. This article delves into the various legal avenues available, such as mediation, collaborative divorce, and litigation, outlining the pros and cons of each approach. \n\nChoosing the right legal representation is crucial; look for attorneys who have experience with high net worth cases and understand the complexities involved. The role of financial advisors in formulating a comprehensive divorce strategy cannot be underestimated. They help navigate issues like tax implications and asset management during the divorce process. Additionally, we discuss the significance of maintaining documentation and transparency to build a solid case and negotiate effectively.'
    },
    {
        imageUrl: `${img1}`,
        title: 'Emotional Well-being During High Net Worth Divorces',
        date: '25 June 2024',
        content: 'Divorce is not only a financial upheaval but also an emotional one, particularly for HNW individuals who may be dealing with the public fallout of their separation. This guide explores strategies to manage emotional well-being during the divorce process, including the importance of therapy, support groups, and self-care. \n\nEmotional resilience can significantly impact the outcomes of divorce negotiations. We delve into practical steps to cope with stress and anxiety, such as maintaining a support network of friends and family, engaging in physical activity, and practicing mindfulness. Learn how to navigate the emotional landscape of divorce while prioritizing your mental health and ensuring that personal issues do not cloud financial decisions.'
    },
    {
        imageUrl: 'https://images.pexels.com/photos/6147232/pexels-photo-6147232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Child Custody and Support in HNW Divorces',
        date: '30 June 2024',
        content: 'Child custody arrangements can be particularly contentious in high net worth divorces, often involving significant financial considerations. This article examines the factors that influence custody decisions, including the child’s best interests, parental involvement, and the stability of each parent’s living situation. \n\nWe discuss the importance of creating a fair child support agreement that reflects the lifestyle the children are accustomed to, while also being mindful of financial realities. Additionally, we provide guidance on how to create a co-parenting plan that works for both parties, ensuring that your children’s emotional and physical needs are met while navigating the complexities of post-divorce life.'
    },
    {
        imageUrl: 'https://images.pexels.com/photos/1181358/pexels-photo-1181358.jpeg',
        title: 'Post-Divorce Financial Planning for HNW Individuals',
        date: '05 July 2024',
        content: 'After a divorce, High Net Worth individuals must reassess their financial strategies to ensure long-term stability and growth. This article provides actionable insights on how to rebuild wealth post-divorce, focusing on investment strategies, estate planning, and risk management. \n\nWe discuss the importance of consulting financial advisors to develop a comprehensive plan that addresses immediate needs, such as living expenses and child support, as well as future goals like retirement and legacy planning. Learn about advanced investment strategies that can help you navigate market fluctuations while preserving and growing your wealth. With proper planning and strategic thinking, you can not only recover from a divorce but also emerge financially stronger.'
    }
]

;

    // Function to scroll left
    const handleScrollLeft = () => {
        const scroller = document.querySelector('.horizontal-scroller');
        scroller.scrollBy({ left: -300, behavior: 'smooth' }); // Adjust the scroll distance as needed
    };

    // Function to scroll right
    const handleScrollRight = () => {
        const scroller = document.querySelector('.horizontal-scroller');
        scroller.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust the scroll distance as needed
    };

    return (
        <div className="blogs-container">
            <h2 className='text-[30px] mt-10 font-bold'>Blogs</h2>
            <div className="scroll-buttons">
                <button className="scroll-button" onClick={handleScrollLeft}>
                    <FaChevronLeft />
                </button>
                <button className="scroll-button" onClick={handleScrollRight}>
                    <FaChevronRight />
                </button>
            </div>
            <div className="horizontal-scroller">
                {cardsData.map((card, index) => (
                    <div className="card2" key={index}>
                        <Card
                            imageUrl={card.imageUrl}
                            title={card.title}
                            date={card.date}
                            excerpt={card.content}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
