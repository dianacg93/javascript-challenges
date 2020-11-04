const targetSumExistsInTwoNumbers = (list, target) => {
  for (let i in list) {
    for (let j in list) {
      if (list[i] + list[j] === target) {
        return true;
      }
    }
  }
};

const targetSumExistsInThreeNumbers = (list, target) => {
  return false
}

module.exports = {
  targetSumExistsInTwoNumbers,
  targetSumExistsInThreeNumbers
}
