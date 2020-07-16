const derek = new User("Derek Hofstetler", "janetisbae@gmail.com")
const jason = new User("Jason Mendoza", "bortles.jagsfan@hotmail.com")
const vicky = new SupportUser("Vicky Sengupta", "doug4cett.LOL@aol.com")

derek.changeEmail("mirrorsaregreat@gmail.com")
vicky.changeEmailAddressForUser(jason, "jake.jortles@hotmail.com")

console.log(derek)
console.log(jason)
console.log(vicky)