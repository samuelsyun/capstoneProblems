def duplicates(arr):

# where we will store our duplicate values
dups = []

for i in range(0, len(arr)):

  # get element in array and check if array is in bounds
  if abs(arr[i]) == len(arr):
    el = -1
  else:
    el = arr[abs(arr[i])]

  # element in array is positive so make it negative
  if el > 0:
    arr[abs(arr[i])] = -arr[abs(arr[i])]

  # special case if element is zero
  # we set the value at this index to -arr.size as not to
  # mix this number up with the others because we know the
  # numbers are all in the range of 0 to n-1
  elif el == 0:
    arr[abs(arr[i])] = -len(arr)

  # element is negative so it is a duplicate
  else:
    if abs(arr[i]) == len(arr):
      dups.append(0)
    else:
      dups.append(abs(arr[i]))

return dups
