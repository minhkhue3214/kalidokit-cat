import './App.css';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import * as PIXI from 'pixi.js';
// import './Live2dSDK/live2d.min.js';
// import './Live2dSDK/live2dcubismcore.min.js';
// import * as PIXI from './PixiJS_Renderer/pixi.min.js';

import { Live2DModel } from 'pixi-live2d-display';
import { FaceMesh } from './mediapipe/face_mesh.js'; //5
import './mediapipe/drawing_utils.js'; //6
import { Camera } from './mediapipe/camera_utils.js'; //7
//Kalidokit
import * as Kalidokit from "./mediapipe/kalidokit.umd.js"; //8

// const {
// Application,
//   live2d: { Live2DModel },
// } = PIXI;
console.log("PIXI", PIXI);

const {
    Face,
    Vector: { lerp },
    Utils: { clamp },
} = Kalidokit;

let currentModel, facemesh;
const modelUrl = 'https://videocall-web-service-stg.sohatv.vn/face_filter_data/models2d/tororo_hijiki/tororo/runtime/tororo.model3.json';

// Tạo component App
function App() {
    const videoRef = useRef(null);
    const video2Ref = useRef(null);

    useEffect(() => {
        (async function main() {
            // create pixi application
            const app = new PIXI.Application({
                view: document.getElementById("live2d"),
                autoStart: true,
                backgroundAlpha: 0,
                backgroundColor: "black",
                resizeTo: window,
            });

            // load live2d model
            currentModel = await Live2DModel.from(modelUrl, { autoInteract: false });
            currentModel.scale.set(0.4);
            console.log("currentModel", currentModel);
            currentModel.interactive = true;
            currentModel.anchor.set(0.5, 0.5);
            currentModel.position.set(window.innerWidth * 0.5, window.innerHeight * 0.8);

            // add live2d model to stage
            app.stage.addChild(currentModel);

            // create media pipe facemesh instance
            facemesh = new FaceMesh({
                locateFile: (file) => {
                    console.log("file", file);
                    return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
                },
            });

            // set facemesh config
            facemesh.setOptions({
                maxNumFaces: 1,
                refineLandmarks: true,
                minDetectionConfidence: 0.5,
                minTrackingConfidence: 0.5,
            });

            // pass facemesh callback function
            facemesh.onResults(onResults);

            startCamera();
        })();
    }, [])

    async function load2d() {
        // create pixi application
        const app = new PIXI.Application({
            view: document.getElementById("live2d"),
            autoStart: true,
            backgroundAlpha: 0,
            backgroundColor: "black",
            resizeTo: window,
        });

        // load live2d model
        currentModel = await Live2DModel.from(modelUrl, { autoInteract: false });
        currentModel.scale.set(0.4);
        console.log("currentModel", currentModel);
        currentModel.interactive = true;
        currentModel.anchor.set(0.5, 0.5);
        currentModel.position.set(window.innerWidth * 0.5, window.innerHeight * 0.8);

        // add live2d model to stage
        app.stage.addChild(currentModel);

        // create media pipe facemesh instance
        facemesh = new FaceMesh({
            locateFile: (file) => {
                console.log("file", file);
                return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
            },
        });

        // set facemesh config
        facemesh.setOptions({
            maxNumFaces: 1,
            refineLandmarks: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5,
        });

        // pass facemesh callback function
        facemesh.onResults(onResults);

        startCamera();
    };

    const onResults = (results) => {
        // drawResults(results.multiFaceLandmarks[0]);
        animateLive2DModel(results.multiFaceLandmarks[0]);
    };

    const animateLive2DModel = (points) => {
        if (!currentModel || !points) return;

        let riggedFace;

        if (points) {
            // use kalidokit face solver
            riggedFace = Face.solve(points, {
                runtime: "mediapipe",
                video: videoRef.current,
            });
            rigFace(riggedFace, 0.5);
        }
    };

    // update live2d model internal state
    const rigFace = (result, lerpAmount = 0.7) => {
        if (!currentModel || !result) return;
        const coreModel = currentModel.internalModel.coreModel;

        currentModel.internalModel.motionManager.update = (...args) => {
            // disable default blink animation
            // currentModel.internalModel.eyeBlink = undefined;

            coreModel.setParameterValueById(
                "PARAM_EYE_BALL_X",
                lerp(result.pupil.x, coreModel.getParameterValueById("PARAM_EYE_BALL_X"), lerpAmount)
            );
            coreModel.setParameterValueById(
                "PARAM_EYE_BALL_Y",
                lerp(result.pupil.y, coreModel.getParameterValueById("PARAM_EYE_BALL_Y"), lerpAmount)
            );

            // X and Y axis rotations are swapped for Live2D parameters
            // because it is a 2D system and KalidoKit is a 3D system
            coreModel.setParameterValueById(
                "PARAM_ANGLE_X",
                lerp(result.head.degrees.y, coreModel.getParameterValueById("PARAM_ANGLE_X"), lerpAmount)
            );
            coreModel.setParameterValueById(
                "PARAM_ANGLE_Y",
                lerp(result.head.degrees.x, coreModel.getParameterValueById("PARAM_ANGLE_Y"), lerpAmount)
            );
            coreModel.setParameterValueById(
                "PARAM_ANGLE_Z",
                lerp(result.head.degrees.z, coreModel.getParameterValueById("PARAM_ANGLE_Z"), lerpAmount)
            );

            // update body params for models without head/body param sync
            const dampener = 0.3;
            coreModel.setParameterValueById(
                "PARAM_BODY_ANGLE_X",
                lerp(result.head.degrees.y * dampener, coreModel.getParameterValueById("PARAM_BODY_ANGLE_X"), lerpAmount)
            );
            coreModel.setParameterValueById(
                "PARAM_BODY_ANGLE_Y",
                lerp(result.head.degrees.x * dampener, coreModel.getParameterValueById("PARAM_BODY_ANGLE_Y"), lerpAmount)
            );
            // coreModel.setParameterValueById(
            //     "PARAM_BODY_ANGLE_Z",
            //     lerp(result.head.degrees.z * dampener, coreModel.getParameterValueById("PARAM_BODY_ANGLE_Z"), lerpAmount)
            // );

            // Simple example without winking.
            // Interpolate based on old blendshape, then stabilize blink with `Kalidokit` helper function.
            let stabilizedEyes = Kalidokit.Face.stabilizeBlink(
                {
                    l: lerp(result.eye.l, coreModel.getParameterValueById("PARAM_EYE_L_OPEN"), 0.2),
                    r: lerp(result.eye.r, coreModel.getParameterValueById("PARAM_EYE_R_OPEN"), 0.2),
                },
                result.head.y
            );
            // eye blink
            coreModel.setParameterValueById("PARAM_EYE_L_OPEN", stabilizedEyes.l);
            coreModel.setParameterValueById("PARAM_EYE_R_OPEN", stabilizedEyes.r);

            // mouth
            coreModel.setParameterValueById(
                "PARAM_MOUTH_OPEN_Y",
                lerp(result.mouth.y, coreModel.getParameterValueById("PARAM_MOUTH_OPEN_Y"), 0.3)
            );
            // Adding 0.3 to ParamMouthForm to make default more of a "smile"
            coreModel.setParameterValueById(
                "PARAM_MOUTH_FORM",
                0.3 + lerp(result.mouth.x, coreModel.getParameterValueById("PARAM_MOUTH_FORM"), 0.3)
            );
        };
    };

    // start camera using mediapipe camera utils
    const startCamera = () => {
        const camera = new Camera(videoRef.current, {
            onFrame: async () => {
                await facemesh.send({ image: videoRef.current });
            },
            width: 640,
            height: 480,
        });
        camera.start();
    };

    return (
        <div className="App">
            <div className="preview">
                <video ref={videoRef} className="input_video" width="1280px" height="720px"></video>
            </div>
            <canvas id="live2d" width="1536px" height="722px"></canvas>
            <button onClick={load2d}>Load model</button>
        </div>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))

