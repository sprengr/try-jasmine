describe('destructuring',function(){
  it('list matching',function(){
    var [day, month, date, year] = 'Thu Jan 1 2015'.split(' ');
    expect(day).toBe(FILL_1);
    expect(month).toBe(FILL_2);
    expect(date).toBe(FILL_3);
    expect(year).toBe(FILL_4);
  });
  
  it('empy list matching',function(){
    var [a] = [];
    expect(a).toBe(FILL_5);
  });
  
 it('empy list matching with default value',function(){
    //var [a = 1] = [];
    //expect(a).toBe(FILL_6);
  });
});
