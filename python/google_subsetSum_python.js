def twoSumNaive(arr, S):

  sums = []

  # check each element in array
  for i in range(0, len(arr)):

    # check each other element in the array
    for j in range(i+1, len(arr)):

      # determine if these two elements sum to S
      if (arr[i] + arr[j] == S):
        sums.append([arr[i], arr[j]])

  # return all pairs of integers that sum to S
  return sums



def twoSum(arr, S):

  sums = []
  hashTable = {}

  # check each element in array
  for i in range(0, len(arr)):

    # calculate S minus current element
    sumMinusElement = S - arr[i]

    # check if this number exists in hash table
    # if so then we found a pair of numbers that sum to S
    if sumMinusElement in hashTable:
      sums.append([arr[i], sumMinusElement])

    # add the current number to the hash table
    hashTable[arr[i]] = arr[i]

  # return all pairs of integers that sum to S
  return sums
