// Write a function called sumIntervals/sum_intervals() that accepts an
// array of intervals, and returns the sum of all the interval lengths.
// Overlapping intervals should only be counted once.

// Intervals are represented by a pair of integers in the form of an array.
// The first value of the interval will always be less than the second value.
// Interval example: [1, 5] is an interval from 1 to 5. The length of this
// interval is 4.

// Overlapping Intervals

// List containing overlapping intervals:

// [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ]

// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap,
// we can treat the interval as [1, 5], which has a length of 4.

// const sumIntervals = (intervals) => {
//   // Enumerate each interval
//   const enumeratedIntervals = enumerateIntervals(intervals);

//   // Merge enumerated intervals into a set
//   const enumIntervalSet = [...new Set(enumeratedIntervals.flat())];

//   // length of above set gives sum of inputted intervals
//   return enumIntervalSet.length;
// };

// const enumerateIntervals = (intervals) => {
//   // Enumerate each interval, omitting upper bound e.g. [1,4]
//   // will become [1,2,3]
//   const enumIntervals = [];
//   intervals.forEach((interval) => {
//     const enumInterval = [];
//     for (let i = interval[0]; i < interval[interval.length - 1]; i++) {
//       enumInterval.push(i);
//     }
//     enumIntervals.push(enumInterval);
//   });
//   return enumIntervals;
// };

// ****************************************************************************
// need to modify above as, for large tests, there was an issue with memory
// -> create a set at the start and add each enumerated array as its processed?

const sumIntervals = (intervals) => {
  let enumIntervalSet = [...new Set()];
  // Enumerate each interval, omitting upper bound (e.g. [1,4]
  // becomes [1,2,3]) and place into the set
  intervals.forEach((interval) => {
    const enumInterval = [];
    for (let i = interval[0]; i < interval[interval.length - 1]; i++) {
      enumInterval.push(i);
    }
    enumIntervalSet.push(enumInterval);
    enumIntervalSet = [...new Set(enumIntervalSet.flat())];
  });
  // Sum of intervals is number of elements in set
  return enumIntervalSet.length;
};

console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ])
);

// Both approaches work but issues with memory heap when it comes to the
// large random tests - will have to skip this one for now :(
