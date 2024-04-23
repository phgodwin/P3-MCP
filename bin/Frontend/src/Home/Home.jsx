import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Login';
import { Card, ListGroup, ListGroupItem, Carousel } from 'react-bootstrap';

function Home() {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(!isLoggedIn);
    };

    return (
        <div className="container mt-4">
            {isLoggedIn ? (
                <div>
                    
                    <Carousel>
                        <Carousel.Item>
                            <h5>"LP's courses have revolutionized our studio's approach to music education, benefiting both instructors and students." </h5>
                            <p>Sarah, Music Director at XYZ Studios</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"LP's courses have upskilled our team and enhanced their musical knowledge, leading to improved performance."</h5>
                            <p>Michael, CEO of Acoustic Sounds Inc.</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"LP's engaging lessons have rejuvenated our music curriculum, inspiring students of all skill levels." </h5>
                            <p>Emma, Music Teacher at Harmony High School</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"LP's practical insights and industry tips have elevated my productions to new heights."</h5>
                            <p>David, Freelance Music Producer</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"LP's courses cover essential skills for success in the music industry, providing valuable support and encouragement."</h5>
                            <p>Alex, Aspiring Musician and Songwriter</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"LP's user-friendly courses have helped me expand my musical knowledge and pursue my passions."</h5>
                            <p>Jessica, Music Enthusiast and Hobbyist</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"LP's tutorials and exercises complement my university education, bridging theory and practical skills."</h5>
                            <p>Mark, Music Technology Student at ABC University</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h5>"LP's high-quality content keeps our team ahead of the curve in audio engineering and music production."</h5>
                            <p>Sophie, Owner of SoundScape Recording Studio</p>
                        </Carousel.Item>
                        
                        
                    </Carousel>

                  
                    <Card border="danger" border-10>
                        <Card.Body>
                            <Card.Title><h1>About Us: LP</h1></Card.Title>
                            <Card.Text>At LP, we believe that music has the power to transform lives. Whether you’re an aspiring artist, a seasoned musician, or simply someone who wants to explore the magic of melodies, our comprehensive music courses are designed to ignite your passion and elevate your skills.
                           
                            </Card.Text>
                            <Card.Text>
                            If you feel like we'd be the right fit for your business please call us today for further information on the courses we can offer!
                            </Card.Text>
                            <Card.Text>
                                <div className = "row">

                                <div className='col'>
                                        <h2>FAQs</h2>
                                        <b>Q1: Can beginners with no prior musical experience take lessons at LP?</b> 
                                        <br></br>
                                        Yes! LP warmly welcomes beginners. Our courses cater to all skill levels, providing personalized guidance from expert instructors. Whether you're starting from scratch or refining your skills, LP is the perfect place to begin your musical journey.
                                        <br></br>
                                        <b>Q2: What types of music courses does LP offer?</b>
                                        <br></br>
                                        LP offers diverse music courses covering genres like classical, jazz, rock, pop, and more. Our range includes instrument lessons (guitar, piano, drums, vocals), music theory, composition, performance techniques, and workshops on songwriting and music technology.
                                       <br></br>
                                        <b>Q3: Are there any age restrictions for enrolling in LP's music courses?</b>
                                        <br></br>
                                        No age limits! LP embraces learners of all ages. Whether you're a curious kid, a passionate teen, or an adventurous adult, our courses are tailored to accommodate diverse age groups. Join us and embark on a musical adventure regardless of your age!
                                     </div>
                                    <div className='col' style={{marginLeft: "100px"}}>
                                    <h2>Contact us</h2> 
                                
                               <h4> <b>Phone:</b>  01234567890</h4>
                               
                               <h4> <b>Email:</b> LearnMusic@LP.com </h4> 
                                
                                 <h4> <b>Instagram:</b>  @LPMusic </h4> 
                                 
                                 <h4> <b>Tiktok:</b> @LPMusic </h4> 
                                    </div>
                                     
                                     
                                </div>
                              
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                </div>
            ) : (
                <Card border="danger" border-3>
                    <Card.Body className="text-center">
                        <Card.Title><h1><b>REMINDER </b>to stay vigilant when logging in: </h1></Card.Title>
                        <ListGroup>
                            <ListGroupItem>Secure Your Surroundings: Be cautious of your environment and ensure privacy when logging in. Avoid public spaces for sensitive logins.</ListGroupItem>
                            <ListGroupItem>Check for Suspicious Activity: Before entering credentials, verify the authenticity of the website or platform. Report any unusual prompts or requests.</ListGroupItem>
                            <ListGroupItem>Protect Your Passwords: Avoid sharing passwords and update them regularly. Strong, unique passwords are your first line of defense.</ListGroupItem>
                            <ListGroupItem>Report Anomalies Promptly: If you notice anything unusual during the login process or suspect unauthorized access, report it immediately to our IT team.</ListGroupItem>
                        </ListGroup>
                        
                        <Login onLogin={handleLogin} />
                    </Card.Body>
                </Card>
            )}
            <br />
        </div>
    );
}

export default Home;
