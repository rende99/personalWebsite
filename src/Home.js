import React, {Component} from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import scrollToComponent from 'react-scroll-to-component';
import './Home.scss'
import AOS from 'aos'
import 'aos/dist/aos.css';
import ProjectCard from './components/projectCard'
import KnowledgeCard from './components/knowledgeCard'
import AwardCard from './components/awardCard'

const titles = ["Developer", "Student", "Programmer", "Designer", "Data Scientist"];
const technologies = ["React", "iOS development", "web development", "HTML/CSS", "Java", "C++", "Javascript", "Python", "Bootstrap", "jQuery", "R"]


class Home extends Component {
    constructor(props) {
        super(props)
		this.state ={
            data: null,
            sidebarHover: false,
            bottombarHover: false
        }
        this.showEmail = this.showEmail.bind(this);
        this.hideEmail = this.hideEmail.bind(this);
        this.showBottomEmail = this.showBottomEmail.bind(this);
        this.hideBottomEmail = this.hideBottomEmail.bind(this);
    }
    
    componentDidMount() {
        AOS.init()
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    showEmail(){
        this.setState( {sidebarHover: true})
    }

    hideEmail(){
        this.setState( {sidebarHover: false})
    }

    showBottomEmail(){
        this.setState( {bottombarHover: true})
    }

    hideBottomEmail(){
        this.setState( {bottombarHover: false})
    }
    
    render(){

        const Title = () => {
            return(
                <div className="animatedWord">
                    <TypistLoop interval={0}>
                        {titles.map(text => 
                        <Typist key={text} startDelay={50}>
                            <span>{text}</span>
                            <Typist.Backspace count={15} delay={2000} />
                        </Typist>)}
                    </TypistLoop>
                </div>
            );
        }
        const Technology = () => {
            return(
                <div className="animatedWord">
                    <TypistLoop interval={0}>
                        {technologies.map(text => 
                        <Typist key={text} startDelay={50}>
                            <span>{text}</span>
                            <Typist.Backspace count={15} delay={2000} />
                        </Typist>)}
                    </TypistLoop>
                </div>
            );
        }
        return ( 
            <div className="dummy">
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="sidebar">

                    <a href="https://github.com/rende99" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="iconClass" icon={faGithub} size="2x" color="white" data-aos="fly-down" data-aos-duration="800"/>
                    </a>
                    <a href="https://www.linkedin.com/in/rende99/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="iconClass" icon={faLinkedin} size="2x" color="white" data-aos="fly-down" data-aos-duration="800"/>
                    </a>
                    <div className="popoverDiv bp3-dark">
                        {this.state.sidebarHover &&
                            <h4 className="popover">rende99@gmail.com</h4>                
                        }
                        <a href="mailto:rende99@gmail.com" target="_blank" rel="noopener noreferrer" onMouseEnter={this.showEmail} onMouseLeave={this.hideEmail}>
                            <FontAwesomeIcon className="iconClass" icon={faEnvelope} size="2x" color="white" data-aos="fly-down" data-aos-duration="800"/>
                        </a> 
                    </div>

                </div>
                <div className="sectionOne">
                    <div className="First">
                        <h1 className="bp3-heading bp3-dark"><b>Jerrett Rende</b></h1>
                        <h2 className="bp3-heading bp3-dark inlineElement"> is a {Title()} with experience in {Technology()}</h2>
                    </div>
                </div>
                
                <div className="row">
                    <div className="column"  onClick={() => scrollToComponent(this.Work, { offset: 0, align: 'middle', duration: 1000})}>
                        <h3 className="bp3-heading bp3-dark">Work</h3>
                    </div>
                    <div className="column"  onClick={() => scrollToComponent(this.Skills, { offset: 200, align: 'middle', duration: 1000})}>
                        <h3 className="bp3-heading bp3-dark">Skills</h3>
                    </div>
                    <div className="column"  onClick={() => scrollToComponent(this.Accolades, { offset: 200, align: 'middle', duration: 1000})}>
                        <h3 className="bp3-heading bp3-dark">Accolades</h3>
                    </div>
                    <div className="column" onClick={() => scrollToComponent(this.Connect, { offset: 0, align: 'middle', duration: 1000})}>
                        <h3 className="bp3-heading bp3-dark">Connect</h3>
                    </div>
                </div>
                <div className="chevron">
                    <FontAwesomeIcon className="chevronIcon" icon={faChevronDown} size="1x"/>
                </div>
                <div className="sectionTwo" ref={(section) => { this.Work = section; }} data-aos="fade-up" data-aos-duration="800">
                    <h1 className="bp3-heading bp3-dark">Work <span role="img" aria-label="briefcase">💼</span></h1>
                </div>
                <div className="rowTwo">
                    <ProjectCard name="The Bounty" date="June 2020" imgName="bounty4.png" brief="The Bounty was created as a way to increase the competition level within the online speedrunning community. Visitors to the website can add to a pool of money that is delivered to the fastest speedrunner of a game at the end of a 10-day period. Users may also explore current livestreams, past winners, and vote for the next bounty's game/category. MongoDB and Node.js/Express were used to store data and create a solid backend. For the frontend, React and Blueprint JS were used to create a clean and user-friendly experience." 
                        technologies={["React", "HTML/CSS", "Node.js/Express", "MongoDB", "Blueprint JS", "Twitch API", "Paypal API"] } images={['./img/bounty1.png', './img/bounty2.png', './img/bounty3.png', './img/bounty4.png']}
                    />
                    <ProjectCard name="Playlist Sync" date="May 2020" imgName="playlistSyncLogo-01.png" brief="Playlist Sync is a solution for consolidating music across all major streaming platforms into a single cohesive playlist. Instead of having to jump between Spotify, Apple Music, Soundcloud, and Youtube to listen to favorite songs, users can listen to music with a single web player. Relying on MongoDB and Node.js/Express, users can create accounts and playlists. React, in combination with Blueprint JS, was used to create a responsive and intuitive frontend experience." 
                        technologies={["React", "HTML/CSS", "Node.js/Express", "MongoDB", "Blueprint JS", "Various APIs"] } images={['./img/ps2.png', './img/ps3.png', './img/ps4.png', './img/playlistSyncLogo-01.png']}
                    />
                    <ProjectCard name="Vibe Check" date="January 2020" imgName="vibeCheckM.png" brief="Vibe Check is a crowd-sourced, fair solution to analyzing the biases across news media. Instead of deeming any one news source 'unbiased', users can create an account with their demographic information and vote on the level of bias in random articles distributed each day. Users may also search for past articles that have been rated, and see how certain demographics felt about that article. Firebase was used to store user data, while Bootstrap, Javascript, and jQuery created a pleasant UI/UX." 
                        technologies={["Javascript", "jQuery", "Bootstrap", "HTML/CSS", "Firebase", "News APIs"]} images={['./img/vc1.png', './img/vc2.png', './img/vc3.png', './img/vibeCheckM.png']}
                    />
                    <ProjectCard name="Campus!" date="December 2019" imgName="campus1.png" brief="This project was motivated by an idea to create a social media platform exclusively used by and run by students of colleges and universities around the country. Once registered, posts are made and attributed to universities, not individuals. University 'rankings' based on the number of total likes a school has received create a national leaderboard. Firebase was used to store this information as well as each post's metadata, while UIKit and Swift created a fast, intuitive and responsive UI." 
                        technologies={["iOS Development", "Swift", "Social Media Development", "Firebase"]} images={['./img/c1.png', './img/c3.png', './img/c4.png', './img/c2.png', './img/campus1.png']}
                    />
                    <ProjectCard name="2048 Redux" date="October 2019" imgName="2048r1.png" brief="As a first foray into web development, I created a clone of the popular online puzzle game '2048' from scratch using a combination of jQuery, Javascript, and the Bootstrap CSS Framework." 
                        technologies={["Javascript", "HTML/CSS", "jQuery", "Bootstrap"]} images={['./img/2048r2.png', './img/2048r3.png', './img/2048r1.png']}
                    />
                </div>
                <div className="extra" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="-100">
                    <h6 className="bp3-heading bp3-dark">For more projects: </h6>
                    <a href="https://github.com/rende99" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="iconClass" icon={faGithub} size="3x" color="white"/>
                    </a>
                </div>

                <div className="sectionTwo" ref={(section) => { this.Skills = section; }} data-aos="fade-up" data-aos-duration="800"  data-aos-offset="200">
                    <h1 className="bp3-heading bp3-dark">Skills <span role="img" aria-label="muscle">💪🏼</span></h1>
                </div>
                <div className="parentResDiv" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300">
                    <KnowledgeCard list={['HTML','CSS','Javascript', 'Python', 'Java', 'Swift', 'C++', 'R']} header="Programming" />
                    <KnowledgeCard list={['Node.js','Express', 'React', 'jQuery', 'Docker', 'MongoDB', 'Firebase', 'Bootstrap', 'Blueprint JS']} header="Frameworks/Libraries/Platforms" />
                    <KnowledgeCard list={['RStudio','Git','Photoshop', 'Illustrator', 'Excel', 'Blender']} header="Software" />
                </div>
                <div className="extra" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="-100">
                    <h6 className="bp3-heading bp3-dark">Here's my resume, for more information: </h6>
                    <a href="rende_resume_F20.pdf" target="_blank">
                        <FontAwesomeIcon className="iconClass" icon={faFilePdf} size="3x" color="white"/>
                    </a>
                </div>
                
                <div className="sectionTwo" ref={(section) => { this.Accolades = section; }} data-aos="fade-up" data-aos-duration="800" data-aos-offset="200">
                    <h1 className="bp3-heading bp3-dark">Accolades <span role="img" aria-label="party">🎉</span></h1>
                </div>
                <div className="dummy2">
                    <div className="confettiWrapper" data-aos="fade-in" data-aos-duration="800" data-aos-offset="300">
                        <div className="confetti-0"></div>
                        <div className="confetti-1"></div>
                        <div className="confetti-2"></div>
                        <div className="confetti-3"></div>
                        <div className="confetti-4"></div>
                        <div className="confetti-5"></div>
                        <div className="confetti-6"></div>
                        <div className="confetti-7"></div>
                        <div className="confetti-8"></div>
                        <div className="confetti-9"></div>
                        <div className="confetti-10"></div>
                        <div className="confetti-11"></div>
                        <div className="confetti-12"></div>
                        <div className="confetti-13"></div>
                        <div className="confetti-14"></div>
                        <div className="confetti-15"></div>
                        <div className="confetti-16"></div>
                        <div className="confetti-17"></div>
                        <div className="confetti-18"></div>
                        <div className="confetti-19"></div>
                        <div className="confetti-20"></div>
                        <div className="confetti-21"></div>
                        <div className="confetti-22"></div>
                        <div className="confetti-23"></div>
                        <div className="confetti-24"></div>
                        <div className="confetti-25"></div>
                        <div className="confetti-26"></div>
                        <div className="confetti-27"></div>
                        <div className="confetti-28"></div>
                        <div className="confetti-29"></div>
                        <div className="confetti-30"></div>
                        <div className="confetti-31"></div>
                        <div className="confetti-32"></div>
                        <div className="confetti-33"></div>
                        <div className="confetti-34"></div>
                        <div className="confetti-35"></div>
                        <div className="confetti-36"></div>
                        <div className="confetti-37"></div>
                        <div className="confetti-38"></div>
                        <div className="confetti-39"></div>
                        <div className="confetti-40"></div>
                        <div className="confetti-41"></div>
                        <div className="confetti-42"></div>
                        <div className="confetti-43"></div>
                        <div className="confetti-44"></div>
                        <div className="confetti-45"></div>
                    </div>                
                </div>
                <div className="accoladesCase bp3-dark" data-aos="fade-up" data-aos-duration="800" data-aos-offset="300">
                    <AwardCard name="Phi Beta Kappa" date="2020" desc="Inducted into the national Phi Beta Kappa honor society"/>
                    <AwardCard name="Web Dev Expo Honorable Mention" date="2019" desc="Awarded honorable mention for Vibe Check, an end-of-year project for a web development course"/>
                    <AwardCard name="Dean's List" date="2017-2020" desc="Named on the Dean's List at the University of North Carolina Chapel Hill 5 times"/>
                    <AwardCard name="National Chinese Honor Society" date="2017" desc="Inducted into the National Chinese Honor Society"/>
                    <AwardCard name="National Merit Scholar Semifinalist" date="2016" desc="Awarded title of National Merit Scholar Semifinalist"/>
                </div>
                <div className="sectionTwo" ref={(section) => { this.Connect = section; }}>
                    <h1 className="bp3-heading bp3-dark">Connect <span role="img" aria-label="mailbox">📬</span></h1>
                </div>
                <div className="connectDiv" data-aos="fade-right" data-aos-duration="800" data-aos-offset="100">
                    <div className="topLine">
                        <div className="returnAddress">
                            <p className="returnText">Jerrett Rende</p>
                            <p className="returnText">rende99@gmail.com</p>
                            <p className="returnText">Westport, CT 06880</p>
                        </div>
                        <div className="stamp">
                            <img className="stampImage" src="./img/jerr3.jpg" alt="me"></img>
                        </div>
                    </div>
                    <div className="middleLine">
                        <hr></hr>
                        <a href="https://github.com/rende99" target="_blank" rel="noopener noreferrer">
                            <div className="iconDiv">
                                <FontAwesomeIcon className="iconClass" icon={faGithub} size="4x" color="black"/>
                                <p className="iconCaption">Github</p>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/rende99/" target="_blank" rel="noopener noreferrer">
                            <div className="iconDiv">
                                <FontAwesomeIcon className="iconClass" icon={faLinkedin} size="4x" color="black"/>
                                <p className="iconCaption">LinkedIn</p>
                            </div>
                        </a>
                        <a href="mailto:rende99@gmail.com" target="_blank" rel="noopener noreferrer">
                            <div className="iconDiv" onMouseEnter={this.showBottomEmail} onMouseLeave={this.hideBottomEmail}>
                                {this.state.bottombarHover &&
                                    <h4 className="popoverBottom">rende99@gmail.com</h4>
                                }
                                <FontAwesomeIcon className="iconClass" icon={faEnvelope} size="4x" color="black"/>
                                <p className="iconCaption">Email</p>
                            </div>
                        </a>
                        <hr></hr>
                    </div>

                </div>
                <div className="footer bp3-dark">
                    <h6>@2020 Jerrett Rende</h6>
                </div>
            </div>

        );
    }
}

export default Home;