var users = [];

function User(name, id, password, email){
    this.name = name;
    this.id = id;
    this.password = password;
}

var user = new User('Ronaldo', 'r1', 1234, 'aaa@aaa.com');
users.push(user);
var user = new User('Sonaldo', 's1', 1234, 'bbb@bbb.com');
users.push(user);

for(var i = 0; i < users.length; i++) {
    console.log(users[i]);
}