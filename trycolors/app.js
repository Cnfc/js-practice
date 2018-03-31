function MemberFactory() {
  this.createMember = function(name, type){
    let member;

    if(type === 'simple'){
      member = new SimpleMembership(name);
    } else if(type === 'standart') {
      member = new StandartMembership(name);
    } else if(type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;
    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }
    return member;
  }
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
}
const StandartMembership = function(name) {
  this.name = name;
  this.cost = '$15';
}
const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$35';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Chris Jackson', 'super'));
members.push(factory.createMember('Tom Smith', 'standart'));

console.log(members);

members.forEach(function(member) {
  member.define();
});































//
