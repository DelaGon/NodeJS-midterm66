const Midterm = require('./controllers/mid66');
const UserController = require('./controllers/UserController')

module.exports = (app) => {
    app.post('/user', UserController.create)
    
    app.put('/user', UserController.put)
    
    app.delete('/user', UserController.remove)
    
    app.get('/user', UserController.show)
    
    app.get('/users', UserController.index)

    app.post('/add', Midterm.add)

    app.post('/func1', Midterm.func1)

    app.post('/func2', Midterm.func2)

}