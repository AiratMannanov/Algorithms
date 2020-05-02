const serachInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let midVal = nums[mid];
    if (target === midVal) {
      return mid;
    } else if (target > midVal) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

//  O(log n)
