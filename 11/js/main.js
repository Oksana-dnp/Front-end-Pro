var elem = document.getElementById('elem');
function func(surname, name) {
    alert(this.value + ', ' + surname + ' ' + name);
}

func = func.bind(elem);
func('Иванов', 'Иван');
func('Петров', 'Петр');

function func1() {
    alert(this.value);
}

func1.call(elem);






