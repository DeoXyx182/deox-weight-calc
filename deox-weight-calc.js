export default function dwcalc(num, unit){
	if(unit == 'kg'){
		let kilos = num * 0.453592;
		return `${kilos} kg`
	} else if(unit == 'lbs'){
		let libras = num * 2.2046;
		return `${libras} lbs`
	}else{
		return 'Introduce una unidad de masa válida, ya sean kg o lbs'
	}
}