// 1 Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 
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
if (confirm("Бажаєте зняти гроші?")){
    const money = Number(prompt("Введіть суму для виведення"));
    if(!isNaN(money) && money > 0){
        bankAccount.withdraw(money);
    } else{
        alert("Недостатньо грошей на рахунку.");
    }
}