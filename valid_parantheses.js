/**
 * @param {string} s
 * @return {boolean}
 */
class Stack {
    constructor(){
        this.items = [];
    }

    push(item){
        this.items.push(item);
    }

    pop(){
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        return this.items.pop();
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }

}


var isValid = function(s) {
    if (s.length===0){
        return false;
    }

    const closing = [')', '}' , ']'];
    const opening = ['(', '{' , '[']

    const stack =  new Stack();
    var temp = 0;
    
    for(var i =0; i < s.length; i++)
    {
        if(opening.includes(s[i]))
        {
            temp= opening.indexOf(s[i]);
            stack.push(s[i]);
        }
        if(closing.includes(s[i])){
            let val = stack.pop();

            
            if(opening.indexOf(val)!== closing.indexOf(s[i])){
                return false;
            }
            
        }

    }
    if(stack.size()!==0){
        return false;
    }
    return true;


};

console.log(isValid('(]'));