const twoSums = (nums, target) => {
  const firstNumber = nums[0];
  let objMap = {};
  objMap[firstNumber] = 0;
  for (i = 1; i < nums.length; i++) {
    const requiredNumber = target - nums[i];
    if (requiredNumber in objMap) {
      return [objMap[requiredNumber], i];
    }
    objMap[nums[i]] = i;
  }
  return [];
};

console.log(twoSums([3, 2, 4], 6));
