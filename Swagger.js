import swaggerAutogen from 'swagger-autogen';
import { HOST } from './src/config/config.js';

const doc = {
    info: {
        title: 'Sistema de Acceso',
        description: 'Esto es una API de Acceso al sistema creada por HanSoft'
    },
    host: HOST,
    servers: [
        {
            url: "http://localhost:3000"
        }
    ]
};
const outputFile = './swagger-output.json';
const routes = ['./src/index.js'];


swaggerAutogen({openapi:"3.0.0"})(outputFile, routes, doc).then(async () => {
        await import('./src/index.js')
    }
);