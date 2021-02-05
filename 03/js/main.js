
function isLannisterSoldier(color, lion) {
    if ((color == 'red' && lion == null) || lion == 'lion') {
        console.log('Soldier is Lannister')
    } else {
        console.log('Soldier  is not Lannister')
    }
}

isLannisterSoldier('red', null);

isLannisterSoldier('', 'lion');

isLannisterSoldier('green');

