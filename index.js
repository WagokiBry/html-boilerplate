function createUser (name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

let user1 = createUser("Bryan")

console.log(user1)

function createPlayer (name, level) {
  level = 67;
  const { getReputation, giveReputation } = createUser(name);
const getLevel = ()=>level;
  const increaseLevel = () => level++;
  
  return { name, getReputation, giveReputation, increaseLevel,getLevel };
}

const created = createPlayer("Gradin",5);
console.log(created)

function createPlayers (name, level) {
  const user = createUser(name);

  const increaseLevel = () => level++;
  return Object.assign(user, { increaseLevel });
}

const josh = createPlayers("josh",67)
console.log(josh)
