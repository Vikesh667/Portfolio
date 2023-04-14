import "./React.css";

// You are given an array of prices where prices[i] is
// the price of a given stock on the ith day.
// Return the maximum profit you can achieve from this
// transaction. If you cannot achieve any profit, return 0.

// Example:
// Input: prices = [7,1,5,3,6,4]
// Output: 5

function maxProfit(nums = []) {
  if (!nums.length) {
    return 0;
  }
  const profits = [];
  nums.forEach((num, idx) => {
    profits.push(Math.max(...nums.slice(idx)) - num);
  });

  return Math.max(...profits);
}

export default function Reactlogo() {
  // const prices = [7, 1, 5, 3, 6, 4];
  // const prices = [10, 9, 8, 7];
  // const prices = []
  const prices = [10];
  const answer = maxProfit(prices);

  return (
    <div className="App">
      <p>
        <strong>Answer:</strong> {answer}
      </p>
    </div>
  );
}