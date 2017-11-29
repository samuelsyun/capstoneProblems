import math

def powerSet(arr):

  # the final power set
  powers = []

  # the total number of sets that the power set will contain
  total = int(math.pow(2, len(arr)))

  # loop through each value from 0 to 2^n
  for i in range(0, total):

    # our set that we add to the power set
    tempSet = []

    # convert the integer to binary
    num = "{0:b}".format(i)

    # pad the binary number so 1 becomes 001 for example
    while len(num) < len(arr):
      num = '0' + num

    # build the set that matches the 1's in the binary number
    for b in range(0, len(num)):
      if num[b] == '1':
        tempSet.append(arr[b])

    # add this set to the final power set
    powers.append(tempSet)

  return powers

