function Calculation(options) {

    this.name = options.name;

    let date = new Date();
    let nameMatheOperator = ['Сложение', 'Вычитание', 'Умножение', 'Деление'];
    let computationHistory = [];
    let maxCountSavedOperations = 2;


    this.addition = function(...arg) {
		let result = 0;
		let arrayParameters = [];

		for (let i = 0; i <= arg.length-1; i++) {
			arrayParameters.push(arg[i])
			result += arg[i];
		}
	
		getAddResult (this.name, result, nameMatheOperator[0], arrayParameters)
		return result
    }

    this.subtraction = function(a, b) {
	let arrayParameters = [a, b]
	let result = a - b;
        getAddResult (this.name, result, nameMatheOperator[1], arrayParameters)
	return result;
    }

    this.multiplication = function(...arg) {
		let result = 1;
		let arrayParameters = [];

		for (let i = 0; i <= arg.length-1; i++) {
			arrayParameters.push(arg[i])
			result *= arg[i];
		}
	
		getAddResult (this.name, result, nameMatheOperator[2], arrayParameters)
		return result
    }

    this.division = function(a, b) {
	let arrayParameters = [a, b]
	let result = a / b;
        getAddResult (this.name, result, nameMatheOperator[3], arrayParameters)
	return result;
    }	
	
    function getAddResult (name, result, array, par) {
        let dateString = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
        let timeString = `${date.getHours()}:${date.getMinutes()}`
        return computationHistory.push(`${name} (${dateString} ${timeString}) ${array} = ${result} (${par.join(', ')})`);
    }

    if (computationHistory.length = maxCountSavedOperations) { 
        computationHistory.shift();
    }

    return console.log(computationHistory)
}

calculator =  new Calculation({
	name: 'Мой калькулятор',
});

calculator.addition(5, 10, 20, 50, 25);
calculator.subtraction(200, 95);
calculator.multiplication(20, 10, 12, 2, 5);
calculator.division(300, 6);