import inquirer from "inquirer";
let myBelance = 10000;
let myPin = 28648;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "select your option",
            type: "list",
            choices: ["withdraw", "check belance"]
        }]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "list",
                choices: ["5000", "10000", "15000", "20000", "other amount"],
            }
        ]);
        if (amountAns.amount === "other amount") {
            let belance = await inquirer.prompt([{
                    name: "belance",
                    message: "Enter you Amount",
                    type: "number",
                }]);
            myBelance -= amountAns.amount;
            console.log("Current Belance is" + myBelance);
        }
    }
    else if (operationAns.operation === "check belance") {
        let inquaryAns = await inquirer.prompt([{
                name: "inquary",
                message: "10000",
                type: "number",
            }]);
    }
}
else {
    console.log("incurrect pin code !!!");
}
