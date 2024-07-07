import './styles.css';
// import * as THREE from 'three';

// // Set up the objects in the scene

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight,  1, 1000);
// const renderer = new THREE.WebGLRenderer({
//     canvas: document.querySelector('#background'),
// });
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.render(scene, camera);

// // Donut
// const geometry = new THREE.TorusGeometry(5, 2, 32, 100)
// const material = new THREE.MeshStandardMaterial({ color: 0x33ff99 });
// const donut = new THREE.Mesh(geometry, material);
// scene.add(donut);

// // Set up the light source
// const pointLight = new THREE.PointLight(0xffffff);
// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(pointLight, ambientLight);

// // Add 500 spheres in space to the scene
// function addSphere() {
//     const sphereGeometry = new THREE.SphereGeometry(0.2, 30, 30);
//     const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
//     const globe = new THREE.Mesh(sphereGeometry, material);
//     const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
//     globe.position.set(x, y, z);    // call the base class
//     scene.add(globe);
// }
// Array(500).fill().forEach(addSphere);


// // Allow scrolling
// function scroll() {
//     const top = document.body.getBoundingClientRect().top;
//     camera.position.x = top * -0.0002;
//     camera.position.y = top * -0.0002;
//     camera.position.z = top * -0.02;
// }
// document.body.onscroll = scroll;
// scroll();

// function animate() {
//     requestAnimationFrame(animate);
//     donut.rotateX(0.01);
//     donut.rotateY(0.005);
//     donut.rotateZ(0.01);
//     renderer.render(scene, camera);
// }
// animate();




const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let text = entry.target.innerHTML;
        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            if (text.match('Improved the quality of the team’s software')) {
                entry.target.classList.add("fadeInLeft");
            } else if (text.match('Improved the quality of the most number of products')) {
                entry.target.classList.add("fadeInTop");
            } else if (text.match('in labor costs by creating database software')) {
                entry.target.classList.add("fadeInRight");
            } else if (text.match('Instructed the team on how to use GitHub')) {
                entry.target.classList.add("fadeInLeft");
            } else if (text.match('Improved the execution time of')) {
                entry.target.classList.add("fadeInBottom");
            } else if (text.match('Created an easy way for managers')) {
                entry.target.classList.add("fadeInRight");
            } else {
                entry.target.classList.add("fadeInLeft");
            }

            // document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
            // document.querySelectorAll(".animated")[1].classList.add("fadeInTop");
            // document.querySelectorAll(".animated")[2].classList.add("fadeInRight");
            // document.querySelectorAll(".animated")[3].classList.add("fadeInLeft");
            // document.querySelectorAll(".animated")[4].classList.add("fadeInBottom");
            // document.querySelectorAll(".animated")[5].classList.add("fadeInRight");
        } else {
            entry.target.classList.remove("show");

            if (text.match('Improved the quality of the team’s software')) {
                entry.target.classList.remove("fadeInLeft");
            } else if (text.match('Improved the quality of the most number of products')) {
                entry.target.classList.remove("fadeInTop");
            } else if (text.match('in labor costs by creating database software')) {
                entry.target.classList.remove("fadeInRight");
            } else if (text.match('Instructed the team on how to use GitHub')) {
                entry.target.classList.remove("fadeInLeft");
            } else if (text.match('Improved the execution time of')) {
                entry.target.classList.remove("fadeInBottom");
            } else if (text.match('Created an easy way for managers')) {
                entry.target.classList.remove("fadeInRight");
            } else {
                entry.target.classList.remove("fadeInLeft");
            }

            // document.querySelectorAll(".animated")[0].classList.remove("fadeInLeft");
            // document.querySelectorAll(".animated")[1].classList.remove("fadeInTop");
            // document.querySelectorAll(".animated")[2].classList.remove("fadeInRight");
            // document.querySelectorAll(".animated")[3].classList.remove("fadeInLeft");
            // document.querySelectorAll(".animated")[4].classList.remove("fadeInBottom");
            // document.querySelectorAll(".animated")[5].classList.remove("fadeInRight");
        }
    })
})

const hiddenElements = document.querySelectorAll('.animated');
// Observer all the hidden (.animated) elements for when they intersect the viewport
hiddenElements.forEach((el) => {
    observer.observe(el);
})
