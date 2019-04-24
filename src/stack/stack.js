function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}

function push(element){
	this.dataStore[this.top++] = element;
}

function pop(){
	return this.dataStore[--this.top];
}

function peek(){
	
	return this.dataStore[this.top-1];
}

function clear(){
	this.top = 0;
}

function length(){
	return this.top;
}

let s = new Stack();
s.push('jack'); 
s.push('luck'); 
s.push('dom'); 
console.log(s.length());
console.log('pop',s.pop());
console.log('peek',s.peek());
console.log('clear',s.clear());
