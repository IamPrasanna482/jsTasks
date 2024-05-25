// You are given an array of n elements and a sum value, you have to calculate the total number of ways to
//  calculate the given sum using the elements of the array by using only addition(+) and subtraction operator(-).


function findTotalWaysToTargetSum(arr, index, currSum, target, dp, totalSum) {
	if (currSum == target && index==arr.length){
        return 1;
    }

    if (index >= arr.length) return 0;

	if (dp[index][currSum+totalSum] !== -1)
		return dp[index][currSum+totalSum];

	return dp[index][currSum+totalSum] = findTotalWaysToTargetSum(arr, index + 1, currSum + arr[index], target,dp,totalSum)
					+ findTotalWaysToTargetSum(arr,index + 1, currSum - arr[index], target,dp,totalSum)
                    +findTotalWaysToTargetSum(arr,index+1,currSum,target,dp,totalSum) ;

}

function main() {
	const arr = [-1, 9, 8, -3, 4];
	let totalSum = 0;
	totalSum = arr.reduce((curr,prev) => curr+prev,0);
	const target = 5;

	var dp = new Array(arr.length+1);

	for (let i = 0; i < arr.length; i++) {
		dp[i] = new Array(2*(totalSum+1)).fill(-1);
	}

    // console.log(dp);
	console.log(findTotalWaysToTargetSum(arr, 0, 0, target,dp,totalSum));
}

main()
