import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'https://cdn.skypack.dev/gsap';
import './talkingCar.css';

const TalkingCar = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.innerWidth < 1400) return;

    const sectionData = [
      {
        id: "intro",
        position: { x: 5, y: -4, z: 0 },
        rotation: { x: 0.1, y: -0.5, z: 0 },
        speech: "Welcome to the future of innovation, creativity, and cutting-edge technology.",
      },
      {
        id: "portfolio",
        position: { x: -8, y: -1, z: -10 },
        rotation: { x: 0.1, y: 0.5, z: 0 },
        speech: "Explore a portfolio filled with passion, precision, and purpose.",
      },
      {
        id: "skills",
        position: { x: -3, y: -1, z: 0 },
        rotation: { x: 0.1, y: 0.5, z: 0 },
        speech: "Here are my skills — a strong foundation in design, development, and innovation.",
      },
      {
        id: "contact",
        position: { x: 2, y: 0, z: 10 },
        rotation: { x: 0.1, y: -0.5, z: 0 },
        speech: "Let’s connect and build something exceptional together.",
      },
    ];

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      10,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);

    if (!container.contains(renderer.domElement)) {
      container.appendChild(renderer.domElement);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(500, 500, 500).normalize();
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    let mixer;
    let carModel;

    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer) mixer.update(0.02);
      renderer.render(scene, camera);
    };
    animate();

    const speak = (text) => {
      if (!text || window.innerWidth < 1400) return;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
    };

    let lastSectionId = null;

    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
          currentSection = section.id;
        }
      });

      const found = sectionData.find((s) => s.id === currentSection);
      if (found && carModel && currentSection !== lastSectionId) {
        gsap.to(carModel.position, {
          ...found.position,
          duration: 5,
          ease: "power2.out",
        });

        gsap.to(carModel.rotation, {
          ...found.rotation,
          duration: 5,
          ease: "power2.out",
        });

        speak(found.speech);
        lastSectionId = currentSection;
      }
    };

    window.addEventListener('resize', () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    const loader = new GLTFLoader();
    loader.load(
      '/talkingCar.glb',
      (gltf) => {
        carModel = gltf.scene;
        carModel.position.set(5, -4, 0);
        carModel.rotation.set(0.1, -0.5, 0);
        scene.add(carModel);

        mixer = new THREE.AnimationMixer(carModel);
        const action = mixer.clipAction(gltf.animations[0]);
        action.timeScale = 0.3;
        action.play();

        window.addEventListener('scroll', handleScroll);
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    return () => {
      controls.dispose();
      renderer.dispose();
      window.removeEventListener('scroll', handleScroll);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((m) => m.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  return <div ref={containerRef} className="talking-car-container" />;
};

export default TalkingCar;