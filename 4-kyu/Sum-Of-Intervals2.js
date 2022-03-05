// 2nd attempt - going easy on the poor old heap this time.
const sumIntervals = (intervals) => {
  // sort input intervals in ascending order
  intervals.sort((a, b) => {
    a = a[0];
    b = b[0];
    return a > b ? 1 : a < b ? -1 : 0;
  });
  // create array to hold intervals with no overlaps
  const mergedIntervals = [];
  let currentInterval = intervals[0];
  for (let i = 0; i < intervals.length - 1; i++) {
    // check if current interval is to be extended
    if (
      currentInterval[1] >= intervals[i + 1][0] &&
      intervals[i + 1][1] > currentInterval[1]
    ) {
      currentInterval = [currentInterval[0], intervals[i + 1][1]];
    } else if (intervals[i + 1][0] > currentInterval[1]) {
      // new interval required - push previous first
      mergedIntervals.push(currentInterval);
      currentInterval = [intervals[i + 1][0], intervals[i + 1][1]];
    }
  }

  //   push last current interval
  mergedIntervals.push(currentInterval);

  //   calculate sum of intervals
  let sum = 0;
  mergedIntervals.forEach((elt) => (sum += elt[1] - elt[0]));
  return sum;
};

// expecting 836? but getting 751 - now 918 after fixing the sorting
console.log(
  sumIntervals([
    [-370, -203],
    [439, 498],
    [33, 45],
    [154, 201],
    [-181, 429],
    [221, 256],
  ])
);

//   console.log(
//     sumIntervals([
//       [1, 4],
//       [7, 10],
//       [3, 5],
//     ])
//   );
