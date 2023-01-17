import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>Techy</h1>
                    <p>Solution to all your Problems</p>

                </main>
            </div>

            <div className="home2" >
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your only solution to the tech Problems
                        you face
                        on regular basis.We are one of the leading tech company
                        whose aim
                        is to increase problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who are we? </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo itaque odit dolores, beatae officiis corrupti 
                        ad reprehenderit! Mollitia enim tempore dicta laudantium dolore corrupti, obcaecati itaque veniam culpa 
                        laborum dolores id at quo commodi! Numquam eum eligendi corrupti tenetur voluptate odit quo, explicabo 
                        placeat, atque, praesentium corporis perspiciatis asperiores quos voluptatem culpa minus aspernatur deleniti 
                        fugiat.</p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{animationDelay:"0.3s"}}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{animationDelay:"0.5s"}}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{animationDelay:"0.7s"}}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{animationDelay:"1s"}}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
