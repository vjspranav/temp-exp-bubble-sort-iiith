### Running Time of Bubble Sort

Lets assume that we are sorting **N** elements of a given array using SIMPLE Bubble Sort.

- To complete one iteration, we traverse the array **exactly once**. Since we perform N-1 comparisons in an iteration, time complexity of completing one iteration is **O(N)**.
- In regular Bubble Sort, we run N-1 iterations, which is O(N), to sort our array. Hence overall time complexity becomes O(N*N). Note that even if array is fully sorted initially, regular Bubble Sort will take O(N<sup>2</sup>) time to complete.

### Best and Worst Cases for Optimized Bubble Sort

For regular Bubble Sort, time complexity will be O(N<sup>2</sup>) in all cases. For optimized Bubble Sort :

- In best case scenario, we will have an already sorted array. We will have to run one iteration (N-1 comparisons) to determine this. Time complexity will be O(N) in this case.
- In worst case (reverse sorted array) we will have to run N iterations to sort our array. Total comparisons performed will be (N-1)+(N-2)+(N-3)....+2+1. Hence overall time complexity becomes O(N<sup>2</sup>).

Try out the demo below and look out for the number of comparisons performed for sorted, reverse sorted and randomly generated array using optimized Bubble Sort. Notice how the number of comparisons always remains between O(N) and O(N<sup>2</sup>)! 


### Space Complexity of Bubble Sort

While swapping two elements, we need some extra space to store temporary values. Other than that, the sorting can be done in-place. Hence space complexity is O(1) or constant space.

