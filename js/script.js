// #1 Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 
console.log("1 Завдання");

const bankAccount = {
    ownerName: "Ростік Арбітражник",
    accountNumber: "UA292032",
    balance: 1000000,
    deposit(money) {
        this.balance += money;
        return alert(`Ваш баланс поповнено на ${money}$`)
    },
    withdraw(money) {
        if (money > this.balance) {
            alert(`Недостатньо коштів!У вас на рахунку ${this.balance}$`)
        } else {
            alert(`Операція пройшла успішно!З рахунку знято: ${money}$`)
        }
    },
}
if (confirm("Бажаєте поповнити рахунок?")) {
    const money = Number(prompt("Введіть суму для поповнення"));
    if (!isNaN(money) && money > 0) {
        bankAccount.deposit(money);
    } else {
        alert("Невірні дані!");
    }
}
if (confirm("Бажаєте зняти гроші?")) {
    const money = Number(prompt("Введіть суму для виведення"));
    if (!isNaN(money) && money > 0) {
        bankAccount.withdraw(money);
    } else {
        alert("Недостатньо грошей на рахунку.");
    }
}
bankAccount.ownerName;
bankAccount.accountNumber;
bankAccount.balance;
// #2 Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
console.log("2 Завдання");

const weather = {
    temperature: 0,
    humidity: 70,
    windSpeed: 5,
    checkTemperature() {
        return this.temperature < 0;
    },
}
if (confirm("Бажаєте ввести температуру?")) {
    const temperature = Number(prompt("Введіть температуру"));

    if (!isNaN(temperature)) {
        weather.temperature = temperature;
        if (weather.checkTemperature()) {
            console.log("Температура нижче 0 градусів Цельсія");
        } else {
            console.log("Температура вище 0 градусів Цельсія");
        }

    } else {
        alert("Невірні дані!");
    }
}

weather.temperature;
weather.humidity;
weather.windSpeed;
// #3 Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 
console.log("3 Завдання");

const user = {
    name: "Rostyslav",
    age: 12,
    friends: ["Danya", "Illya", "Mykola", "Tumofiy", "Rostik", "Misha"],
    email: "goiteensschool@gmail.com",
    password: "qwerty",
    login() {
        const enterEmail = prompt("Введіть ваш email");
        const enterPassword = prompt("Введіть ваш пароль");
        if (enterEmail === this.email && enterPassword === this.password) {
            alert(`Вітаю ${this.name}, ви війшли в систему!`)
        } else {
            alert("Ви ввели неправильні дані!")
        }
    },
}
user.name;
user.age;
user.friends;
user.email;
user.password;
user.login();

//#4 Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 
console.log("4 Завдання");

const movie = {
    title: "Cars",
    director: ["Brian Fee", "John Lasseter"],
    year: 2006,
    rating: 7.3,
    checkRating(){
        return this.rating > 8;
    },
}

if (movie.checkRating()){
    console.log("Рейтинг фільму більше 8 балів.");
} else {
    console.log("Рейтинг фільму нище 8 балів.");
}

movie.title;
movie.director;
movie.year;
movie.rating;