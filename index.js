function createUser (name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

let user1 = createUser("Bryan")

console.log(user1)
console.log({reputation: user1.getReputation()})

function createPlayer (name, level) {
 
  const { getReputation, giveReputation } = createUser(name);
const getLevel = ()=>level;
  const increaseLevel = () => level++;
  
  return { name, getReputation, giveReputation, increaseLevel,getLevel };
}

const created = createPlayer("Gradin",5);
created.giveReputation()
created.giveReputation()
console.log({reputation: created.getReputation()})

function createPlayers (name, level) {
  const user = createUser(name);

  const increaseLevel = () => level++;
  return Object.assign(user, { increaseLevel });
}

const josh = createPlayers("josh",67)
console.log(josh)
console.log(Object.keys(josh))