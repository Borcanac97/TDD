
const myFuncions =  require("./main");


describe( 'first test',()=>{

    test("addition three number",() =>{
        expect(myFuncions.addCalculator(2,3,2,2,6,10,52)).toBe(77)
    }),
    
    test("addition three number",() =>{
        expect(myFuncions.Addition(2,3)).toBe(5)
    }),
    
    test("Subtract two number",() =>{
        expect(myFuncions.Subtract(10,3)).toBe(7)

    }),
    test("multiplication two number",() =>{
        expect(myFuncions.multiplication(5,3)).toBe(15)
    }),
    test("Dividing two number",() =>{
        expect(myFuncions.Dividing(9,3)).toBe(3)
    })
})

