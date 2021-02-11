let findTheOldest = function (people) {
  let sortedArr = people.sort((a, b) => {
    if(a.yearOfDeath === undefined){
        a.yearOfDeath = 2020
    } else if (b.yearOfDeath === undefined){
        b.yearOfDeath = 2020
    }
    const lastPerson = a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath - b.yearOfBirth;
    if (lastPerson > nextPerson) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedArr[0];
};

module.exports = findTheOldest;
