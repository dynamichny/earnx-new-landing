import React, { Children, Component } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';
import Reasons from '../components/Reasons';
import Contact from '../components/Contact';
import * as THREE from 'three';

let SVGLoader, GUI;

class Home extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    const parent = document.querySelector('.home-page--hero-wrapper');
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      parent.clientWidth / 2 / parent.clientHeight,
      0.1,
      1000,
    );
    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(parent.clientWidth / 2, parent.clientHeight);
    parent.appendChild(renderer.domElement);

    SVGLoader = require('three/examples/jsm/loaders/SVGLoader').SVGLoader;
    var data = new SVGLoader().parse(icon);
    var paths = data.paths;
    const group = new THREE.Group();
    group.scale.multiplyScalar(0.7);
    group.position.x = 0;
    group.position.y = 0;

    camera.position.set(30, 40, 0);

    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const fillColor = path.userData.style.fill;
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setStyle(fillColor),
        opacity: path.userData.style.fillOpacity,
        transparent: path.userData.style.fillOpacity < 1,
        side: THREE.DoubleSide,
        depthWrite: false,
        wireframe: false,
      });

      const shapes = SVGLoader.createShapes(path);

      for (let j = 0; j < shapes.length; j++) {
        const shape = shapes[j];

        const geometry = new THREE.ShapeGeometry(shape);
        const mesh = new THREE.Mesh(geometry, material);

        group.add(mesh);
      }
    }
    // setting center of the group
    var box = new THREE.Box3().setFromObject(group);
    box.center(group.position);
    group.position.multiplyScalar(-1);
    var pivot = new THREE.Group();
    scene.add(pivot);
    pivot.add(group);
    pivot.position.set(30, 40, 0);

    const light1 = new THREE.PointLight(0x084ea6, 5, 100);
    light1.position.set(100, 5, 30);
    scene.add(light1);
    const light2 = new THREE.PointLight(0xf92fd6, 3, 100);
    light2.position.set(0, 40, 20);
    scene.add(light2);
    const light3 = new THREE.PointLight(0x804cfc, 3, 100);
    light3.position.set(10, 100, 50);
    scene.add(light3);
    const light4 = new THREE.PointLight(0x084ea6, 4, 100);
    light4.position.set(85, 90, 30);
    scene.add(light4);

    camera.position.z = 100;

    GUI = require('three/examples/jsm/libs/dat.gui.module').GUI;

    var animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    document.addEventListener('mousemove', (e) => {
      pivot.rotation.x = (window.innerHeight * 0.0004) / 2 - e.clientY * 0.0004;
      pivot.rotation.y = (window.innerWidth * 0.0004) / 2 - e.clientX * 0.0004;
    });
    window.addEventListener(
      'resize',
      (e) => {
        camera.aspect = parent.clientWidth / 2 / parent.clientHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(parent.clientWidth / 2, parent.clientHeight);
      },
      false,
    );
    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Head>
          <title>EarnX | Welcome!</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Layout>
          <div className='home-page--wrapper'>
            <div className='home-page--hero-wrapper'>
              <div className='home-page--hero-content-wrapper'>
                <h1>Built on the BSC network, EarnX is a deflationary frictionless token.</h1>
                <p>
                  We are among the first to merge NFT and DeFi. Built under the supervision of
                  experienced developers, EarnX is deflationary and based on the following
                  principles: scarcity, stability, and utility.
                </p>
                <Newsletter />
                <div className='home-page--hero-numbers-wrapper'>
                  <div className='home-page--hero-numbers__item'>
                    <span>6000+</span>
                    <span>Holders</span>
                  </div>

                  <div className='home-page--hero-numbers__item'>
                    <span>$17.25 Million</span>
                    <span>Market cap</span>
                  </div>

                  <div className='home-page--hero-numbers__item'>
                    <span>13.35 Trillion</span>
                    <span>EarnX burned</span>
                  </div>
                  <div className='home-page--hero-numbers__last-update'>
                    Updated on: 16.04.2021.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Reasons />
          <Contact />
        </Layout>
      </div>
    );
  }
}

