window.addEventListener('load', initScene);


function initScene() {
    const earth = document.querySelector('.earth');

    earth.object3D.property = 'rotation';

    earth.object3D.easing = 'linear';
    earth.object3D.dur = '6000';
    earth.object3D.loop = true;
    earth.object3D.from = 0;
    earth.object3D.to = 360;
    earth.object3D.rotation.y += Math.PI;
}