import car from './assets/car.jpg'
import offroad from './assets/offroad.jpg'
import race from './assets/race.jpg'
import mountain from './assets/mountain.png'
import moon from './assets/moon.png'
import stars from './assets/stars.jpg'
import cat1 from './assets/cat1.gif'
import cat2 from './assets/cat2.gif'
import cat3 from './assets/cat3.gif'
import cloud1 from './assets/cloud1.png'
import burn from './assets/burn.gif'
import rocket from './assets/rocket.gif'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
function App() {

  return (
    <div class="parallax-wrapper">
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 2 }}>
          <h1 className='title'>WELCOME TO <br></br> REACT SPRING PARALLAX</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <img src={stars} alt="" className='image-stars' />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.7}>
          <img src={moon} alt="" className='image-moon' />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8}>
          <img src={cat1} alt="" className='image-cat1' />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8}>
          <img src={cat2} alt="" className='image-cat2' />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <img src={mountain} alt="" className='image-mountain' />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.7} style={{ zIndex: 2 }}>
          <div className='cloud-wrapper'>
            <img src={cloud1} alt="" className='image-cloud1_1' />
            <img src={cloud1} alt="" className='image-cloud1_2' />
            <img src={cloud1} alt="" className='image-cloud1_3' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <img src={car} alt="" className='image-car' />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2} style={{ zIndex: 3 }}>
          <h1>IS THIS MY CAR?</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} style={{ zIndex: 3 }}>
          <div>
            <img src={cat3} alt="" className='image-cat3' />
            <img src={cat3} alt="" className='image-cat3' />
            <img src={cat3} alt="" className='image-cat3' />
            <img src={cat3} alt="" className='image-cat3' />
            <img src={cat3} alt="" className='image-cat3' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.75}>
          <img src={burn} alt="" className='image-burn' />
        </ParallaxLayer>
      </Parallax>
    </div>

  )
}

export default App