export default Home;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="139.636" viewBox="0 0 120 139.636">
<g id="icon" transform="translate(-1173 -258)">
  <g id="Group_5" data-name="Group 5" transform="translate(1173 258)">
  <g id="Polygon_19" data-name="Polygon 19" transform="translate(120 0) rotate(90)">
      <path id="Path_2" data-name="Path 2" d="M38.673,6.545,7.573,60l31.1,53.455h62.289L132.064,60l-31.1-53.455H38.673M34.909,0h69.818l34.909,60-34.909,60H34.909L0,60Z" transform="translate(0)" fill="none"/>
    </g>
    <g id="Group_4" data-name="Group 4" transform="translate(23.636 28.85)">
      <path id="Polygon_1" data-name="Polygon 1" d="M8.182,0l8.182,9.818H0Z" transform="translate(28 28.968)" fill="#999"/>
      <path id="Polygon_3" data-name="Polygon 3" d="M9.273,0l9.273,10.909H0Z" transform="translate(41.091 12.241)" fill="#999"/>
      <path id="Polygon_13" data-name="Polygon 13" d="M8.182,0l8.182,10.182H0Z" transform="translate(44.364 52.605) rotate(180)" fill="#999"/>
      <path id="Polygon_15" data-name="Polygon 15" d="M9.273,0l9.273,10.909H0Z" transform="translate(57.818 37.696) rotate(180)" fill="#999"/>
      <path id="Polygon_18" data-name="Polygon 18" d="M9.091,0l9.091,10.909H0Z" transform="translate(72 20.605) rotate(180)" fill="#999"/>
      <path id="Polygon_20" data-name="Polygon 20" d="M9.273,0l9.273,10.909H0Z" transform="translate(33.091 37.696) rotate(180)" fill="#999"/>
      <path id="Polygon_21" data-name="Polygon 21" d="M9.273,0l9.273,10.909H0Z" transform="translate(12.727 12.241)" fill="#999"/>
      <path id="Polygon_22" data-name="Polygon 22" d="M9.091,0l9.091,10.909H0Z" transform="translate(18.545 20.605) rotate(180)" fill="#999"/>
      <path id="Polygon_23" data-name="Polygon 23" d="M9.273,0l9.273,10.909H0Z" transform="translate(14.545 43.514)" fill="#999"/>
      <path id="Polygon_24" data-name="Polygon 24" d="M9.273,0l9.273,10.909H0Z" transform="translate(39.273 43.514)" fill="#999"/>
      <path id="Polygon_25" data-name="Polygon 25" d="M9.273,0l9.273,10.909H0Z" transform="translate(31.273 68.968) rotate(180)" fill="#999"/>
      <path id="Polygon_26" data-name="Polygon 26" d="M9.273,0l9.273,10.909H0Z" transform="translate(59.636 68.968) rotate(180)" fill="#999"/>
      <path id="Polygon_27" data-name="Polygon 27" d="M9.273,0l9.273,10.909H0Z" transform="translate(0 60.241)" fill="#999"/>
      <path id="Polygon_28" data-name="Polygon 28" d="M9.273,0l9.273,10.909H0Z" transform="translate(53.455 60.241)" fill="#999"/>
      <path id="Path_8" data-name="Path 8" d="M1389.59,343.155l5.125-5.818,10.768,5.818Z" transform="translate(-1334.466 -337.337)" fill="#999"/>
      <path id="Path_9" data-name="Path 9" d="M0,5.818,5.125,0,15.893,5.818Z" transform="translate(16.47 81.089) rotate(180)" fill="#999"/>
      <path id="Path_10" data-name="Path 10" d="M0,0,5.125,5.818,15.893,0Z" transform="translate(56.107 75.028)" fill="#999"/>
      <path id="Path_11" data-name="Path 11" d="M15.893,5.818,10.768,0,0,5.818Z" transform="translate(1.326 0.119)" fill="#999"/>
    </g>
    
  </g>
</g>
</svg>

`;
