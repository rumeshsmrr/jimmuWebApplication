import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons
import Card from '../BlogCard/BlogCard';
import './Blogs.css';
import img1 from '../../assets/images/123img.png';
import img2 from '../../assets/images/124img.jpg';
import img3 from '../../assets/images/125img.jpg';
import img4 from '../../assets/images/126img.jpeg';
import img5 from '../../assets/images/126img.jpg';
import { i } from 'framer-motion/client';
const Blogs = () => {
  const cardsData =
    
  [
    {
      "imageUrl": `${img1}`,
      "title": "How Warranty Documents Protect High Net Worth Assets in Divorce",
      "date": "10 October 2024",
      "content": "Divorce can be particularly challenging for High Net Worth individuals due to the complexity of dividing assets. Warranty documents play a crucial role in protecting key financial interests during this process. This article explores how warranty agreements, which ensure a third party will repay debts, can safeguard valuable investments such as real estate, businesses, and luxury goods.\n\nWe'll also cover how effective use of warranty clauses can prevent asset manipulation or hidden liabilities during divorce settlements. For HNW individuals, ensuring that all assets are protected by robust warranties can be vital in preserving wealth through a divorce."
    },
    {
      "imageUrl":  `${img2}`,
      "title": "Quick Credit Solutions During Divorce: Securing Immediate Liquidity",
      "date": "20 October 2024",
      "content": "Divorces often come with unexpected financial needs, especially for High Net Worth individuals dealing with asset division, legal fees, or urgent liquidity requirements. Quick credit services offer immediate access to funds, allowing individuals to manage high-stakes financial challenges without waiting for the lengthy approval processes of traditional loans.\n\nThis article discusses how quick credit can bridge financial gaps during divorce proceedings, providing necessary liquidity to cover legal costs or maintain financial stability. We also explore the importance of negotiating favorable terms to ensure that quick credit services support your long-term financial health post-divorce."
    },
    {
      "imageUrl": "https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Creating Deposits to Preserve Wealth During a Divorce",
      "date": "30 October 2024",
      "content": "For High Net Worth individuals going through a divorce, preserving wealth is a top priority. Creating deposits can be an effective way to safeguard financial assets during asset division, ensuring that funds are protected while earning interest over time. This article explores how structured deposits can offer financial stability throughout the divorce process.\n\nWe examine how to use deposit accounts to store liquid capital safely, allowing for flexibility during asset division negotiations. Additionally, we discuss how interest-bearing deposits can help maintain financial growth, providing a secure cushion while other assets are restructured or divided."
    },
    {
      "imageUrl": `${img5}`,
      "title": "Warranty Documents in High Net Worth Divorces: Safeguarding Hidden Assets",
      "date": "10 November 2024",
      "content": "One of the most challenging aspects of a High Net Worth divorce is ensuring that all assets are disclosed and protected. Warranty documents play a pivotal role in safeguarding assets that could otherwise be hidden or undervalued. This article explains how these agreements serve as a financial safety net, ensuring debts and assets are accounted for.\n\nWe explore how HNW individuals can use warranties in divorce proceedings to verify asset ownership and prevent hidden liabilities. For those going through a contentious divorce, ensuring warranty coverage is thorough can be a key factor in protecting wealth and securing a fair settlement."
    },
    {
      "imageUrl": `${img4}`,
      "title": "The Role of Quick Credit in Funding Divorce Litigation for HNW Individuals",
      "date": "20 November 2024",
      "content": "Divorce litigation can be both lengthy and expensive, especially for High Net Worth individuals. Quick credit services offer a viable solution for those needing immediate funds to cover legal fees, expert consultations, and other high costs associated with complex divorce cases.\n\nThis article explores how quick credit can help maintain financial fluidity during a divorce, allowing individuals to meet urgent financial demands without draining other critical assets. We'll also highlight strategies for securing the best terms, minimizing interest rates, and managing repayment plans post-divorce to ensure that borrowing doesn’t undermine long-term financial stability."
    },
    {
        "imageUrl": `${img3}`,
        "title": "Ensuring Secure Transactions During High Net Worth Divorce Investigations",
        "date": "10 December 2024",
        "content": "For High Net Worth (HNW) individuals, securing financial transactions during divorce proceedings is of paramount importance. The complexity and high stakes involved in these transactions make it essential to implement robust security measures to prevent fraud, data breaches, and unauthorized access. This article explores how the organization ensures secure transactions during divorce investigations, safeguarding sensitive financial data and large assets from potential risks.\n\n### Why Secure Transactions Matter in Divorce Cases\nDivorces, especially for HNW individuals, often involve significant financial transfers, including asset liquidation, property settlements, and business interests. Any breach in transaction security can lead to financial loss, exposure of sensitive data, or complications in asset division. Ensuring that all transactions—whether related to settlements, payments, or investments—are secure is critical to protecting wealth during divorce proceedings.\n\n### How the Organization Guarantees Transaction Security\nThe organization specializes in safeguarding financial transactions during complex divorce investigations. Here are the key methods employed to ensure secure and confidential financial dealings:\n\n1. **Advanced Encryption Technologies:** All digital transactions are protected using cutting-edge encryption protocols. This prevents unauthorized access to financial data, ensuring that sensitive information about assets, bank accounts, and investments remains confidential throughout the divorce process.\n\n2. **Blockchain for Transaction Transparency:** For large transactions, such as property transfers or investment liquidation, blockchain technology can be implemented to create an immutable record of every financial movement. This ensures that every step of the transaction is transparent and verifiable, minimizing the risk of tampering or fraud.\n\n3. **Two-Factor Authentication:** To provide an additional layer of security, all transactions require two-factor authentication. This prevents unauthorized access to accounts, even if login credentials are compromised. Both parties in the divorce can have confidence that their financial transactions are conducted securely.\n\n4. **Private Ledgers and Secure Payment Platforms:** By utilizing secure, private financial ledgers and trusted payment platforms, the organization ensures that all financial transfers are conducted in a highly controlled environment. This eliminates the risk of hacking, unauthorized withdrawals, or tampering with sensitive payment information.\n\n### Why Secure Transactions Are Essential for HNW Divorce Investigations\nFor High Net Worth individuals, divorce investigations often uncover hidden assets, offshore accounts, and other financial complexities. Protecting the financial information discovered during these investigations is crucial to ensuring a fair and secure outcome. The organization’s commitment to secure transactions minimizes the risk of cyberattacks, fraud, or unauthorized financial activity, providing peace of mind during a stressful and high-stakes divorce process.\n\n### Final Thoughts\nIn today’s digital age, secure financial transactions are non-negotiable—especially in the context of High Net Worth divorces, where the stakes are high, and the risks are significant. By partnering with the organization, clients can ensure that their financial transactions are conducted safely and confidentially, protecting their wealth and personal data throughout the divorce process."
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
