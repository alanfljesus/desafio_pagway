import express from 'express';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
// import cors from 'cors';
import { checkouts } from './controllers/checkouts.controller';
import { consult } from './controllers/consult.controller';

import swaggerDocs from './swagger.json'
import { consultBalance } from './controllers/consultBalance.controlle';

const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;

const app = express();

// app.use(cors({
//  origin: 'https://desafiopagway-api.onrender.com'
// }));

app.use(bodyParser.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.post('/checkouts', checkouts)
app.get('/checkout', consult)
app.get('/consultBalance/', consultBalance)

app.listen(PORT, '0.0.0.0', () => {
 console.log(`Server running on port ${PORT}`)
})
