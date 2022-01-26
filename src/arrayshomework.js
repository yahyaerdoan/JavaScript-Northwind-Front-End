// indexleri toplamı 9 yapan sayıların return edilmesi sonuç index numarasını döndürüyor.
/* let nums = [2, 7, 11, 15],
  target = 9;

var sumOfTwoIndexNumbers = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        console.log([i, j]);
      }
    }
  }
};
sumOfTwoIndexNumbers(nums, target); */

// 1. ve 2. index toplamı 6 sonuç 1,2 indexsi verdi.
/* let nums = [3, 2, 4],
  target = 6;

var sumOfTwoIndexNumbers = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        console.log([i, j]);
      }
    }
  }
};
sumOfTwoIndexNumbers(nums, target); */

// 1. ve 2. index toplamı sonuç 1 ve 2 index verildi.
let nums = [3, 3],
  target = 6;

var sumOfTwoIndexNumbers = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        console.log([i, j]);
      }
    }
  }
};
sumOfTwoIndexNumbers(nums, target);
