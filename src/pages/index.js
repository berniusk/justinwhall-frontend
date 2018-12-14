import React from 'react';
import {Elastic, TimelineMax} from "gsap/all";
import Mountain from '../images/mtn.svg';
import Heart from '../images/heart.svg';

export default class Home extends React.Component {
  componentDidMount() {
    // Mountain animation
    const tl = new TimelineMax( {
      repeat: 0,
    } )

    const svg = document.querySelector( 'svg' )

    const scene1 = {
      wrapper: svg.querySelector( '.scene1' ),
      mask: svg.querySelector( '.scene1 .mask' ),
      ground: svg.querySelector( '.scene1 .ground' ),
      sky1: svg.querySelector( '.scene1 .sky1' ),
      sky2: svg.querySelector( '.scene1 .sky2' ),
      sky3: svg.querySelector( '.scene1 .sky3' ),
      tree1: svg.querySelector( '.scene1 .tree1' ),
      tree2: svg.querySelector( '.scene1 .tree2' ),
      tree3: svg.querySelector( '.scene1 .tree3' ),
      tree4: svg.querySelector( '.scene1 .tree4' ),
      tree5: svg.querySelector( '.scene1 .tree5' ),
      tree6: svg.querySelector( '.scene1 .tree6' ),
      tree7: svg.querySelector( '.scene1 .tree7' ),
      mountain: svg.querySelector( '.scene1 .mountain' ),
      mountain1: svg.querySelector( '.scene1 .mountain-left' ),
      mountain2: svg.querySelector( '.scene1 .mountain-right' )
    }

    setTimeout( () => {

      const mtn = document.querySelector( '.scene1' )
      mtn.style.opacity = 1;

      tl.from( scene1.mask, 1, {
        attr: {
          r: 0
        },
        ease: Elastic.easeOut.config( 1, 1 )
      } )

      tl.from( scene1.ground, 0.5, {
        autoAlpha: 0,
        attr: {
          y: '+=200'
        },
        transformOrigin: 'left center',
        ease: Power4.easeOut
      }, 0.1 )

      tl.staggerFrom( [ scene1.sky1, scene1.sky2, scene1.sky3 ], 0.5, {
        autoAlpha: 0,
        skewY: 0,
        attr: {
          y: '+=90'
        },
        transformOrigin: 'center bottom',
        ease: Elastic.easeOut.config( 1, 3 )
      }, 0.075, 0.25 )

      tl.staggerFrom( [ scene1.tree1, scene1.tree2, scene1.tree3, scene1.tree4, scene1.tree5, scene1.tree6, scene1.tree7 ], 0.5, {
        rotation: 45,
        scale: 0,
        transformOrigin: 'bottom center',
        ease: Back.easeOut.config( 2, 1.55 )
      }, 0.05, 0.4 )

      tl.staggerFrom( [ scene1.mountain ], 0.75, {
        y: '+=50',
        skewX: -200,
        scale: 0,
        transformOrigin: 'bottom center',
        ease: Back.easeOut.config( 1, .2 )
      }, 0.0125, 0.5 )


    }, 300 );

    setTimeout( () => {

      const heart = document.querySelector( '.heart' )
      heart.className += ' start'

    }, 1500 );
  }

  render() {
    return (
      <main>
        <div className="intro">
          <div className="hello">
            <div className="hi">Hello!</div>
            <div className="my-name">My name is Justin Windsor Hall</div>
          </div>

          <div className="secondary">I'm a Denver, CO based Web Developer</div>
          <div className="mountain">
            <Mountain />
          </div>
          <div className="heart">
            <div className="secondary code">Code</div>
            <Heart />
          </div>
          <div className="see-more">
            <svg className="arrow">
              <path className="a1" d="M0 0 L15 16 L30 0" />
            </svg>
          </div>
        </div>
      </main>
    )
  }
}
