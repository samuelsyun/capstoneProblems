def insertInterval(arr, interval):

newSet = []
endSet = []
i = 0

# add intervals that come before the new interval
while i < len(arr) and arr[i][1] < interval[0]:
  newSet.append(arr[i])
  i += 1

# add our new interval to this final list
newSet.append(interval)

# check each interval that comes after the new interval to determine if we can merge
# if no merges are required then populate a list of the remaining intervals
while i < len(arr):
  last = newSet[-1]
  if arr[i][0] < last[1]:
    newInterval = [min([last[0], arr[i][0]]), max([last[1], arr[i][1]])]
    newSet[-1] = newInterval
  else:
    endSet.append(arr[i])
  i += 1

return newSet + endSet

