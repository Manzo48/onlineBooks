const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/clients.route.js"));
app.use(require("./routes/books.route.js"));
app.use(require("./routes/genre.route.js"));
app.use(require("./routes/reviews.route.js"));


mongoose.connect("mongodb+srv://kantaevm778:Lazy26speedking@cluster0.xflpdav.mongodb.net/onlinebooks-bd?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(777, () => {
  console.log('Сервер запущен успешно')
})