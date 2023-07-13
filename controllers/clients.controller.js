const Client = require('../models/Client.model');
 const Book  = require('../models/Book.model')
module.exports.contactsController = {
    addClient:  (req, res) => {
        Client.create({
            name: req.body.name, 
            books: req.body.books,
            reviews: req.body.reviews,  
            isBlocked: req.body.isBlocked
        })
            .then(() => res.json('Клиент добавлен')).catch((err) => res.json(err))
    },
    takeBook: async (req, res) => {
        try {
            const client = await Client.findById(req.params.id)
            const book = await Book.findById(req.body.books)
            if(client.books.length < 3 && client.isBlocked === false && book.isBlocked === false){
                await Client.findByIdAndUpdate(req.params.id, {$addToSet: {books: req.body.books}})
                await Book.findByIdAndUpdate(req.body.books,  {isBlocked: true})
                res.json("Вы добавили книгу")
            } else{
                res.json("Низя книгу")
            }
        }
        catch(error) {
            res.json("Ошибка" + error.message)
        }
    },
    
    removeBook: async (req, res) => {
        try {
            const client = await Client.findById(req.params.id)
             const book = await Book.findById(req.params.id)
            if (client.books.includes(req.body.books)){
                await Client.updateOne({$pull: {books: req.body.books}})
                 await Book.findByIdAndUpdate(req.body.books,  {isBlocked: false})
                res.json("вы убрали книгу")
            }
        }
     catch(error){
        res.json("error " + error.message)
    }
    },
    takeAwayBooks: async function(req, res) {
        try {
            const client = await User.findById(req.params.userId);
            const bookIds = req.body.books; // Исправление: используйте ren_books вместо ren_book, так как это вероятно массив книг, которые вы хотите взять
    
            // Установка isRenting: false для каждой книги
            await Book.updateMany({ $set: { isRenting: false } });
    
            // Очистка массива арендованных книг клиента и установка isBlocked: true
            client.rentingBooks = [];
            client.isBlocked = true;
            await client.save();
    
            res.json(client);
        } catch (error) {
            console.error(error);
            res.json(500).json({ error: 'Произошла ошибка сервера' });
        }
    }
}