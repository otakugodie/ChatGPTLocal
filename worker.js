//import { WebWorkerMLCEngineHandler, MLCEngine } from "https://esm.run/@mlc-ai/web-llm";
//import { WebWorkerMLCEngineHandler } from "@mlc-ai/web-llm";
import {MLCEngineWorkerHandler, MLCEngine} from "https://esm.run/@mlc-ai/web-llm";


/* onmessage = (e) => {    
    console.log('Worker: Message received from main thread');
    console.log(e);
    if (e.data.name==='hello'){
        postMessage( {name: 'Hello back'} );
    }
} */

    const engine = new MLCEngine();
    const handler = new MLCEngineWorkerHandler(engine);

    onmessage = msg =>{
        handler.onmessage(msg);
    }