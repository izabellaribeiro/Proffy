import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

// --Métodos HTPP--
// - get: buscar ou listar uma informação.
// - post: criar alguma nova informação.
// - put: atualizar uma informação existente. 
// - delete: deletar uma informção existente.

// Corpo (Request Body) -> Dados para criação ou atualização de um registro.
// Route Params: Identificar qual recurso eu quero atualizar ou deletar.
// Query Params: Paginação, filtros, ordenção.

//ouvir endereço http:3333
app.listen(3333); // porta utilizada

