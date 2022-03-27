import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
           <div className="qs-container">
                <h3>State vs Props react</h3>
State are mutable but props are immutable. We can define states in the component itself. On the other hand we can pass properties from parent components.The state is set and updated by the object.It can only be accessed or modified inside the component or by the component directly.Props are immutable so we cannot modify the props from inside the component.Props determine the view upon creation, and then they remain static. Both are accessible as attributes of the component class and compose components with a different representation.
         
           </div>
           <div className="qs-container">
                <h3>How React Work?</h3>
                
We know that React is a JavaScript Library not a framework. It creates user interfaces in a predictable and efficient way using declarative code. You can use it to help build mobile apps or to build complex apps and also single page applications if you utilize it with other libraries. We use declarative code to create components, which is how we display information. Besides, components are reusable interface which allow you to split the app into separate blocks that act independently of each other. In React components are made of two main ingredients. These are State and props.
         
           </div>
           

            
        </div>
    );
};

export default Footer;