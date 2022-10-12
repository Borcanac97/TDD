
const myFuncions =  require("./main");


describe( 'first test',()=>{

    test("addition three number",() =>{
        expect((myFuncions.addCalculator(2)).toThrow(Error));
    }),
    
    test("Dividing two number",() =>{
        expect((myFuncions.Dividing(9,0)).toThrow(Error));
    }),
    test("Muliplication of 5 and 3 to equal 15", () => {
        expect(() => myFuncions.multiplication(5, "s")).toThrow(Error)
      });
})

