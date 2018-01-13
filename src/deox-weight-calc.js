export default function dwcalc(num, unit){
	if(unit == 'kg'){
		let libras = num * 2.2046;
		return `${libras} kg`
	} else if(unit == 'lbs'){
		let kilos = num * 0.453592;
		return `${kilos} kg`
	}else{
		return 'Introduce una unidad de masa válida, ya sean kg o lbs'
	}
}