import React from 'react';
import { Link } from 'react-router-dom';
import InstagramMedia from '../components/InstagramMedia';

const AboutPage = () => {
  return (
    <div className="container">
      <div>
        <h1 className="h3">James Oquendo</h1>
        <p>I believe that being a web programmer is not just a job, but a passion. That's why I'm always looking for new opportunities to learn and stay up-to-date with the latest technology stacks available. It's fascinating to see how rapidly technology evolves, and I'm excited to be a part of this ever-changing industry. I've been programming for over 15 years now, and I'm constantly striving to improve my skills and tackle new challenges.</p>
        <p>Growing up in Los Angeles, I was surrounded by a diverse range of cultures and experiences, which I believe has helped shape my perspective and approach to web development. From a young age, I had a keen interest in technology, and I was always fascinated by how it worked. This led me to pursue a degree in Interactive Media Design, where I learned to be a full-stack engineer.</p>
        <p>Working at Disney and multimedia studios was an incredible experience that gave me the opportunity to work on some exciting projects with talented individuals. These real-world jobs have helped me become a professional in web development, and I'm grateful for the lessons I've learned from these experiences.</p>
        <p>When I'm not coding, I enjoy spending time pursuing my other passions, such as cooking, baking, making scents, soap bars, lotion bars, and reading. I find that these activities help me relax and recharge my batteries, allowing me to return to my work with a fresh perspective. I also enjoy taking my significant other on trips around the world, experiencing different cultures and cuisines. When I'm not exploring new places, you can find me snowboarding in the mountains or scuba diving in the ocean.</p>
        <p>One of my core values is the pursuit of excellence in everything I do. I believe that precision and attention to detail are crucial in web development, and I always strive to do things to the best of my abilities. However, I also recognize that there's always room for improvement, and I value the process of learning and self-improvement.</p>
        <p><Link to="/projects">View my web projects</Link></p>
      </div> 
    </div>
  );
}
 
export default AboutPage;