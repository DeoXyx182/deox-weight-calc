const expect = require('chai').expect
const dwcalc = require('..').default

describe('#dwcalc',  function(){
	it('Convertir 10 libras a kilos', function(){
		const convertir = dwcalc(10, "kg")
		expect(convertir).to.equal("22.046 kg")
	})
	it('Convertir 10 kilos a libras', function(){
		const convertir = dwcalc(10, "lbs")
		expect(convertir).to.equal("4.53592 lbs")
	})
	
	it('Convertir una cantidad a otro tipo de medida', function(){
		const convertir = dwcalc(10, "mts")
		expect(convertir).to.equal("Introduce una unidad de masa válida, ya sean kg o lbs")
	})
})