const express = require('express');
const cors = require('cors');

const routesUsers = require('./api/routes/usersRoutes.js');
const routesAddress = require('./api/routes/AddressRoutes.js');
const routesDevices = require('./api/routes/deviceRoutes.js');
const routesCompany = require('./api/routes/companyRoutes.js');
const routesDepartament = require('./api/routes/departmentRoutes.js');
const routesEquipment = require('./api/routes/equipmentRoutes.js');
const routesCep = require('./api/routes/CorreiosRoutes.js');


require('./database/indexDB.js');

const app = express();
app.use(cors());

app.use(express.json());

app.use(routesUsers);
app.use(routesAddress);
app.use(routesDevices);
app.use(routesCompany);
app.use(routesDepartament);
app.use(routesEquipment);
app.use(routesCep);



app.listen(3333);



