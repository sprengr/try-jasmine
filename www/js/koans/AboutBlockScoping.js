describe('about block scoping', () => {

  it('should declare a variable', () => {
    let number = 1;
    expect(number).toBe(FILL_1);
  });
  
  it('should have block scoping', () => {
    let number = 1;
	  let arg = 'a';
	
	  if (arg === 'a') {
		  let number = 2;
		  expect(number).toBe(FILL_2);
	  }
    expect(number).toBe(FILL_3);
  });

  it('should have block scoping in a for loop', () => {
    var i = 5;
	  let j = 5;
	
	  for (var i=0; i<10; i++){
	  }
	  expect(i).toBe(FILL_4);
	
	  for (var i=10; i>0; i--){
	  }
	  expect(i).toBe(FILL_5);
	
	  for (let j=0; j<10; j++){
	  }
	  expect(j).toBe(FILL_6);
	
	  for (let j=10; j>0; j--){
	  }
	  expect(j).toBe(FILL_7);
  });
  
  it("shouldn't have hoisting characteristics", () => {
  	try {
  	  x = 1;
  		y = 2;
  		var x;
  		let y;
  	} catch (ex) {
  		expect(ex.lineNumber).toBe(FILL_8);
  	}
  });
  
  xit("should copy values in a for loop", () => {
	//advanced?
	//skip -> not working yet
	//should work according to https://leanpub.com/understandinges6/read/#leanpub-auto-block-bindings
    let funcs = [];
	  let res = [];
	
	  for (var i=0; i<3; i++){
		  funcs.push(() => res.push(i));
	  }
	
  	funcs.forEach(func => func());
  	expect(res.length).toBe(3);
  	expect(res).toMatch(FILL_9); // FILL_ME_IN
  	
  	funcs = [];
  	res = [];
  	for (let j=0; j<3; j++){
  		funcs.push(() => res.push(i));
  	}
  
  	funcs.forEach(func => func());
  	expect(res.length).toBe(3);
  	expect(res).toMatch(FILL_10); // FILL_ME_IN
  });
 
});
