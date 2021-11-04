//carregando o three.js
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

function main() {
    //selecionando e desenhando/renderizando no canvas
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({ canvas }); //uso do WebGL p renderizar

    //configuração da camera
    const fov = 75; //field of vision. 75 graus (graus p a PerspectiveCamera);
    const aspect = 2;  // "the canvas default." 300x150 pixels
    const near = 0.1;
    const far = 5; //^< espaço em frente a camera q sera renderizado
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far); //< frustum, forma geométrica. tudo dentro dela sera renderizado
    camera.position.z = 2;

    //criando a scene. a raiz do scenegraph.
    const scene = new THREE.Scene();

    /*3*/ //configuração das luzes
    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
    }

    //criando e definindo a geometry do scenegraph.
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    
    //criando um material e definindo sua cor em hexadecimal
    /*3*/ const material = new THREE.MeshPhongMaterial({color: 0x44aa88});  // greenish blue
    
    //criando um mesh. (definições do geometry + definições do material)
    const cube = new THREE.Mesh(geometry, material);

    //adicionando o mesh à scene
    scene.add(cube);

    //chamando a função render passando a scene e a camera, assim, renderizando-a
    renderer.render(scene, camera);

    /*2*///animando o cubo com uma rotação
    function render(time)
    {
        time *= 0.001;  // "convert time to seconds"
    
        //rotação dos eixos do cubo será baseada no período de tempo.
        cube.rotation.x = time; //(radianos)
        cube.rotation.y = time;
    
        //renderizando a cena
        renderer.render(scene, camera);
    
        requestAnimationFrame(render); //loop da função de animação. passa o periódo de tempo...
            //... (em milisec) desde que a página carregou a animação
    }
    requestAnimationFrame(render); //requisição de animação que chama a função render
}

main();