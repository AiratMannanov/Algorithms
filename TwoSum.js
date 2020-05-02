// given an arrat of number and target
// return the indices of the nubmers that add up to the target 

// pointer method:
// for every Number in nums
//   - check every OTHER Number
//     - if == target, return indices


const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const want = target - num;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === want) return [i, j];
    }
  }
}

// O(n^2), space - O(1);

// hash table 
// for every Number in nums:
//   - calculate 'counterpart'
//   - in table? return indices
//   - not in table? store w/ index

const newTwoSum = function (sum, target) {
  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const want = target - num;
    if (want in hashTable) {
      const leftIndex = hashTable[want];
      return [leftIndex, i];
    } else {
      hashTable[num] = i;
    }
  }
}

// Time complexity - O(n), space complexity - O(n);


