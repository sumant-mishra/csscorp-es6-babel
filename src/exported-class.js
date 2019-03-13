export const TEST_VAR = 5;

export const var1 = 5;
export const var3 = 10;

class TestClass{
    constructor(){

    }

    test(){
        console.log("This method is from exported class");
    }
}

export default TestClass;



export class Movie2ES6{
    constructor(){
        this.title = "";
    }
    setTitle(title){
        this.title = title;
        console.log("Movie2ES6: ", this.title);
    }
}

