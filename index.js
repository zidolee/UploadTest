// var users = [];

// function User(name, id, password, email){
//     this.name = name;
//     this.id = id;
//     this.password = password;
// }

// var user = new User('Ronaldo', 'r1', 1234, 'aaa@aaa.com');
// users.push(user);
// var user = new User('Sonaldo', 's1', 1234, 'bbb@bbb.com');
// users.push(user);

// for(var i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// var a=3;
// var b=5;

// [a,b] = [b, a];

// console.log(a);
// console.log(b);

// var student = {
//     이름 : '손홍민',
//     국어 : 92, 수학 : 98,
//     영어 : 97, 과학 : 98
// }

// var output = '';
// with(student) {
//     output += '이름 :' + student.이름 + '\n';
//     output += '국어 :' + 국어 + '\n';
//     output += '수학 :' + 수학+ '\n';
//     output += '영어 :' + 영어 + '\n';
//     output += '과학 :' + 과학 + '\n';
//     output += '총점 :' + (국어 + 수학 + 영어 + 과학) + '\n';
// }

// console.log(output);

// function makeStudent(name, korean, math, english, science) {
//     var willReturn = {
//         이름 : name,
//         국어 : korean,
//         수학 : math,
//         영어 : english,
//         과학 : science,
//         getSum : function() {
//            return this.국어 + this.수학 + this.영어 + this.과학;
//         },

//         getAverage : function() {
//             return this.getSum()/4;
//         },

//         toString : function(){
//             return this.이름 + '\t' + this.getSum() + '\t' + this.getAverage();
//         }
//     };

//     return willReturn;
// }
// var students = [];
//  students.push(makeStudent('윤인성', 87, 98, 88, 95));
//  students.push(makeStudent('연하진', 99, 98, 80, 86));

//  var output = '이름\t총저\t평균\n';
//  for(var i in students){
//      output += students[i].toString() + '\n';
//  }

//  console.log(output);

// function test(options) {
//     options.valueA = options.valueA || 10;
//     options.valueB = options.valueB || 20;
//     options.valueC = options.valueC || 30;

//     console.log(options.valueA + ' : ' + options.valueB + ' : ' + options.valueC); 
// }

// test({valueA : 52, valueC : 273
// });

// var a = 20;
// var b = 10;

// console.log(a || b);

// var originalArray = [1, 2, 3, 4,];
// var newArray = originalArray;

// originalArray[0] = 273;

// console.log(originalArray);
// console.log(newArray);

// function clone(obj) {
//     var output = {};
//     for(var i in obj) {
//         output[i] = obj[i];
//     }
//     return output;
// }

// var original = {a : 10, b : 20};
// var referenced = original;
// var cloned = clone(original);

// original.a  = 20;

// console.log(JSON.stringify(referenced, null, 2));
// console.log(JSON.stringify(cloned, null, 2));
// var originalArray = [1,2,3,4,5];

// var newArray = [];
// for(var i = 0; i < originalArray.length; i++) {
//     newArray[i] = originalArray[i];
// }
// newArray.push(10);
// console.log(newArray);
// console.log(originalArray);

// function Student(name, korean, math, english, science) {
//     this.name = name;
//     this.korean = korean;
//     this.math = math;
//     this.english = english;
//     this.science = science;

//     this.getSum = function(){
//         return this.korean + this.math + this.english + this.science;
//     };
//     this.getAverage = function() {
//         return this.getSum()/4;
//     };
//     this.toString = function() {
//         return this.name + '\t' + this.getSum() + '\t' + this.getAverage();
//     }
// }
// var students = [];

// students.push(new Student('윤하린', 90, 80, 95, 100));
// students.push(new Student('윤인아', 90, 85, 95, 80));

// var output = '이름\t총점\t평균\n'
// for(var i in students){
//     output += students[i].toString() + '\n';
// }
// console.log(output);

// function Student(name, korean, math, english, science) {
//     this.name = name;
//     this.korean = korean;
//     this.math = math;
//     this.english = english;
//     this.science = science;

// }

// Student.prototype.getSum = function(){
//     return this.korean + this.math + this.english + this.science;
// };
// Student.prototype.getAverage = function() {
//     return this.getSum()/4;
// };
// Student.prototype.toString = function() {
//     return this.name + '\t' + this.getSum() + '\t' + this.getAverage();
// }

// var students = [];

// students.push(new Student('윤하린', 90, 80, 95, 100));
// students.push(new Student('윤인아', 90, 85, 95, 80));

// var output = '이름\t총점\t평균\n'
// for(var i in students){
//     output += students[i].toString() + '\n';
// }
// console.log(output);

// function Rectangle(w, h) {
//     var width = w;
//     var height = h;

//     this.getWidth = function() {
//         return width;
//     };

//     this.getHeight = function() {
//         return height;
//     };
    
//     this.setWidth = function (w){
//         if(w < 0) {
//             throw '길이는 음수일 수 없습니디.';
//         } else {
//             width = w;
//         }
//     };

//     this.setHeight = function (h){
//         if(h < 0) {
//             throw '길이는 음수일 수 없습니디.';
//         } else {
//             height = h;
//         }
//     };
// }

// Rectangle.prototype.getArea = function() {
//     return this.getWidth() * this.getHeight();
// };

// var rectangle = new Rectangle(5,7);
// rectangle.setWidth(5);
// console.log('Area : ' + rectangle.getArea());

// function Rectangle(w, h) {
//     var width = w;
//     var height = h;

//     this.getWidth = function() {return width;};
//     this.getHeight = function() {return height;};
//     this.setWidth = function (w) {
//         if(w<0) {
//             throw '길이는 음수일 수 없습니다.';
//         } else {
//             width = w;
//         }
//     };

//     this.setHeight = function(h) {
//         if(h<0) {
//             throw '길이는 음수일 수 없습니다.';
//         } else {
//             height = h;
//         }
//     };

//     // this.getArea = function() {
//     //     return this.getWidth() * this.getHeight();
//     // };
// }

// Rectangle.prototype.getArea = function() {
//     return this.getWidth() * this.getHeight();
// };

// function Square(length) {
//     this.base = Rectangle;
//     this.base(length, length);
// }

// Square.prototype = Rectangle.prototype;
// Square.prototype.constructor = Square;

// var rectangle = new Rectangle(5, 7);
// var square = new Square(5);

// console.log(rectangle.getArea() + ' : ' + square.getArea());

// console.log(square instanceof Rectangle);

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height;
//     }
// }

// const rectangle = new Rectangle(100, 200);

// console.log(rectangle.getArea());


// class Rectangle {
//     constructor(width, height) {
//         this._width = width;
//         this._height = height;
//     }

//     get width() {
//         return this._width;
//     }

//     set width(input) {
//         this._width = input;
//     }
// get weight() {
//         return this._height;
//     }

//     set weight(input) {
//         this._height = input;
//     }

//     getArea() {
//         return this._width * this._height;
//     }
// }

// const rectangle = new Rectangle(100, 200);
// rectangle.width = 200;

// console.log(rectangle.width);
// console.log(rectangle.getArea());
    
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    set width(input) {
        this._width = input;
    }
get weight() {
        return this._height;
    }

    set weight(input) {
        this._height = input;
    }

    getArea() {
        return this._width * this._height;
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
        console.log(this);
    }

    set width(input) {
        this._width = input;
        this._height = input;
    }

    set height(input) {
        this._width = input;
        this._height = input;
    }
}

const square = new Square(100);
console.log(square.getArea());