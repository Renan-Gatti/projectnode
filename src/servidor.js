const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.json({name: 'Renan', age: 30});
})

app.listen(4000);